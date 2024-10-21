import * as THREE from 'three';
export function createTriangle() {
    // Define geometry for the triangle (a simple custom geometry)
    const geometry = new THREE.BufferGeometry();
    // Vertices of the triangle (3 vertices)
    // prettier-ignore
    const vertices = new Float32Array([
        0.0, 1.0, 0.0, // Vertex 1
        -1.0, -1.0, 0.0, // Vertex 2
        1.0, -1.0, 0.0, // Vertex 3
    ]);
    // Set the position attribute for the geometry
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    // Create a basic material and a mesh to hold the geometry
    const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide,
    });
    const triangle = new THREE.Mesh(geometry, material);
    return triangle;
}
