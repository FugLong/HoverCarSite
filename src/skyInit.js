import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';

let sky, sun;

//init sky
export const initSky = (scene, renderer) => {
  sky = new Sky();
  sky.scale.setScalar( 450000 );
  sky.exposure = renderer.toneMappingExposure;
  scene.add( sky );
  sun = new THREE.Vector3();
  //Default Settings
  const uniforms = sky.material.uniforms;
  uniforms[ 'turbidity' ].value = 0;
  uniforms[ 'rayleigh' ].value = .018;
  uniforms[ 'mieCoefficient' ].value = .005;
  uniforms[ 'mieDirectionalG' ].value = 0.7;
  //Rotation
  const phi = THREE.MathUtils.degToRad( 90 - 30.3 );
  const theta = THREE.MathUtils.degToRad( 63.8 );
  sun.setFromSphericalCoords( 1, phi, theta );
  uniforms[ 'sunPosition' ].value.copy( sun );
}