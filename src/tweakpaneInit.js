import * as THREE from 'three';
import { Pane }  from 'tweakpane';

export const initTweakpane = (GUIParams, scene, floor, model, controls) => {
  // Initialize Tweakpane
  const pane = new Pane();

  // Creating a folder for Auto Spin
  const colorFolder = pane.addFolder({title: 'Color Options'});

  // Sky Color control
  colorFolder.addInput(GUIParams, 'backgroundColor', {label: 'Sky Color'}).on('change', (value) => {
    let color = new THREE.Color(value.value);
    scene.fog = new THREE.Fog(color, 7, 25);
    scene.background = color;
    floor.material.color = color;
    floor.material.emissive = color;
  });

  // Car Color control
  colorFolder.addInput(GUIParams, 'color', {label: 'Car Color'}).on('change', (value) => {
    let color = new THREE.Color(value.value);
    model.children[1].material.color = color;
  });

  // Creating a folder for Auto Spin
  //const spinFolder = pane.addFolder({title: 'Rotation Options'});

  // Auto Spin control inside the folder
  pane.addInput(GUIParams, 'autoRotate', {label: 'Auto Spin'}).on('change', (value) => {
    controls.autoRotate = value.value;
  });
}
