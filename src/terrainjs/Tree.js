import { BoxGeometry, CylinderGeometry, DodecahedronGeometry, Group, IcosahedronGeometry, Mesh, MeshPhongMaterial, Sphere } from "three";

export default class Tree extends Group {
    constructor(scene, radius = 3, details = 2, trunkRadius = 1, trunkHeight = 10, leavesColor = 0x3a5f0b, trunkColor = 0x807153) {
        super();
        const lgeometry = new IcosahedronGeometry(radius, details);
        const lmaterial = new MeshPhongMaterial({color: leavesColor});
        const leaves = new Mesh(lgeometry, lmaterial);
        const tgeometry = new CylinderGeometry(trunkRadius, trunkRadius, trunkHeight);
        const tmaterial = new MeshPhongMaterial({color: trunkColor});
        const trunk = new Mesh(tgeometry, tmaterial);
        leaves.position.y = trunk.position.y + trunkHeight - radius;
        this.add(trunk);
        this.add(leaves);
        scene.add(this);
    }
}