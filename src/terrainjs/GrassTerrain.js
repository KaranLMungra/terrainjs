import { Mesh, MeshBasicMaterial, PlaneGeometry, RepeatWrapping, Vector3 } from "three";

const terrain_size = 10000;
// export default terrain_size;
export default class GrassTerrain extends Mesh {
    constructor(color = 0x228B22, tex = undefined, position = new Vector3(0, -0.5, 0)) {
        super();
        this.geometry = new PlaneGeometry(terrain_size, terrain_size);
        if (tex === undefined) {
            // tex.repeat.x = RepeatWrapping;
            this.material = new MeshBasicMaterial({color});
        } else {
            this.material = new MeshBasicMaterial({map: tex});
        }
        this.rotateX(- Math.PI / 2);
        this.position.copy(position);
    }
}