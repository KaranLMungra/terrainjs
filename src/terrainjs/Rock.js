import { DodecahedronGeometry, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshPhongMaterial } from "three";

export default class Rock extends Mesh {
  constructor(scene, radius = 1, detail = 0, color = 0x5a4d41) {
    super();
    this.geometry = new DodecahedronGeometry(radius, detail);
    this.material = new MeshPhongMaterial({ color });
    scene.add(this);
  }
}