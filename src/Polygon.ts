import * as THREE from 'three';

export function createPolygon(sides: number, radius: number, location: THREE.Vector3) {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const indices = [];

  // Generate vertices
  for (let pt = 0; pt < sides; ++pt) {
    const angle = Math.PI / 2 + 2 * Math.PI * (pt / sides);
    const x = radius*Math.cos(angle) + location.x;
    const y = radius*Math.sin(angle) + location.y;
    vertices.push(x, y, location.z);
  }

  // Generate indices for faces
  for (let i = 0; i < sides - 2; ++i) {
    indices.push(0, i + 1, i + 2);
  }

  // Convert vertices array to Float32Array
  const verticesTypedArray = new Float32Array(vertices);

  // Set the position attribute for the geometry
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(verticesTypedArray, 3)
  );

  // Set the index attribute for the geometry
  geometry.setIndex(indices);

  // Create a basic material and a mesh to hold the geometry
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    side: THREE.FrontSide,
  });
  const polygon = new THREE.Mesh(geometry, material);

  return polygon;
}
