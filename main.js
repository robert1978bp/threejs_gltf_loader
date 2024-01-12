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
  const url = 'monkey.gltf';
  gltfLoader.load(url, (gltf) => {
    const root = gltf.scene;
    scene.add(root);


  });

camera.position.z = 3;

	{

		const color = 0xFFFFFF;
		const intensity = 2.5;
		const light = new THREE.DirectionalLight( color, intensity );
		light.position.set( 5, 10, 2 );
		scene.add( light );
		scene.add( light.target );

	}

function animate() {
	requestAnimationFrame( animate );

	scene.rotation.x += 0.01;
	scene.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();