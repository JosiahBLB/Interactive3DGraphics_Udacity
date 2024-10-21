import * as THREE from "three";

export function spawnDrinkingBird(scene: THREE.Scene) {
  const boxGeometry = new THREE.BoxGeometry(125.6, 389.8, 202.1);
  const materialGreen = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    side: THREE.FrontSide,
  });

  const supportMesh = createSupport();
  scene.add(supportMesh);

  const bodyMesh = createBody();
  scene.add(bodyMesh);

  const headMesh = createHead();
  scene.add(headMesh);
}

const zAxisSpine = -25;
const blueMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  side: THREE.FrontSide,
});
const redMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.FrontSide,
});

function createBody() {
  let body = new THREE.Object3D();

  const bottom = new THREE.SphereGeometry(58, 32, 10);
  const bottomMesh = new THREE.Mesh(bottom, getNextMaterial());
  bottomMesh.position.set(0, 160, zAxisSpine);
  body.add(bottomMesh);

  const radius = 16;
  const spine = new THREE.CylinderGeometry(radius, radius, 390, 32);
  const spineMesh = new THREE.Mesh(spine, getNextMaterial());
  spineMesh.position.set(0, bottomMesh.position.y + 195, zAxisSpine);
  body.add(spineMesh);

  return body;
}

function createHead() {
  let head = new THREE.Object3D();
  const skull = new THREE.SphereGeometry(52, 32, 10);
  const skullMesh = new THREE.Mesh(skull, getNextMaterial());
  skullMesh.position.set(0, 550, zAxisSpine);
  head.add(skullMesh);

  let radius = 40;
  const hatTop = new THREE.CylinderGeometry(radius, radius, 70, 32);
  const hatTopMesh = new THREE.Mesh(hatTop, getNextMaterial());
  hatTopMesh.position.set(0, skullMesh.position.y + 80, zAxisSpine);
  head.add(hatTopMesh);

  radius = 71;
  const hatRim = new THREE.CylinderGeometry(radius, radius, 10, 32);
  const hatRimMesh = new THREE.Mesh(hatRim, getNextMaterial());
  hatRimMesh.position.set(0, skullMesh.position.y + 45, zAxisSpine);
  head.add(hatRimMesh);

  return head;
}

function createSupport() {
  let support = new THREE.Object3D();

  const base = new THREE.BoxGeometry(77, 4, 154);
  let baseMesh = new THREE.Mesh(base, getNextMaterial());
  baseMesh.position.set(-77.0/2, 0, 0);
  support.add(baseMesh);
  baseMesh = new THREE.Mesh(base, getNextMaterial());
  baseMesh.position.set(77.0/2, 0, 0);
  support.add(baseMesh);

  const lowerSide = new THREE.BoxGeometry(6, 52, 154);
  let lowerSideMesh = new THREE.Mesh(lowerSide, getNextMaterial());
  lowerSideMesh.position.set(80, 24, 0);
  support.add(lowerSideMesh);
  lowerSideMesh = new THREE.Mesh(lowerSide, getNextMaterial());
  lowerSideMesh.position.set(-80, 24, 0);
  support.add(lowerSideMesh);

  const upperSide = new THREE.BoxGeometry(6, 282, 64);
  let upperSideMesh = new THREE.Mesh(upperSide, getNextMaterial());
  upperSideMesh.position.set(
    lowerSideMesh.position.x,
    lowerSideMesh.position.y + 0.5*282 + 0.5*52,
    zAxisSpine
  );
  support.add(upperSideMesh);
  upperSideMesh = new THREE.Mesh(upperSide, getNextMaterial());
  upperSideMesh.position.set(
    -lowerSideMesh.position.x,
    lowerSideMesh.position.y + 0.5*282 + 0.5*52,
    zAxisSpine
  );
  support.add(upperSideMesh);

  return support;
}

function createMaterialSwitcher() {
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ color: 0x00ffff, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ color: 0xff00ff, side: THREE.FrontSide }),
    ];
    let currentIndex = 0;

    return function getNextMaterial() {
        const material = materials[currentIndex];
        currentIndex = (currentIndex + 1) % materials.length;
        return material;
    };
}

const getNextMaterial = createMaterialSwitcher();