import {
    Camera,
    Color,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    AmbientLight,
  } from "https://cdn.skypack.dev/three@0.132.2";
  
  import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';

const container = document.querySelector('#scene-container');
const scene = new Scene();
const renderer = new WebGLRenderer();
const hlight = new AmbientLight (0x404040,100);
const fov = 80;
const aspect = screen.width / screen.height;
const near = 0.1;
const far = 100; 
const camera = new PerspectiveCamera(fov, aspect, near, far);
const loader = new GLTFLoader();

scene.background = new Color('white');
camera.position.set(0, 50, 100);
scene.add(hlight);
renderer.setSize(screen.width, screen.height);
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);

loader.load('tree.glb', function(gltf){
  const car = gltf.scene.children[0];
  car.scale.set(1.5,1.5,1.5);
  scene.add(gltf.scene);
  animate();
});
renderer.render(scene, camera);

function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }

