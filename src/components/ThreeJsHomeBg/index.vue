<template>
  <div class="three-js-home-bg" ref="reference"></div>
</template>

<script setup lang="ts">
  import DutyImg from '@/assets/images/business/duty.png';
  import * as THREE from 'three';
  import {
    color,
    fog,
    float,
    positionWorld,
    triNoise3D,
    positionView,
    normalWorld,
    uniform,
    MeshPhongNodeMaterial,
  } from 'three/nodes';

  import WebGPU from 'three/addons/capabilities/WebGPU.js';
  import WebGL from 'three/addons/capabilities/WebGL.js';

  import WebGPURenderer from 'three/addons/renderers/webgpu/WebGPURenderer.js';

  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { message } from 'ant-design-vue';

  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGPURenderer | THREE.WebGLRenderer;
  let controls: OrbitControls;
  const raycaster = ref(new THREE.Raycaster());
  const mouse = new THREE.Vector2();
  const clickableObjects: THREE.Object3D[] = [];

  const reference = ref<HTMLElement | null>(null);

  onMounted(() => {
    setTimeout(() => {
      init();
    }, 2000);
  });

  function init() {
    if (!reference.value) return;
    const height = reference.value.offsetHeight;
    const width = reference.value.offsetWidth;

    if (WebGPU.isAvailable() === false && WebGL.isWebGL2Available() === false) {
      reference.value.appendChild(WebGPU.getErrorMessage());
      throw new Error('No WebGPU or WebGL2 support');
    }

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 600);
    camera.position.set(30, 15, 30);

    scene = new THREE.Scene();

    // Custom fog
    const skyColor = color(0xf0f5f5);
    const groundColor = color('#eee');

    const fogNoiseDistance = positionView.z.negate().smoothstep(0, camera.far - 300);
    const distance = fogNoiseDistance.mul(20).max(4);
    const alpha = 0.98;
    const groundFogArea = float(distance)
      .sub(positionWorld.y)
      .div(distance)
      .pow(3)
      .saturate()
      .mul(alpha);

    const timer = uniform(0).onFrameUpdate((frame: { time: any }) => frame.time);
    const fogNoiseA = triNoise3D(positionWorld.mul(0.005), 0.2, timer);
    const fogNoiseB = triNoise3D(positionWorld.mul(0.01), 0.2, timer.mul(1.2));
    const fogNoise = fogNoiseA.add(fogNoiseB).mul(groundColor);

    scene.fogNode = fog(fogNoiseDistance.oneMinus().mix(groundColor, fogNoise), groundFogArea);
    scene.backgroundNode = normalWorld.y.max(0).mix(groundColor, skyColor);

    // Builds
    const buildWindows = positionWorld.y
      .mul(10)
      .floor()
      .mod(4)
      .sign()
      .mix(color('#fff').add(fogNoiseDistance), color('#000'));

    const buildGeometry = new THREE.BoxGeometry(1, 1, 1);
    const buildMaterial = new MeshPhongNodeMaterial({
      colorNode: buildWindows,
    });

    const buildMesh = new THREE.InstancedMesh(buildGeometry, buildMaterial, 4000);
    scene.add(buildMesh);

    const dummy = new THREE.Object3D();
    const center = new THREE.Vector3();

    for (let i = 0; i < buildMesh.count; i++) {
      const scaleY = Math.random() * 7 + 0.5;

      dummy.position.x = Math.random() * 600 - 300;
      dummy.position.z = Math.random() * 600 - 300;

      const distance = Math.max(dummy.position.distanceTo(center) * 0.012, 1);

      dummy.position.y = 0.5 * scaleY * distance;

      dummy.scale.x = dummy.scale.z = Math.random() * 3 + 0.5;
      dummy.scale.y = scaleY * distance;

      dummy.updateMatrix();

      buildMesh.setMatrixAt(i, dummy.matrix);
    }

    // 添加线条
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const lineGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array([0, 0, 0, 10, 10, 10, 10, 0, 0]);

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    // Lights
    scene.add(new THREE.HemisphereLight(skyColor.value, groundColor.value, 0.5));

    // Ground
    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: 0x999999,
    });

    const ground = new THREE.Mesh(planeGeometry, planeMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.scale.multiplyScalar(3);
    ground.castShadow = true;
    ground.receiveShadow = true;
    scene.add(ground);

    // Renderer
    renderer = new WebGPURenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);
    reference.value.appendChild(renderer.domElement);

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 2, 0);
    controls.minDistance = 7;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;
    controls.update();

    // 添加图标 (Sprite)
    const textureLoader = new THREE.TextureLoader();
    const map = textureLoader.load(DutyImg); // 替换为你的图标路径
    const spriteMaterial = new THREE.SpriteMaterial({ map: map });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.set(10, 10, 10); // 设置图标的位置
    sprite.scale.set(2, 2, 0.3); // 调整图标的大小
    scene.add(sprite);

    // 添加到可点击对象列表
    clickableObjects.push(sprite);

    window.addEventListener('resize', resize);
    window.addEventListener('click', onClick);
  }

  function resize() {
    if (!reference.value) return;
    const height = reference.value.offsetHeight;
    const width = reference.value.offsetWidth;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  }

  function onClick(event: MouseEvent) {
    // 将鼠标点击位置转换为标准化设备坐标 (NDC)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // 通过摄像机和鼠标位置更新射线
    raycaster.value.setFromCamera(mouse, camera);

    // 计算物体和射线的交点
    const intersects = raycaster.value.intersectObjects(clickableObjects, true);
    if (intersects.length > 0) {
      // 这里可以处理点击事件
      console.log('点击了图标', intersects[0].object);
      message.success('点击了图标');
    }
  }

  function animate() {
    controls.update();
    renderer.render(scene, camera);
  }
</script>

<style scoped lang="scss">
  .three-js-home-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 888;
  }
</style>
