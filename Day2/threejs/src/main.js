//!Day-3 js
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


// mesh.position.x=0.7
// mesh.position.y=-0.6
// mesh.position.z=1

//! schorthand - mesh.position.set()
mesh.position.set(0.7,-0.6,1)


//!mesh.position.lenght() - distance between center of the scene to object
//!mesh.position.distanceTo(camera.position) - distance between camera to  object
 
//! mesh.position.normalize() - reduce the length of the mesh to 1
//! console.log(mesh.position.length())

//?AxisHelper

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

//Add scene:
scene.add(mesh)


//Scale:
mesh.scale.x=2
mesh.scale.y=0.5
mesh.scale.z=0.5

//! mesh scale.set() -- shorthand of scale 

//Rotation:
//! mesh.rotation.reorder('YXZ') - fixe the order
// - rotation - quaterian.
// rotation - Euler
// !mesh.rotation.y =3.1415 * 0.25 
// !mesh.rotation.x =3.1415 * 0.25

// quaterian. 






//Camera : Point of View - we need to provide the position of the camera.

//going to use perspectiveCamera

const sizes ={
    width: 800,
    height:600
}


const camera  = new THREE.PerspectiveCamera(45, sizes.width/sizes.height)  //degree - aspect ration
camera.position.z = 7 // moving backward camera
camera.position.x = 1 // moving left -right camera
camera.position.y = 1 // moving up-down camera

//! console.log(mesh.position.distanceTo(camera.position))


//! LookAt
camera.lookAt(mesh.position)

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



