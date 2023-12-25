$( document ).ready(function() {

var globe = document.getElementById('globe')    
var Maxwidth = window.innerWidth
var Maxheight = window.innerHeight


var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer({antilias:true});

renderer.setPixelRatio( window.devicePixelRatio );

renderer.setSize(Maxwidth,Maxheight)

globe.appendChild(renderer.domElement)


var camera = new THREE.PerspectiveCamera(60, Maxwidth / Maxheight,1,1000);

camera.position.z = 50;

var controls = new THREE.OrbitControls( camera, renderer.domElement );

controls.enableDamping = true; 

controls.dampingFactor = 0.25;

controls.panningMode = THREE.HorizontalPanning; // default is 
THREE.ScreenSpacePanning


controls.maxPolarAngle = Math.PI / 2;

var geometry = new THREE.SphereGeometry( 200, 42, 42 );

geometry.widthSegments = 42;

var colors = [];

for( var i = 0; i < geometry.vertices.length; i++ ) {
    colors[i] = new THREE.Color();
}
geometry.colors = colors;

// texture
var texture = new THREE.Texture( generateTexture( ) );
texture.needsUpdate = true; // important

// particle system material
var material = new THREE.ParticleBasicMaterial( {
    size: 5,
    map: texture,
    blending: THREE.AdditiveBlending, // required
    depthTest: false, // required
    transparent: true,
    opacity: 0.7,
    vertexColors: true // optional
} );

material.map = THREE.ImageUtils.loadTexture('../img/point_picker.png')

material.anisotropy = 0;
material.magFilter = THREE.NearestFilter;
material.minFilter = THREE.NearestFilter;

var union = new THREE.ParticleSystem( geometry, material );

function generateTexture( ) {

var size = 128;

var canvas = document.createElement( 'canvas' );
canvas.width = size;
canvas.height = size;

var context = canvas.getContext( '2d' );

var centerX = size / 2;
var centerY = size / 2;
var radius = size / 2;

context.beginPath();
context.arc( centerX, centerY, radius, 0, 2 * Math.PI, false );
context.fillStyle = "#FFFFFF";
context.fill();

return canvas;

}

scene.add(union)

renderer.setClearColor(0x2675AD)

renderer.render(scene,camera)

controls.update();

function render(delta){


 requestAnimationFrame(render);
 renderer.render(scene,camera)

 union.rotation.y  += 0.0009


 }

 render()



 });