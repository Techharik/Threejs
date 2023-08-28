import * as THREE from 'three'

const scene = new THREE.Scene()

const group = new THREE.Group()
group.position.y=1
// group.rotation.y=-1
scene.add(group)

// const gemomentry = new THREE.BoxGeometry(1,1,1)

// const material = new THREE.MeshBasicMaterial({color:'green'})

// const mesh = new THREE.Mesh(gemomentry,material)

// scene.add(mesh)

//another way:
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'green'})
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'red'})
)

group.add(cube1)

cube2.position.x = 2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'violet'})
)
cube3.position.x = -2

group.add(cube3)





const sizes ={
    width:800,
    height:600
}

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z=4
camera.position.x=-0.2
// scene.add(camera)


const canvas = document.querySelector('.webql')

const renderer = new THREE.WebGLRenderer({
    canvas
})



//resize the canvas Sizes:
renderer.setSize(sizes.width,sizes.height)
// camera.position.y =2 // vertical scaling.

renderer.render(scene,camera) 