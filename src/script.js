import * as THREE from "three";
import Stats from 'three/addons/libs/stats.module.js';
import { initDevice, 
         initScene,
         initObjects,
         initRenderer,
         initPostprocessing,
         initControls,
         initTweakpane,
         initResizeListener } from "./sceneTools.js";

//gui parameters
const GUIParams = {
  color: '#f55858', // Default color
  backgroundColor: '#7ab0ff', // Default background color
  autoRotate: true, // Default autoRotate
};

//init variables
let scene, camera, renderer, clock;
let model, floor, controls, stats;
let composer, fxaaPass;

// render loop
const renderloop = () => {
  requestAnimationFrame(renderloop);
  controls.update();
  stats.update();
  composer.render();
  //const delta = clock.getDelta();
  const t = clock.getElapsedTime();
  model.position.y = Math.sin(t) * 0.1 -.333;
};

//init function
async function init() {

  //init device
  const [isMobile, hasGPU, usePerformanceMode, pixelRatio] = initDevice();

  //init scene
  [scene, camera] = initScene(isMobile);
  scene.fog = new THREE.Fog( GUIParams.backgroundColor, 7, 150 );
  scene.background = new THREE.Color( GUIParams.backgroundColor );

  //init objects
  try {
    [model, floor] = await initObjects(GUIParams, scene);
    if (usePerformanceMode) {
      model.children[2].children[0].material.transmission = 0;
      model.children[2].children[0].material.color = new THREE.Color("#8a8a8a");
    }
    model.children[1].material.color = new THREE.Color(GUIParams.color);
    model.children[0].material.emissiveIntensity = 4;
    model.children[2].children[0].material.emissiveIntensity = 6;
    document.getElementById('loadingOverlay').style.display = 'none';
  } catch (error) {
    console.error('Failed to load the model', error);
  }

  //init renderer
  renderer = initRenderer(pixelRatio);

  //init postprocessing
  [composer, fxaaPass] = initPostprocessing(usePerformanceMode,
                                            renderer,
                                            scene,
                                            camera,
                                            pixelRatio);
  
  //init stats
  stats = new Stats();
  document.body.appendChild( stats.dom );
  
  //init controls
  controls = initControls(camera, renderer);

  //init tweakpane
  initTweakpane(GUIParams, scene, floor, model, controls);

  //init resize event gui
  initResizeListener(camera, renderer, composer, fxaaPass, pixelRatio);

  //init clock
  clock = new THREE.Clock();
  renderloop();
}

init().catch(error => console.error("initialization failed: ", error));
