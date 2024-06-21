import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let controls;

//init controls
export const initControls = (camera, renderer) => {
  controls = new OrbitControls( camera, renderer.domElement );
  controls.minDistance = 1;
  controls.maxDistance = 10;
  controls.maxPolarAngle = Math.PI * 0.9;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  controls.target.set( 0, .2, 0 );
  controls.update();
  //return controls
  return controls;
}