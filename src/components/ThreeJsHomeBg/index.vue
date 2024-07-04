<script setup lang="ts">
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

  let camera: {
      position: { set: (arg0: number, arg1: number, arg2: number) => void };
      far: number;
      aspect: number;
      updateProjectionMatrix: () => void;
    },
    scene: { fogNode: any; backgroundNode: any; add: (arg0: any) => void },
    renderer: {
      setPixelRatio: (arg0: number) => void;
      setSize: (arg0: number, arg1: number) => void;
      setAnimationLoop: (arg0: () => void) => void;
      domElement: any;
      render: (arg0: any, arg1: any) => void;
    };
  let controls: {
    target: { set: (arg0: number, arg1: number, arg2: number) => void };
    minDistance: number;
    maxDistance: number;
    maxPolarAngle: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
    update: () => void;
  };
  const reference = ref();

  onMounted(() => {
    setTimeout(() => {
      init();
    }, 2000);
  });
  function init() {
    const height = reference.value.offsetHeight;
    const width = reference.value.offsetWidth;
    if (WebGPU.isAvailable() === false && WebGL.isWebGL2Available() === false) {
      reference.value.appendChild(WebGPU.getErrorMessage());

      throw new Error('No WebGPU or WebGL2 support');
    }

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 600);
    camera.position.set(30, 15, 30);

    scene = new THREE.Scene();

    // custom fog

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

    // a alternative way to create a TimerNode
    const timer = uniform(0).onFrameUpdate((frame: { time: any }) => frame.time);

    const fogNoiseA = triNoise3D(positionWorld.mul(0.005), 0.2, timer);
    const fogNoiseB = triNoise3D(positionWorld.mul(0.01), 0.2, timer.mul(1.2));

    const fogNoise = fogNoiseA.add(fogNoiseB).mul(groundColor);

    // apply custom fog

    scene.fogNode = fog(fogNoiseDistance.oneMinus().mix(groundColor, fogNoise), groundFogArea);
    scene.backgroundNode = normalWorld.y.max(0).mix(groundColor, skyColor);

    // builds

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

    // lights

    scene.add(new THREE.HemisphereLight(skyColor.value, groundColor.value, 0.5));

    // geometry

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

    // renderer

    renderer = new WebGPURenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);
    reference.value.appendChild(renderer.domElement);

    // controls

    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 2, 0);
    controls.minDistance = 7;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;
    controls.update();

    window.addEventListener('resize', resize);
  }

  function resize() {
    const height = reference.value.offsetHeight;
    const width = reference.value.offsetWidth;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  }

  function animate() {
    controls.update();

    renderer.render(scene, camera);
  }
</script>
<template>
  <div class="three-js-home-bg" ref="reference"> </div>
</template>

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
