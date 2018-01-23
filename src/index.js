import * as THREE from 'three'
import { Input } from './input'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var input = new Input();     
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

var geometry = new THREE.BoxGeometry(1, 2, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5; 

function animate() {
    requestAnimationFrame(animate);
    if(input.isLeftPressed) {
        cube.position.x -= 0.1;
    }
    if(input.isRightPressed) {
        cube.position.x += 0.1;
    }
    if(input.isUpPressed) {
        cube.position.y += 0.1;
    }
    if(input.isDownPressed) {
        cube.position.y -= 0.1;
    }
    renderer.render(scene, camera);
}
animate();
