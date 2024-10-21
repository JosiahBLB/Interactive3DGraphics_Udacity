import * as THREE from "three";

export function createStair(
  scene: THREE.Scene,
  stepDepth: number,
  stepHeight: number,
  nStairs: number
) {
  const width = 3;
  const thickness = 0.25;

  let stepVertical = new THREE.BoxGeometry(width, stepHeight, thickness);
  let stepHorizontal = new THREE.BoxGeometry(width, thickness, stepDepth);

  const materialGreen = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    side: THREE.FrontSide,
  });
  const materialYellow = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.FrontSide,
  });

  let y = 0,
    z = 0;
  for (let i = 0; i < nStairs; ++i) {
    let stepMeshV = new THREE.Mesh(stepVertical, materialGreen);
    let stepMeshH = new THREE.Mesh(stepHorizontal, materialYellow);

    y += stepHeight + thickness;
    z += stepDepth - thickness;
    stepMeshV.position.set(0, y + stepHeight * 0.5, -z);
    stepMeshH.position.set(
      0,
      y + stepHeight + thickness * 0.5,
      -z - stepDepth * 0.5 + thickness * 0.5
    );
    scene.add(stepMeshH);
    scene.add(stepMeshV);
  }
}
