import * as THREE from 'three'

console.log(THREE)

const scene = new THREE.Scene();   //!container to put everything.

//objects to put inside the scene:
/**
 * *It can be many things like Primitive geometries, Imported models , Particles ,Lights Etc.
 * * To create a visible objects we need to create // ?Mesh combinations of gemomentry (Shape) and a materials (How it looks)
 */


//start with BoxGeometry:

//Read cube:

const geometry  = new THREE.BoxGeometry(1,1,1) //paramters are compared to box size unit

//material - look of the object

const material = new THREE.MeshBasicMaterial({color:'yellow'})

//create  the mesh object

const mesh = new THREE.Mesh(geometry,material) //?mesh is composed of geomentry and material

//Add scene:
scene.add(mesh)
//Camera : Point of View - we need to provide the position of the camera.

//going to use perspectiveCamera

const sizes ={
    width: 800,
    height:600
}


const camera  = new THREE.PerspectiveCamera(45, sizes.width/sizes.height)  //degree - aspect ration
camera.position.z = 3 // moving backward camera
// camera.scale.z = 1
//Renderer - render the scene through camera point of view:

const canvas = document.querySelector('.webql')

const renderer = new THREE.WebGLRenderer({
    canvas
})

//resize the canvas Sizes:
renderer.setSize(sizes.width,sizes.height)
// camera.position.y =2 // vertical scaling.

renderer.render(scene,camera) //we are inside the traniagle so we can see only black canvas

//?  to transform object we use properties: 
// ?position, rotation , scale ,quaternition :- postion - x,x, z axis



