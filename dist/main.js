// external modules
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { spawnDrinkingBird } from "./DrinkingBird.js";
// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(50, 800, 800);
// Set up OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping (inertia)
controls.dampingFactor = 0.25; // Damping factor
controls.screenSpacePanning = false; // Disable panning
// show unit vector axes
const axesHelper = new THREE.AxesHelper(50);
axesHelper.position.set(50, 0, 0);
scene.add(axesHelper);
// const polygon = createPolygon(5, 1, new THREE.Vector3(0, 0, 0));
// scene.add(polygon);
// createStair(scene, 1, 1, 5);
spawnDrinkingBird(scene);
// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
