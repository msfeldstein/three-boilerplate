const canvas = require("@msfeldstein/full-screen-canvas")()
window.THREE = require('three')
const OrbitControls =  require('three-orbit-controls')(THREE)

window.scene = new THREE.Scene()
window.renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas
})
window.camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  .1,
  100
)
scene.add(camera)
camera.position.set(0, 20, -20)
camera.lookAt(new THREE.Vector3)

const controls = new OrbitControls(camera)

const renderCallbacks = []
function addRenderCallback(cb) {
  renderCallbacks.push(cb)
}

function render(t) {
  requestAnimationFrame(render)
  renderCallbacks.forEach((f) => f(t))
  renderer.render(scene, camera)
}
requestAnimationFrame(render)

module.exports = {
  canvas,
  scene,
  renderer,
  camera,
  addRenderCallback
}
