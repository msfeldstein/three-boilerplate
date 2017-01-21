var {
  scene,
  renderer,
  camera,
  addRenderCallback
} = require("./") // require("@msfeldstein/three-boilerplate")

scene.add(new THREE.Mesh(
  new THREE.BoxBufferGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({
    color: 0xffc3ac
  })
))