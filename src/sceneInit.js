import * as THREE from "three";

//init scene
export const initScene = (isMobile) => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    //camera
    const camera = new THREE.PerspectiveCamera( 50, aspectRatio, 0.25, 30 );
    if (isMobile || aspectRatio < 1) {
        camera.position.set(6, 1, 6); // Adjust Z to move further away
    } else {
        camera.position.set(4, 1, 4);
    }

    //scene
    const scene = new THREE.Scene();
    camera.lookAt( 0, 0, 0 );

    //lighting
    const sunLight = new THREE.DirectionalLight( 0xFFFFFF, 3.3 );
    sunLight.castShadow = true;
    sunLight.shadow.radius = 9;
    sunLight.shadow.camera.near = .1;
    sunLight.shadow.camera.far = 15;
    sunLight.shadow.camera.right = 3;
    sunLight.shadow.camera.left = - 3;
    sunLight.shadow.camera.top = 2;
    sunLight.shadow.camera.bottom = - 2;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = - 0.001;
    sunLight.position.set( 5, 2.25, 3 );
    /*sunlight shadow helper
    const sunLightHelper = new THREE.CameraHelper( sunLight.shadow.camera );
    scene.add( sunLightHelper ); */

    //ambient light
    const skyAmbientLight = new THREE.AmbientLight( 0xFFFFFF, .666 );
    //add lights to scene
    scene.add( sunLight );
    scene.add( skyAmbientLight );

    return [scene, camera ];
}