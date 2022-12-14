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
  PolyhedronGeometry,
  RepeatWrapping,
  Scene,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CubeRock from "./terrainjs/rocks/CubeRock";
import CylinderRock from "./terrainjs/rocks/CylinderRock";
import terrain_size from "./terrainjs/GrassTerrain";
import GrassTerrain from "./terrainjs/GrassTerrain";
import Rock from "./terrainjs/rocks/Rock";
import Tree from "./terrainjs/Tree";

let camera, scene, renderer, light1, terrain;

class App {
  init() {
    const light = new AmbientLight(0xffffff, 1);
    light.position.set(0, 3, 2);
    camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      100
    );
    camera.position.y = 2;
    camera.position.z = 30;
    camera.add(light);
    scene = new Scene();
    scene.background = new Color(0x87ceeb);
    scene.add(camera);
    light1 = new DirectionalLight(0xffffff, 2);
    light1.position.set(5, 50, -10);
    scene.add(light1);
    terrain = new GrassTerrain(scene);
    const central_tree = new Tree(scene, 20, 1, 4, 40);
    central_tree.position.set(0, 0, 0);
    const randomPosition = (e) => e.position.set(Math.random() * -10000 + 5000, 0, Math.random() * -5000 + 2500);
    for(let i=0; i<30000; ++i) {
      const radius = Math.random() * 10 + 2;
      const height = radius * 2; 
      const tree = new Tree(scene, radius, 1, radius / 3 + 1, height);
      randomPosition(tree);
    }
    for(let i=0; i<40000; ++i) {
      const size = Math.random() * 5 + 1;
      const rock = new CubeRock(scene, size);
      randomPosition(rock);
    }
    for(let i=0; i<20000; ++i) {
      const radius = Math.random() * 10 + 1;
      const rock = new Rock(scene, radius);
      randomPosition(rock);
    }
    for(let i=0; i<2000; ++i) {
      const radius = Math.random() * 30 + 1;
      const bradius = radius * (11/2) + 2;
      const height =  radius * 8 + 8;
      const rock = new CylinderRock(scene, radius, bradius, height);
      randomPosition(rock);
    }

    renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);

    addEventListener("keydown", (e) => {movement(e)});
    // const dir = camera.getWorldDirection(new Vector3());
    const controls = new OrbitControls(camera, renderer.domElement);
    animate();
  }
}

function movement(e) {
  const dir = camera.getWorldDirection(new Vector3());
  if (e.key === "w") {
    camera.position.x += dir.x * 0.5;
    camera.position.y += dir.y * 0.5;
    camera.position.z += dir.z * 0.5;
  } else if (e.key === "s") {
    camera.position.x -= dir.x * 0.5;
    camera.position.y -= dir.y * 0.5;
    camera.position.z -= dir.z * 0.5;
  } else if (e.key === "q") {
    if (camera.rotation.x < 0.7) {
      camera.rotateX(0.05);
    }
  } else if (e.key === "e") {
    if (camera.rotation.x > -0.7) {
      camera.rotateX(-0.05);
    }
  } else if (e.key === "a") {
    camera.rotateY(0.05);
  } else if (e.key === "d") {
    camera.rotateY(-0.05);
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export default App;
