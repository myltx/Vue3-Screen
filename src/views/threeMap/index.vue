<template>
  <div id="info"></div>
</template>

<script setup lang="ts">
  import * as THREE from 'three';
  import * as d3 from 'd3'; //莫开托坐标 矫正地图坐标
  import map from './map.json';
  // 引入轨道控制器扩展库OrbitControls.js
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  // 文本缓冲几何体
  import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
  // 一个用于加载JSON格式的字体的类
  import { FontLoader } from 'three/addons/loaders/FontLoader.js';

  const width = window.innerWidth,
    height = window.innerHeight;

  const mapColor = 'rgba(4, 163, 240, .5)';

  const handleProj = d3.geoMercator().center([109, 34.5]).scale(1000).translate([0, 0]); // d3投影转换函数
  const mapContainer = new THREE.Object3D(); // 存储地图Object3D对象

  // 创建相机
  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10000);
  camera.position.z = 1000;

  // 创建3D场景对象Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('rgba(0,0,0,.1)'); // 将背景颜色设置为白色

  // 初始化环境光
  const initLight = () => {
    const ambLight = new THREE.AmbientLight('#ffffff', 0.3); // 基本光源
    /**
     * 设置聚光灯相关的的属性，详情见P54
     */
    const spotLight = new THREE.SpotLight(0xffffff); // 聚光灯
    spotLight.position.set(40, 200, 10);
    spotLight.castShadow = true; // 只有该属性为true时，该点光源允许产生阴影，并且下列属性可用
    scene.add(ambLight, spotLight); // 向场景中添加光源
  };

  // 初始化渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);

  // 初始化地理数据集
  const initGeom = () => {
    // 加载中国地区的geoJson数据集
    // const fileLoader = new THREE.FileLoader();
    // fileLoader.load('/src/assets/map/map.json',
    //     (data) => {
    //         const chinaJson = JSON.parse(data)
    //         handleData(chinaJson)
    //     }
    // )
    handleData(map);
  };

  // 处理地图数据 GeoJson data
  const handleData = (jsonData) => {
    const feaureList = jsonData.features;
    feaureList.forEach((feature) => {
      // 每个feature都代表一个省份
      const province = new THREE.Object3D();
      province.properties = feature.properties.name; // 省份名称
      province.name = feature.properties.name; // 省份名称
      mapContainer.name = feature.properties.name; // 省份名称
      const coordinates = feature.geometry.coordinates; // 省份坐标信息
      if (feature.geometry.type === 'MultiPolygon') {
        coordinates.forEach((coord) => {
          coord.forEach((coordinate) => {
            // 三维多边形
            const extrudeMesh = creatDepthPolygon(coordinate);
            extrudeMesh.properties = feature.properties.name;
            // 线条
            const line = createLine(coordinate);
            province.add(extrudeMesh);
            province.add(line);
          });
        });
      }
      if (feature.geometry.type === 'Polygon') {
        coordinates.forEach((coordinate) => {
          // 三维多边形
          const extrudeMesh = creatDepthPolygon(coordinate);
          extrudeMesh.properties = feature.properties.name;
          // 线条
          const line = createLine(coordinate);
          province.add(extrudeMesh);
          province.add(line);
        });
      }
      mapContainer.add(province);
    });
    scene.add(mapContainer);
  };

  // 创建三维多边形
  const creatDepthPolygon = (coordinate) => {
    const shape = new THREE.Shape();

    coordinate.forEach((item, index) => {
      // 每一个item都是MultiPolygon中的一个polygon
      const [x_XYZ, y_XYZ] = handleProj(item);
      if (index === 0) {
        shape.moveTo(x_XYZ, -y_XYZ);
      } else {
        shape.lineTo(x_XYZ, -y_XYZ);
      }
    });
    const extrudeSettings = {
      steps: 2,
      depth: 16,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings); //挤压缓冲几何体
    const material = new THREE.MeshBasicMaterial({
      // color: new THREE.Color(Math.random() * 0xffffff), // 每个省随机赋色
      color: mapColor,
      transparent: true,
      opacity: 0.6,
    });
    return new THREE.Mesh(geometry, material);
  };

  // 创建线条
  const createLine = (coordinate) => {
    const material = new THREE.LineBasicMaterial({
      color: '#ffffff',
    });
    const points = [];
    coordinate.forEach((item, index) => {
      // 每一个item都是MultiPolygon中的一个polygon
      const [x_XYZ, y_XYZ] = handleProj(item);
      points.push(new THREE.Vector3(x_XYZ, -y_XYZ, 25));
    });

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    return new THREE.Line(geometry, material);
  };

  // 光线投射Raycaster
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  //鼠标放上去 改变颜色 显示地区名字
  let activeIntersects = []; //鼠标滑过数据
  const onPointerMove = (event) => {
    let info = document.querySelector('#info');
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(pointer, camera);

    // 判断数组是否有数据，有数据全部设置为原始数据
    if (activeIntersects.length) {
      for (let i = 0; i < activeIntersects.length; i++) {
        activeIntersects[i].object.material.color.set(mapColor);
      }
    }
    // 计算物体和射线的焦点
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length && intersects[0].object.parent.name) {
      // 设置hove 弹框的宽高
      info.style.left = event.clientX + 'px';
      info.style.top = event.clientY + 'px';
      info.style.display = 'block';
      info.innerHTML = intersects[0].object.parent.name;
    } else {
      info.style.display = 'none';
    }

    // 数组数据清空
    activeIntersects = [];

    // 滑过的当前这个高亮
    for (let i = 0; i < intersects.length; i++) {
      if (intersects[i].object.type === 'Mesh') {
        intersects[i].object.material.color.set('#00fafd');
        activeIntersects.push(intersects[i]);
      }
    }
  };

  window.addEventListener('pointermove', onPointerMove);

  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; //阻尼 更真实

  // 因为后期是每一帧都需要渲染，需要封装一个渲染函数
  const render = () => {
    // 使用渲染器，通过相机 将场景渲染出来
    renderer.render(scene, camera);
    // 渲染下一帧的时候会调用render函数
    requestAnimationFrame(render);
  };

  // 4.获取dom实例
  onMounted(() => {
    initGeom();
    initLight();
    render();
    document.body.appendChild(renderer.domElement);
  });
</script>

<style>
  #info {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 2px;
    padding: 5px 10px;
    display: none;
    width: auto; /* 设置宽度自适应 */
  }
</style>
