import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { ambientOcclusion } from 'three/src/nodes/core/PropertyNode.js';

// 1. Create Scene
const scene = new THREE.Scene();
const clock = new THREE.Clock();    

const size = {
  width: window.innerWidth,
  height: window.innerHeight

};

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("https://images.unsplash.com/photo-1786299600434-04022e2fa651?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",()=>{
  console.log("The texture is loaded")
},()=>{
  console.log("On progress")
},()=>{
  console.log("Error on loading")
})


const texture2 = textureLoader.load("https://plus.unsplash.com/premium_photo-1787672487557-96b6f476ef4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D")
// 2. Create Camera
const camera = new THREE.PerspectiveCamera(
  75,
  size.width / size.height,
  0.01,
  100
);

// Move camera backward
camera.position.z = 10;

// const ambientLight = new THREE.AmbientLight("#ffffff",3.2)
// scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight("#ffffff",3.1);
directionalLight.position.set(1,2,3)
scene.add(directionalLight);

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(directionalLightHelper);


const pointLight = new THREE.PointLight("#ffff",2,1.2,1);
pointLight.position.set(0,2,0);
scene.add(pointLight);
// 3. Create Geometry
 const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.CylinderGeometry(5,5,20,32)

// 4. Create Material
const material = new THREE.MeshStandardMaterial({
  color: "red",
  map:texture2
});

// 5. Create Mesh
const cube = new THREE.Mesh(geometry, material);


// 6. Add Cube to Scene
scene.add(cube);
// cube.position.x = 1;
// cube.position.y = 1;
// cube.position.z = 1;

// cube.scale.x = 2;
// cube.scale.set(1, 1, 1);
// cube.rotation.x = Math.PI * 2;
// cube.position.set(1, 1, 1);
// 7. Rotate Cube


// 8. Get Canvas
const canvas = document.querySelector("canvas");

// 9. Create Renderer
const renderer = new THREE.WebGLRenderer({
  canvas
});

// 10. Set Renderer Size
renderer.setSize(size.width, size.height);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;



window.addEventListener("resize", ()=>{
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
})

// 11. Render Scene
const animate = ()=>{
  const dlta = clock.getElapsedTime();
  cube.rotation.y = dlta;
  controls.update();
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

animate();