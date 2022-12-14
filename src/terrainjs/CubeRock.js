import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";

export default class CubeRock extends Mesh {
  constructor(scene, size = 1, color = 0x5a4d41) {
    super();
    this.geometry = new BoxGeometry(size, size, size);
    this.material = new MeshPhongMaterial({ color });
    scene.add(this);
  }
}
