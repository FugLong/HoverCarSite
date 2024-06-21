import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';

let composer, fxaaPass;

//init postprocessing
export const initPostprocessing = (usePerformanceMode, renderer, scene, camera, pixelRatio) => {
    //instantiate composer
    composer = new EffectComposer( renderer );
    //render pass
    const renderScene = new RenderPass( scene, camera );
    composer.addPass( renderScene );
    //bloom pass
    const renderBloomPass = new UnrealBloomPass(
      new THREE.Vector2( window.innerWidth, window.innerHeight ), .333, 0, 1
      );
    composer.addPass( renderBloomPass );
    //output pass
    const outputPass = new OutputPass();
    composer.addPass( outputPass );
    if (true /*!usePerformanceMode*/) {
      //fxaa pass
      fxaaPass = new ShaderPass( FXAAShader );
      fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( window.innerWidth * pixelRatio );
      fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( window.innerHeight * pixelRatio );
      composer.addPass( fxaaPass );
    }
    //return composer and fxaapass
    return [composer, fxaaPass];
    }