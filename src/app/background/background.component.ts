import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass  } from 'three/examples/jsm/postprocessing/RenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";





@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent  implements OnInit {

  ngOnInit(): void {
   // Debug


// Canvas
const canvas = document.querySelector('.webgl') as HTMLCanvasElement;
const ubicacion = document.querySelector('.border') as HTMLCanvasElement;




const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); 

let  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)





/// creacion de la esfera




// textura y luces

let ambientLight = new THREE.AmbientLight(0xffffff, 7);
ambientLight.castShadow = true;
let spotLight = new THREE.SpotLight(0xffffff, 0.01);
spotLight.castShadow = false;
spotLight.position.set(-180, -1500, -100);
const esferaGrupo= new THREE.Group();

esferaGrupo.add(spotLight); 
esferaGrupo.add(ambientLight);
scene.add(esferaGrupo);

//creacion objeto



let loadedGltfScene1: THREE.Group;

const glftLoader = new GLTFLoader();
glftLoader.load('../../assets/movile.glb', (gltfScene) => {
  loadedGltfScene1 = gltfScene.scene;
  

  gltfScene.scene.scale.set(1, 1, 1);

  scene.add(gltfScene.scene);

  animate();
});



// render canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(((window.innerWidth*90)/100)-6, ((window.innerHeight*90)/100)-118);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 20));

if(window.innerWidth>1200){
  camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 5
  renderer.setSize(((window.innerWidth*90)/110)-6, ((window.innerHeight*90)/110)-109);
  
}
else{
   camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 5
  renderer.setSize(((window.innerWidth*90)/110)-6, ((window.innerHeight*90)/110)-118);
}
















const clock = new THREE.Clock();
function animate() {
  const elapsedTime = clock.getElapsedTime();

 
  loadedGltfScene1.rotation.y = 0.8 * elapsedTime;







 renderer.render(scene,camera);


  requestAnimationFrame(animate);
}












scene.add(camera)



/**
 * Renderer
 */




//bloom render



//////////////////////////////////


window.addEventListener('resize', () =>
{
  
  const width = (window.innerWidth * 90 / 100) - 6;
  const height = (window.innerHeight * 90 / 100) - 180;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(((window.innerWidth*90)/100)-6, ((window.innerHeight*90)/100)-118);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 20));
  if(window.innerWidth>1200){
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.x = 0
    camera.position.y = -1
    camera.position.z = 5
    renderer.setSize(((window.innerWidth*90)/100)-6, ((window.innerHeight*90)/100)-110);
    
  }
  else{
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 5
    renderer.setSize(((window.innerWidth*90)/100)-6, ((window.innerHeight*90)/100)-118);
  }

 


});







  }

}
