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
    camera.position.z = 4;
    camera.add(light);
    scene = new Scene();
    // const rock = new CylinderRock(scene, 1);
    // rock.position.set()
    scene.background = new Color(0x87ceeb);
    scene.add(camera);
    light1 = new DirectionalLight(0xffffff, 0.5);
    light1.position.set(-10, 50, 10);
    scene.add(light1);
    terrain = new GrassTerrain(scene);
    const tree = new Tree(scene);
    //   const verticesOfCube = [
    //     -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    //     -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
    // ];

    // const indicesOfFaces = [
    //     2,1,0,    0,3,2,
    //     0,4,7,    7,3,0,
    //     0,1,5,    5,4,0,
    //     1,2,6,    6,5,1,
    //     2,3,7,    7,6,2,
    //     4,5,6,    6,7,4
    // ];

    // const geometry = new PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
    // const material = new MeshPhongMaterial({color: 0x00ff00});
    // const tree_leaver = new Mesh(geometry, material);
    // tree_leaver.position.set(0, 5, -5);
    // scene.add(tree_leaver);
    renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);

    addEventListener("keydown", (e) => {
      if (e.key === "w") {
        camera.position.z -= 0.1;
      } else if (e.key === "s") {
        camera.position.z += 0.1;
      } else if (e.key === "q") {
        if (camera.rotation.x < 0.7) {
          camera.rotateX(0.01);
        }
      } else if (e.key === "e") {
        if (camera.rotation.x > -0.7) {
          camera.rotateX(-0.01);
        }
      } else if (e.key === "a") {
        camera.rotateY(0.01);
      } else if (e.key === "d") {
        camera.rotateY(-0.01);
      }
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    animate();
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
