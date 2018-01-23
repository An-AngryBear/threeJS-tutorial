import * as THREE from 'three'
import { Input } from './input'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var input = new Input();     
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)
//texture


var cube;
let addTexture = function () {
    var textureLoader = new THREE.TextureLoader();
    // we've gotta set this to use cross-origin images
    // load in the image
    textureLoader.crossOrigin = '';
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/4268-bump.jpg', function (bumpMap) {
        // apply the texture as a bump map
        textureLoader.load('https://threejs.org/examples/textures/crate.gif', function(texture) {
          // set the texture as the map for the material
            var material = new THREE.MeshPhongMaterial({ map: texture, bumpMap: bumpMap} );
          cube = new THREE.Mesh(geometry, material);
          scene.add(cube);
        });
    });

}
addTexture();

//cube



var light = new THREE.PointLight(0xFFFF00);
light.position.set(-5, 5, 4);
scene.add(light)

camera.position.z = 3; 

var lastTs = 0;
function animate(ts) {
    requestAnimationFrame(animate);

    var timeDelta = (ts - lastTs)/1000;
    lastTs = ts;

    var movementSpeed = 5*timeDelta;

    if(input.isLeftPressed) {
        cube.position.x -= movementSpeed;
    }
    if(input.isRightPressed) {
        cube.position.x += movementSpeed;
    }
    if(input.isUpPressed) {
        cube.position.y += movementSpeed;
    }
    if(input.isDownPressed) {
        cube.position.y -= movementSpeed;
    }
    renderer.render(scene, camera);
}
requestAnimationFrame(animate);
 