import { DodecahedronGeometry, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshPhongMaterial } from "three";

export default class Rock extends Mesh {
    constructor(scene, position = {x: 0, y: 0, z:0}, radius = 1, detail = 0, color = 0x5A4D41) {
        super();
        this.geometry = new DodecahedronGeometry(radius, detail);
        this.material = new MeshPhongMaterial({color});
        this.position.set(position.x, position.y, position.z);
        console.log(this);
        scene.add(this);
    }
}