
var scale = 2;
var steps = 200;
var faceMaxSize = .001;
var material = new THREE.MeshBasicMaterial( {
                 vertexColors: THREE.FaceColors, side: THREE.DoubleSide } );

var scene, renderer, camera, controls;

function newScene() {

  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  var content = document.getElementById('content');
  renderer.setSize(content.clientWidth, content.clientHeight);
  renderer.setClearColor(0x000000);
  content.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(75,
                     content.clientWidth/content.clientHeight, .1, 100);
  camera.up.set(0,0,1);
  camera.position.set(.75*scale, .75*scale, scale);
  scene.add( new THREE.AxisHelper(scale) );
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  drawScene();
}

function drawScene() {

  // remove uses splice which renumbers array so iterate backwards
  for ( var i=scene.children.length-1 ; i >= 0 ; i-- ) {
    if ( scene.children[i].type == 'Mesh' ) scene.remove( scene.children[i] );
  }
  for ( var i=0 ; i < sheets ; i++ ) {
    sheet = i;
    var geometry = new THREE.ParametricGeometry( elevation, steps, steps );
    for ( var j=0 ; j < geometry.faces.length ; j++ ) {
      // ParametricGeometry passes colors by face not vertex
      var v = geometry.vertices[geometry.faces[j].a];
      geometry.faces[j].color.setHSL( phase(v.x, v.y), 1., .5);
    }
    // filter out bad faces
    geometry.faces = geometry.faces.filter( function(face) {  
      return new THREE.Triangle(geometry.vertices[face.a],
        geometry.vertices[face.b], geometry.vertices[face.c]).area() < faceMaxSize; } );
    scene.add( new THREE.Mesh( geometry, material ) );
  }
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
}
