import * as THREE from 'three';
// import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

  const gltfLoader = new GLTFLoader();
  const url = 'monkey2.gltf';
  gltfLoader.load(url, (gltf) => {
    const root = gltf.scene;
    scene.add(root);

  });

camera.position.z = 3;

	{
		const color = 0x4444FF;
		const intensity = 10.5;
		const light = new THREE.DirectionalLight( color, intensity );
		light.position.set( 55, 110, 112 );
		scene.add( light );
		scene.add( light.target );
	}

	{
		const color2 = 0xFF6666;
		const intensity2 = 10.5;
		const light2 = new THREE.DirectionalLight( color2, intensity2 );
		light2.position.set( -115, 110, 12 );
		scene.add( light2 );
		scene.add( light2.target );
	}

function animate() {
	requestAnimationFrame( animate );

	//scene.rotation.x += 0.01;
	scene.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
