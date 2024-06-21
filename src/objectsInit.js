import * as THREE from "three";
import { Reflector } from 'three/addons/objects/Reflector.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

let floor, groundMirror;

//init objects
export const initObjects = (GUIParams, scene) => {
    const floorGeometry = new THREE.PlaneGeometry( 100, 100 );

    //Floor reflection setup
    groundMirror = new Reflector( floorGeometry, {
        clipBias: 0.003,
        textureWidth: window.innerWidth * (window.devicePixelRatio / 2),
        textureHeight: window.innerHeight * (window.devicePixelRatio / 2),
        color: 0xb5b5b5
    } );
    groundMirror.position.y = - 1.001;
    groundMirror.rotateX( - Math.PI / 2 );
    groundMirror.receiveShadow = true;
    scene.add( groundMirror );

    // Floor setup
    const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(GUIParams.backgroundColor),
        roughness: 0,
        emissive: new THREE.Color(GUIParams.backgroundColor),
        emissiveIntensity: .5,
        transparent: true,
        opacity: 0.5,
    });
    floor = new THREE.Mesh( floorGeometry, material );
    floor.rotation.x = - Math.PI / 2;
    floor.position.y = - 1;
    floor.receiveShadow = true;
    floor.castShadow = false;
    scene.add(floor);

    const dracoLoader = new DRACOLoader().setDecoderPath('/draco/');
    const loader = new GLTFLoader().setDRACOLoader(dracoLoader);

    // Returning a Promise
    return new Promise((resolve, reject) => {
        loader.load('/models/flyingCar.gltf', function (gltf) {
            const model = gltf.scene;
            model.children[1].castShadow = true;
            model.children[2].children[0].castShadow = true;
            model.receiveShadow = true;
            model.position.y = -1;

            scene.add(model);
            resolve([model, floor]); // Resolve the Promise with the loaded model
        }, undefined, function (error) {
            reject(error); // Reject the Promise if there's an error
        });
    });
}