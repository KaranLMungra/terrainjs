import { BoxGeometry, CylinderGeometry, Mesh, MeshPhongMaterial } from "three";

export default class CylinderRock extends Mesh {
  constructor(
    scene,
    radiusTop = 1,
    radiusBottom = 4,
    height = 2,
    color = 0x5a4d41
  ) {
    super();
    this.geometry = new CylinderGeometry(radiusTop, radiusBottom, height);
    this.material = new MeshPhongMaterial({ color });
    scene.add(this);
  }
}
