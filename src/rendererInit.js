import * as THREE from 'three';

let renderer;

//init renderer
export const initRenderer = (pixelRatio) => {
  //renderer = new WebGPURenderer( { antialiasing : true} );
  renderer = new THREE.WebGLRenderer( /*{ antialiasing : true}*/ );
  renderer.stencil = false;
  renderer.shadowMap.enabled = true;
  //renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  renderer.setPixelRatio( pixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  return renderer;
}