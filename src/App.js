import {
	AmbientLight,
	BoxGeometry,
	Color,
	DirectionalLight,
	DodecahedronGeometry,
	Group,
	Mesh,
	MeshBasicMaterial,
	MeshPhongMaterial,
	PerspectiveCamera,
	PointLight,
	RepeatWrapping,
	Scene,
	TextureLoader,
	WebGLRenderer
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import terrain_size from './terrainjs/GrassTerrain';
import GrassTerrain from './terrainjs/GrassTerrain';
import Rock from './terrainjs/Rock';

let camera, scene, renderer, light1, terrain;

class App {

	init() {

		const light = new AmbientLight(0xffffff, 1);
		light.position.set(0, 3, 2);
		camera = new PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 100 );
		camera.position.z = 4;
		camera.add(light);

		scene = new Scene();
		const rock = new Rock(scene, {x: 0, y: 0, z: -10}, 0.5, 1);
		// rock.position.set()
		scene.background = new Color(0x87CEEB);
		scene.add(camera);
		light1 = new DirectionalLight(0xffffff, 0.5);
		light1.position.set(-10, 50, 10);
		scene.add(light1);
		terrain = new GrassTerrain();
		scene.add(terrain);
		
		renderer = new WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );
		
		window.addEventListener( 'resize', onWindowResize, false );
		
		addEventListener('keydown', (e) => {
			if(e.key === 'w') {
				camera.position.z -= 0.1;
			} else if(e.key === 's') {
				camera.position.z += 0.1;
			}
		});

		const controls = new OrbitControls( camera, renderer.domElement );

		animate();

	}

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}

export default App;
