
var cameramode, composer
var animateStatus = true, cameraStatus = true;
/////////////////////////////////
var titleplate, particleSystem;;
var particlestatic, particleMEDstatic, particleLARstatic;
var ring, iii, three, blue, iiiWire, threeWire, white, x, asteroids;
var iiis, iiim, iiil, iiisMaterial, iiimMaterial, iiilMaterial, threeMaterial;
var ring, ring2, beep;
var now, lets, get, nice, and, dirty, come, here;
/////////////////////////////////
var sect = 64, sect2 = 1000, songBPM = 124, glitch, bpm = 0, ticker
var beeptick = 1, beeptickloop = true
var radius = 400, theta = 0, count = 0, sf = 14, itemspin;
var opac = 1, rot = 0;
///////////////////////////////// x
var particleCount = 15,  particles = new THREE.Geometry();
for (var i = 0; i < particleCount; ++ i) {
    var geometry = new THREE.Geometry();
    var pMaterial = new THREE.PointsMaterial({
      map: new THREE.TextureLoader().load("x.png"),
      blending: THREE.screenBlending,
      size: 60, depthTest: true,
      transparent: true, opacity: 1
    });
}
for (var i = 0; i < particleCount; ++ i) {
    pMaterial.size = Math.floor(Math.random() * 70) + 50
}
/////////////////////////////////
var titleplategeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 );
var titleplatematerial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("VIALOFME.png"),
  transparent: true, opacity: 1
});
///////////////////////////////// camera
var cameramodegeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 );
var cameramodematerial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("Cameramode.png"),
  transparent: true, opacity: 1
});
///////////////////////////////// beep
var beepgeometry = new THREE.BoxGeometry( 1080/20, 1080/20 , 0.00000000000000000000001 );
var beepmaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("plus.png"),
  blending: THREE.addictiveBlending,
  transparent: true, opacity: 1
});
///////////////////////////////// rings
var ringgeometry = new THREE.BoxGeometry( 1080/10, 1080/10 , 0.00000000000000000000001 );
var ringmaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("RING.png"),
  blending: THREE.addictiveBlending,
  transparent: true, opacity: 1
});
var ringgeometry2 = new THREE.BoxGeometry( 1080/10, 1080/10 , 0.00000000000000000000001 );
var ringmaterial2 = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("RING.png"),
  blending: THREE.addictiveBlending,
  transparent: true, opacity: 1
});
///////////////////////////////// LYRICS /////////////////////////////////
var comegeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 ); //LYRIC 1
var comematerial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("COME.png"),
  blending: THREE.screenBlending,
  transparent: true, opacity: 1
});
var heregeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 ); //LYRIC 2
var herematerial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("HERE.png"),
  blending: THREE.screenBlending,
  transparent: true, opacity: 1
});
var nowgeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 ); //LYRIC 3
var nowmaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("NOW.png"),
  blending: THREE.screenBlending,
  transparent: true, opacity: 1
});
var letsgeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 ); //LYRIC 4
var letsmaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("LETS.png"),
  blending: THREE.screenBlending,
  transparent: true, opacity: 1
});
var getgeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 ); //LYRIC 5
var getmaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("GET.png"),
  blending: THREE.screenBlending,
  transparent: true, opacity: 1
});
var nicegeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 ); //LYRIC 6
var nicematerial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("NICE.png"),
  blending: THREE.screenBlending,
  transparent: true, opacity: 1
});
var andgeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 ); //LYRIC 7
var andmaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("AND.png"),
  blending: THREE.screenBlending,
  transparent: true, opacity: 1
});
var dirtygeometry = new THREE.BoxGeometry( 1920/10, 1080/10 , 0 ); //  LYRIC 8
var dirtymaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("DIRTY.png"),
  blending: THREE.screenBlending,
  transparent: true, opacity: 1
});
/////////////////////////////////
var dirs = [], parts = [], container = document.createElement('div');
document.body.appendChild( container );
var renderer, camera, scene
var orbitalControl = new THREE.OrbitControls(camera, renderer);
var controls = new THREE.OrbitControls( camera, renderer);
    controls.addEventListener( 'change', render );
/////////////////////////////////
var skyGeo = new THREE.SphereGeometry(1000, 25, 25),
    loader  = new THREE.TextureLoader();
var skytexture = loader.load( "skybox.jpg" );
var skybox;
var equirectShader = THREE.ShaderLib[ "equirect" ];
var skymaterial = new THREE.MeshBasicMaterial({
      map: skytexture,
      reflectivity: 1, shininess: 1,
      color: 0xF3FFE2, specular: 0xffffff,
    });
/////////////////////////////////
var fftSize = 128, mediaElement, audio, data, listener
var clock = new THREE.Clock;

// ============= SETUP =============
init();
animate();
render();
update();
function init() {

// =======================================================================
// =                          SCENE GENERATION                           =
// =======================================================================

  // ============= RENDER SETUP ============= xxxxxxxxx xxxxxxxxx
  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('ThreeJS').appendChild(renderer.domElement);
  scene = new THREE.Scene();

  // ============= CAMERA SETUP ============= xxxxxxxxx xxxxxxxxx
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 0, 400);
  camera.position.y = 0;
  camera.up = new THREE.Vector3(0,500,0);
  controls = new THREE.OrbitControls(camera);
  controls.target = new THREE.Vector3(500, 200, 500);
  controls.addEventListener('change', render);
  scene.add(camera);

  // ============= ANIMATION STATUS BIND ============= xxxxxxxxx xxxxxxxxx
  document.addEventListener('keydown',function(e) {
    var key = e.keyCode || e.which;
    if(key === 81) { animateStatus = !animateStatus; }}, false);

  // =======================================================================
  // =                            OBJECT STUFF                             =
  // =======================================================================

  particlestatic = new THREE.Object3D();
  particleMEDstatic = new THREE.Object3D();
  particleLARstatic = new THREE.Object3D();
  particlewaveline = new THREE.Object3D();
  particlering = new THREE.Object3D();
  particledodecahedron = new THREE.Object3D();
  var ringthingsize = Math.random(30)*1.7;
  var dodecahedronthingsize = Math.random(30)*1.5;

  // ============= TITLEPLATE ============= xxxxxxxxx xxxxxxxxx
	titleplate = new THREE.Mesh( titleplategeometry, titleplatematerial);
  //scene.add(titleplate);
  titleplate.scale.set(0.6, 0.29, 0.0000000000000001);
  titleplate.position.set(-5, -160, -20);

  // ============= CAMERA MODE ============= xxxxxxxxx xxxxxxxxx
  cameramode = new THREE.Mesh( cameramodegeometry, cameramodematerial);
  scene.add(cameramode);
  cameramode.scale.set(0.6/5, 0.12/5, 0.0000000000000001);
  cameramode.position.set(0, -38, 400)

  // ============= Skybox ============= xxxxxxxxx xxxxxxxxx
  skybox = new THREE.Mesh(skyGeo, skymaterial);
  skybox.material.side = THREE.BackSide;
  scene.add(skybox);
  skybox.rotation.set(0,0,130)

  // ============= III SMALL ============= xxxxxxxxx xxxxxxxxx
  iiis = new THREE.OBJLoader();
  iiisMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 0.9, shininess: 900,
    color: 0xF3FFE2, specular: 0xffffff,
    transparent: true, opacity: 0.3});
  iiis.load("IIIs.obj", function(mesh){
    mesh.traverse(function(node){
      if( node instanceof THREE.Mesh ){
        node.material = iiisMaterial;
        node.castShadow = true, node.receiveShadow = true }});

    scene.add(mesh);
    mesh.scale.set(sf - 0.1, sf - 0.1, sf - 0.1);
    mesh.position.set(-5, 0, -40);
  });

  // ============= III MEDIUM ============= xxxxxxxxx xxxxxxxxx
  iiim = new THREE.OBJLoader();
  iiimMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 0.9, shininess: 900,
    color: 0xF3FFE2, specular: 0xffffff,
    transparent: true, opacity: 0.3 });
  iiim.load("IIIM.obj", function(mesh){
    mesh.traverse(function(node){
      if( node instanceof THREE.Mesh ){
        node.material = iiimMaterial;
        node.castShadow = true, node.receiveShadow = true }});
    scene.add(mesh);
    mesh.scale.set(sf - 0.1, sf - 0.1, sf - 0.1);
    mesh.position.set(-5, 0, -40);
  });

  // ============= III LARGE ============= xxxxxxxxx xxxxxxxxx
  iiil = new THREE.OBJLoader();
  iiilMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 0.9, shininess: 900,
    color: 0xF3FFE2, specular: 0xffffff,
    transparent: true, opacity: 0.3 });
  iiil.load("IIIL.obj", function(mesh){
    mesh.traverse(function(node){
      if( node instanceof THREE.Mesh ){
        node.material = iiilMaterial;
        node.castShadow = true, node.receiveShadow = true }});

    scene.add(mesh);
    mesh.scale.set(sf - 0.1, sf - 0.1, sf - 0.1);
    mesh.position.set(-5, 0, -40);
  });

  // ============= III Wire ============= xxxxxxxxx xxxxxxxxx
  iiiWire = new THREE.OBJLoader();
  var iiiWireMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 0.9, shininess: 900,
    color: 0xF3FFE2, specular: 0xffffff,
    wireframe: true });
	iiiWire.load("IIIWire.obj", function(mesh){
		mesh.traverse(function(node){
			if( node instanceof THREE.Mesh ){
        node.material = iiiWireMaterial;
				node.castShadow = true, node.receiveShadow = true }});

		scene.add(mesh);
    mesh.scale.set(sf, sf , sf );
		mesh.position.set(-5, 0, -40);
	});

  // ============= Three ============= xxxxxxxxx xxxxxxxxx
  three = new THREE.OBJLoader();
  threeMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 3.9, shininess: 900, specular: 0xffffff,
    transparent: true, opacity: 0.3 });
	three.load("3.obj", function(mesh){
		mesh.traverse(function(node){
			if( node instanceof THREE.Mesh ){
        node.material = threeMaterial;
				node.castShadow = true, node.receiveShadow = true}});

		scene.add(mesh);
    mesh.scale.set(sf - 0.1, sf - 0.1, sf - 0.1);
		mesh.position.set(-5, 0, -40);
	});

  // ============= Three Wire ============= xxxxxxxxx xxxxxxxxx

  threeWire = new THREE.OBJLoader();
  var threeWireMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 3.9, shininess: 900,
    specular: 0xffffff, wireframe: true });
  threeWire.load("3.obj", function(mesh){
    mesh.traverse(function(node){
      if( node instanceof THREE.Mesh ){
        node.material = threeWireMaterial;
        node.castShadow = true, node.receiveShadow = true }});

    scene.add(mesh);
    mesh.scale.set(sf, sf, sf);
    mesh.position.set(-5, 0, -40);
  });

  // ======== blue shards ======== xxxxxxxxx xxxxxxxxx
  blue = new THREE.OBJLoader();
  var BlueMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 300, shininess: 300,
    color: '#f670ef', transparent: true });
	blue.load("blueshards.obj", function(mesh){
		mesh.traverse(function(node){
			if( node instanceof THREE.Mesh ){
        node.material = BlueMaterial, node.material.opacity = 0.8;
				node.castShadow = true, node.receiveShadow = true }});

		scene.add(mesh);
    mesh.scale.set(sf, sf, sf);
		mesh.position.set(-5, 0, -40);
	});

  // ======= white shards  ======= xxxxxxxxx xxxxxxxxx
  white = new THREE.OBJLoader();
  var WhiteMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 1, shininess: 1, color: '#e6e3ea' });
	white.load("whiteshards.obj", function(mesh){
		mesh.traverse(function(node){
			if( node instanceof THREE.Mesh ){
				node.castShadow = true, node.receiveShadow = true }});

		scene.add(mesh);
    mesh.scale.set(sf, sf, sf);
		mesh.position.set(-5, 0, -40);
	});

  // =======================================================================
  // =                             SCENE STUFF                             =
  // =======================================================================

  // ======= shards generation ======= xxxxxxxxx xxxxxxxxx
  scene.add(particlestatic);
  var geometry = new THREE.TetrahedronGeometry(2, 0);
  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff, shading: THREE.flatShading
  });

  for (var i = 0; i < 1225; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2+100, Math.random() * 2);
    mesh.scale.set(Math.random(30), Math.random(30) / 2, Math.random(30) / 2 );
    particlestatic.add(mesh);
  }

  // ======= shards MEDIUM generation ======= xxxxxxxxx xxxxxxxxx
  scene.add(particleMEDstatic);
  var medgeometry = new THREE.TetrahedronGeometry(2, 0);
  var medmaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff, shading: THREE.flatShading
  });

  for (var i = 0; i < 75; i++) {
    var mesh = new THREE.Mesh(medgeometry, medmaterial);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2+100, Math.random() * 2);
    mesh.scale.set(Math.random(30)*3, Math.random(30), Math.random(30));
    particleMEDstatic.add(mesh);
  }

  // ======= shards LARGE generation ======= xxxxxxxxx xxxxxxxxx
  scene.add(particleLARstatic);
  var largeometry = new THREE.TetrahedronGeometry(2, 0);
  var larmaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff, shading: THREE.flatShading
  });
  for (var i = 0; i < 25; i++) {
    var mesh = new THREE.Mesh(largeometry, larmaterial);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2+100, Math.random() * 2);
    mesh.scale.set(Math.random(30)*3, Math.random(30) * 2, Math.random(30) * 2 );
    particleLARstatic.add(mesh);
  }

  // ======= wave generation  ======= xxxxxxxxx xxxxxxxxx
  scene.add(particlewaveline);
  var waveythinggeometry = new THREE.BoxGeometry(120, 120, 0);
  var waveythingmaterial = new THREE.MeshBasicMaterial({
    size: 40,  blending: THREE.addictiveBlending, transparent: true, opacity: 1,
    map: new THREE.TextureLoader().load("zigzag.png")
  });
  for (var i = 0; i < 6 ; i++) {
    var mesh = new THREE.Mesh(waveythinggeometry, waveythingmaterial);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 56, Math.random() * 2+100, Math.random() * 2);
    mesh.scale.set(1, 1, 0.0001 );
    particlewaveline.add(mesh);
  }

  // ======= Cube generation  ======= xxxxxxxxx xxxxxxxxx
  scene.add(particlering);
  var ringthinggeometry = new THREE.BoxGeometry(12, 12, 12);
  var ringthingmaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff, shading: THREE.flatShading, castShadow: true, receiveShadow: true,
  });
  for (var i = 0; i < 4 ; i++) {
    var mesh = new THREE.Mesh(ringthinggeometry, ringthingmaterial);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 56, Math.random() * 2+100, Math.random() * 2);
    mesh.scale.set(ringthingsize, ringthingsize, ringthingsize);
    particlering.add(mesh);
  }

  // ======= Dodecahedron generation  ======= xxxxxxxxx xxxxxxxxx
  scene.add(particledodecahedron);
  var dodecahedronthinggeometry = new THREE.DodecahedronGeometry(12, 0);
  var dodecahedronthingmaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.flatShading,
    castShadow: true,
    receiveShadow: true,
  });
  for (var i = 0; i < 4 ; i++) {
    var mesh = new THREE.Mesh(dodecahedronthinggeometry, dodecahedronthingmaterial);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 56, Math.random() * 2+100, Math.random() * 2);
    mesh.scale.set(dodecahedronthingsize, dodecahedronthingsize, dodecahedronthingsize);
    particledodecahedron.add(mesh);
  }

  // ============= x ============= xxxxxxxxx xxxxxxxxx
  for (var p = 0; p < particleCount; p++) {
    pX = Math.floor(Math.random()*2) == 1 ? 1 : -1,
    pY = Math.floor(Math.random()*2) == 1 ? 1 : -1,
    pZ = Math.floor(Math.random()*2) == 1 ? 1 : -1,
    particle = new THREE.Vector3(pX, pY, pZ);
    particle.velocity = new THREE.Vector3(0, 0, 0);
    particles.vertices.push(particle);
    console.log(particles);
    console.log(particle);
  }
  particleSystem = new THREE.Points(particles, pMaterial);
  particleSystem.rotation.set(-1.6,0,0)
  particleSystem.position.set(-7,-10,-100)
  scene.add(particleSystem);

// =========================== LIGHT STUFF ===========================
  var ambientLight = new THREE.AmbientLight( 0x999999 );
  scene.add(ambientLight);
  //Lighting
  var lights = [];
  lights[0] = new THREE.DirectionalLight( 0xe1e0f0, 0.5, 00  );
  lights[0].position.set( 1, -0.7, 0 );
  lights[1] = new THREE.DirectionalLight( 0x11E8BB, 0.5, 100  );
  lights[1].position.set( 0.5, 1, 0.5 );
  lights[2] = new THREE.DirectionalLight( 0x8200C9, 0.5, 100 );
  lights[2].position.set( -0.75, -1, 0.5 );;
  lights[0].castshadow = true, lights[1].castshadow = true, lights[2].castshadow = true;
  scene.add( lights[0] ), scene.add( lights[1] ), scene.add( lights[2] );

  // ============= Post Processing ============= xxxxxxxxx xxxxxxxxx
  composer = new THREE.EffectComposer( renderer );
  composer.addPass( new THREE.RenderPass( scene, camera ) );
  var renderPass = new THREE.RenderPass( scene, camera );
  composer.addPass(renderPass);

  //RGB Split
  glitch = new THREE.ShaderPass( THREE.RGBShiftShader );
  glitch.uniforms[ 'amount' ].value = 0.0025;
  glitch.renderToScreen = true;

  //NOISE Generation
  var glitch1 = new THREE.ShaderPass( THREE.DigitalGlitch );
  glitch1.uniforms[ 'amount' ].value = 0.0009;
  glitch1.uniforms[ 'col_s' ].value = 0.00001;
  glitch1.uniforms[ 'distortion_x' ].value = 0.00001;
  glitch1.uniforms[ 'distortion_y' ].value = 0.00001;
  glitch1.uniforms[ 'seed_x' ].value = 0.000000001;
  glitch1.uniforms[ 'seed_y' ].value = 0.000000001;
  glitch1.renderToScreen = true;
  composer.addPass( glitch );

  // ============= Control Adjustment ============= xxxxxxxxx xxxxxxxxx
  controls.addEventListener( 'change', render );
  controls.enableDamping = true, controls.dampingFactor = 0.75;
	controls.screenSpacePanning = true;
	controls.minDistance = 500, controls.maxDistance = 900;
	controls.maxPolarAngle = Math.PI;
  controls.addEventListener( 'change', render );

  // ============= Audio Input ============= xxxxxxxxx xxxxxxxxx
  listener = new THREE.AudioListener();
  audio = new THREE.Audio( listener );
	mediaElement = new Audio( 'VIALOFME.mp3' );

  audio.setVolume(.15)
	mediaElement.loop = false;
	mediaElement.play();
	audio.setMediaElementSource( mediaElement );
	analyser = new THREE.AudioAnalyser( audio, fftSize );
  data = analyser.getAverageFrequency();

	uniforms = {
		tAudioData: { value: new THREE.DataTexture( analyser.data, fftSize / 2, 1, THREE.LuminanceFormat ) }
	};

};

// =======================================================================
// =                           WINDOW SCALING                            =
// =======================================================================

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize( window.innerWidth, window.innerHeight );
  }

  // =======================================================================
  // =                            CAMERA BINDING                           =
  // =======================================================================

function animate()
{
  requestAnimationFrame( animate );

  // ============= background particles ============= xxxxxxxxx xxxxxxxxx
  particlestatic.rotation.x += 0.001, particlestatic.rotation.y -= 0.001;
  particleMEDstatic.rotation.x += 0.001, particleMEDstatic.rotation.y -= 0.001;
  particleLARstatic.rotation.x += 0.001, particleLARstatic.rotation.y -= 0.001;
  particlewaveline.rotation.x += 0.0002, particlewaveline.rotation.y -= 0.0002;
  particlering.rotation.x += 0.0004, particlering.rotation.y -= 0.0004;
  particledodecahedron.rotation.x -= 0.0006, particledodecahedron.rotation.y -= 0.0006;

  if (animateStatus === true) { theta += 0.085;
    camera.position.x = (radius * Math.sin( THREE.Math.degToRad(theta))   );
    camera.position.y = (radius / 2 * Math.sin( THREE.Math.degToRad(theta))   );
    camera.position.z = (radius * Math.cos( THREE.Math.degToRad(theta))   );
    cameramode.position.set(0, -1000000000, 0), cameraStatus = false };

  // ============= Camera Overlay Settings ============= xxxxxxxxx xxxxxxxxx
  camera.lookAt( scene.position ), camera.updateMatrixWorld();

  // ============= Render Settings ============= xxxxxxxxx xxxxxxxxx
  controls.update(), composer.render();
  update(), render();
};

function update() {

  if(clock.elapsedTime < 377){
     ticker = clock.elapsedTime * (songBPM / 60);
     bpm = Math.round(ticker);// console.log(bpm);
  }
  clock.getDelta();

  // =======================================================================
  // =                          BUILD ANIMATION                            =
  // =======================================================================

  //CAMERA TOGGLE =============
  if(bpm == (31)){ animateStatus = false,
    camera.position.set(0, 0, 400), camera.up = new THREE.Vector3(0,500,0)};

  // ============= LYRIC 1 =============
  if(bpm > (30) && bpm < (30 + 4)){
    if(bpm == 31){ come = new THREE.Mesh( comegeometry, comematerial), scene.add(come) };
    if( bpm < 33){ come.scale.set(0.12*1, 0.06*1, 0.0000000000000001) };
    if(bpm >= (32+1) && bpm < (33)){ come.scale.set(0.12*2, 0.06*2, 0.0000000000000001) };
    if( bpm == 33){ come.scale.set(0.12*3, 0.06*3, 0.0000000000000001) };
    come.position.set(camera.position.x, camera.position.y * 0.9, camera.position.z * 0.90);
    if(bpm >= (32 + 1) && bpm <= (32 + 10)){ come.material.opacity -= 0.05 };
    if(bpm == (30 + 4)){ scene.remove(come), come.material.opacity = 0 }};

  // ============= LYRIC 2 =============
  if(bpm > 31 && bpm < 34){
    if(bpm == 32){here = new THREE.Mesh( heregeometry, herematerial), scene.add(here) };
    if( bpm < 33){ here.scale.set(0.12*1, 0.06*1, 0.0000000000000001) };
    if(bpm >= (32) && bpm < (33)){ here.scale.set(0.12*2, 0.06*2, 0.0000000000000001) };
    if( bpm == 33){ here.scale.set(0.12*3, 0.06*3, 0.0000000000000001) };
    here.position.set(camera.position.x, camera.position.y * 0.9, camera.position.z * 0.90);
    if(bpm >= (32 + 1) && bpm <= (32 + 10)){ here.material.opacity -= 0.05 };
    if(bpm == (32 + 4)){scene.remove(here), here.material.opacity = 0 }};

  // ============= BEEP SET 1 ============= {16 - 32}
  if(bpm > 32 && bpm < 60){
    beep = new THREE.Mesh( beepgeometry, beepmaterial);
    if(bpm >= 32 && bpm < 34){ scene.add(beep), beepmaterial.opacity = 0,
      beep.position.set(100, 100, -35), beep.scale.set(0.8,0.8,0.00000000000000000000001) };
    if(clock.elapsedTime * (songBPM / 60) >= (32 + (4 * beeptick)-1) &&
       clock.elapsedTime * (songBPM / 60) <= (32 + (4 * beeptick))){
      if(beeptick != 4 ){ beepmaterial.opacity = 1 };
      if(beeptickloop = true){ beeptick += 1, beeptickloop == false };
      if(bpm == (32 + (4 * beeptick)+1)){ beeptickloop == true }}};
  if(beepmaterial.opacity > 0){ beepmaterial.opacity -= 0.005 };

  if(bpm > 60 && bpm < 128){
    if(clock.elapsedTime * (songBPM / 60) >= (32 + (4 * beeptick)-1) &&
       clock.elapsedTime * (songBPM / 60) <= (32 + (4 * beeptick)) ) {
      if(beeptickloop = true){ beeptick += 1, beeptickloop == false };
      if(bpm == (32 + (4 * beeptick)+1)){ beeptickloop == true }}};

  // ============= RING BURST 1 ============= {32 - 48}
  if(bpm >= 33 && bpm <= (33+6)){
    if(bpm == 33){ ring = new THREE.Mesh( ringgeometry, ringmaterial), scene.add(ring) };
    if(bpm >= 33 && bpm < 33+9){ ringgeometry.scale(1.01,1.01,1), ringmaterial.opacity -=0.008 }
    ring.position.set(0, 0, -70)};
  if(bpm == (33+4)){ringgeometry.scale(-10000,-10000,1)};

  // ============= RING BURST 2 ============= {48 - 6}
  if(bpm >= 49 && bpm <= (49+6)){
    if(bpm == 49){ ring2 = new THREE.Mesh( ringgeometry2, ringmaterial2), scene.add(ring2) };
    if(bpm >= 49 && bpm < (49+9)){ ringgeometry2.scale(1.01,1.01,1), ringmaterial2.opacity -=0.008 }
    ring2.position.set(0, 0, -71)};
  if(bpm == (49+4)){ringgeometry2.scale(-10000,-10000,1)};

  // ============= CAMERA RESTORE =============
  if(bpm >= (32 + 2) && bpm <= (32 + 3)){ animateStatus = true };
  // GLITCH TRANSITION =============
  if(bpm >= (32 + 1) && bpm < (32 + 2)){ glitch.uniforms[ 'amount' ].value = 0.05 };
  if(bpm >= (32 + 2) && bpm < (32 + 3)){ glitch.uniforms[ 'amount' ].value = 0.2 };
  // GLITCH RESET TOGGLE =============
  if(bpm >= (32 + 4) && bpm < (32 + 4)){ glitch.uniforms[ 'amount' ].value = 1 };
  if(bpm == (32 + 4) && bpm <= (32 + 5)){ glitch.uniforms[ 'amount' ].value = 0.0025 };

  // ============= BEEP SET 2 ============= {16 - 32}
  if(bpm > 128 && bpm < 184){
    beep = new THREE.Mesh( beepgeometry, beepmaterial);
    if(clock.elapsedTime * (songBPM / 60) >= (32  + (4 * beeptick)-1) && clock.elapsedTime * (songBPM / 60) <= (32  + (4 * beeptick))){
      if(beeptick != 28){ if(beeptick != 32){ if(beeptick != 36){ beepmaterial.opacity = 1 }}};
      if(beeptickloop = true){ beeptick += 1, beeptickloop == false };
      if(bpm == (32  + (4 * beeptick)+1)){ beeptickloop == true }}};
  if(beepmaterial.opacity > 0){ beepmaterial.opacity -= 0.005 };
  //console.log(beeptick);

  // =======================================================================
  // =                        BASS ANIMATION LOOP 1                        =
  // =======================================================================

  //  1,7,6,5,4,1,3,6,5,4,
  // 1 = iiisMaterial.opacity = 0.7 // 2 = iiisMaterial.opacity = 1
  // 3 = iiimMaterial.opacity = 0.7 // 4 = iiimMaterial.opacity = 1
  // 5 = iiilMaterial.opacity = 0.7 // 6 = iiilMaterial.opacity = 1
  // 7 = threeMaterial.opacity = 0.7 // 8 = threeMaterial.opacity = 1

  if(bpm < 188){
        if(sect == 128){ //128 2 ======================================================== dee
          if(bpm+1 >= (sect + (4*0) + 1) && bpm < (sect + (4*0 +2))){ iiimMaterial.opacity = 0.7 }; //3
        } // ============================================================================
    if(bpm >= (sect + (4*0) + 1) && bpm <= (sect + (4*0 +3))){ iiisMaterial.opacity = 0.7 }; //1 //0
    if(bpm >= (sect + (4*1) + 1) && bpm <= (sect + (4*1 +3))){ threeMaterial.opacity = 0.7 }; //7

        if(sect == 128){ //128 2 ======================================================== dee
          if(bpm >= (sect + (4*2)) && bpm < (sect + (4*2 +1))){ iiisMaterial.opacity = 1 }; //2
          if(bpm+1 >= (sect + (4*2) + 1) && bpm < (sect + (4*2 +2))){ threeMaterial.opacity = 1 }; //8
        } // ============================================================================
    if(bpm >= (sect + (4*2) + 1) && bpm <= (sect + (4*2 +3))){ iiilMaterial.opacity = 1 }; //6
    if(sect == 64){ // first loop
      if(bpm >= (sect + (4*3) + 1) && bpm <= (sect + (4*3 +3))){ iiilMaterial.opacity = 0.7 }};//5 //4th
    if(sect == 128){ //second loop
      if(bpm >= (sect + (4*3) + 1) && bpm <= (sect + (4*3 +2))){ iiilMaterial.opacity = 0.7 }; //5
      if(bpm >= (sect + (4*3) + 3) && bpm <= (sect + (4*3 +4))){ iiimMaterial.opacity = 0.7 }}; //3

        if(sect == 128){ //128 2 ========================================================  dee
          if(bpm >= (sect + (4*4)) && bpm < (sect + (4*4 +1))){ threeMaterial.opacity = 1 }; //8
          if(bpm+1 >= (sect + (4*4) + 1) && bpm < (sect + (4*4 +2))){ iiilMaterial.opacity = 1 }; //6
        } //=============================================================================
    if(bpm >= (sect + (4*4) + 1) && bpm <= (sect + (4*4 +3))){ iiimMaterial.opacity = 1 }; //4
    if(bpm >= (sect + (4*5) + 1) && bpm <= (sect + (4*5 +3))){ iiisMaterial.opacity = 0.7 }; //1

        if(sect == 128){ //128 2 ======================================================== dee
          if(bpm >= (sect + (4*6)) && bpm < (sect + (4*6 +1))){ threeMaterial.opacity = 0.7 }; //7
          if(bpm+1 >= (sect + (4*6) + 1) && bpm < (sect + (4*6 +2))){ iiilMaterial.opacity = 0.7 }; //5
        } //=============================================================================
    if(bpm >= (sect + (4*6) + 1) && bpm <= (sect + (4*6 +3))){ iiimMaterial.opacity = 0.7 }; //3
    if(sect == 64){ //first loop
      if(bpm >= (sect + (4*7) + 1) && bpm <= (sect + (4*7 +3))){ threeMaterial.opacity = 1 }};  //7 //8th
    if(sect == 128){ //second loop
      if(bpm >= (sect + (4*7) + 1) && bpm <= (sect + (4*7 +2))){ threeMaterial.opacity = 0.7 }; //7 //8th
      if(bpm >= (sect + (4*7) + 3) && bpm <= (sect + (4*7 +4))){ iiilMaterial.opacity = 1 }}; //6

    //BREAK
        if(sect == 128){ //128 2 ======================================================== dee
          if(bpm+1 >= (sect + (4*8) + 1) && bpm < (sect + (4*8 +2))){ iiimMaterial.opacity = 1 }; //4
        } // ============================================================================
    if(bpm >= (sect + (4*8) + 1) && bpm <= (sect + (4*8 +3))){ iiisMaterial.opacity = 1 }; //2
    if(bpm >= (sect + (4*9) + 1) && bpm <= (sect + (4*9 +3))){ threeMaterial.opacity = 1 }; //8

        //128 2 ========================================================================= dee
          if(bpm >= (sect + (4*10)) && bpm < (sect + (4*10 +1))){ iiimMaterial.opacity = 0.7 }; //3
          if(bpm+1 >= (sect + (4*10) + 1) && bpm < (sect + (4*10 +2))){ iiisMaterial.opacity = 0.7 }; //1
        // ============================================================================== dee
    if(bpm >= (sect + (4*10) + 1) && bpm <= (sect + (4*10 +3))){ threeMaterial.opacity = 0.7 }; //7
    if(sect == 64){ //first loop
      if(bpm >= (sect + (4*11) + 1) && bpm <= (sect + (4*11 +3))){ iiilMaterial.opacity = 1 }}; //6 // 12th
    if(sect == 128){ //second loop
      if(bpm >= (sect + (4*11) + 1) && bpm <= (sect + (4*11 +2))){ iiilMaterial.opacity = 1 }; //6
      if(bpm >= (sect + (4*11) + 3) && bpm <= (sect + (4*11 +4))){ iiimMaterial.opacity = 1 }}; //4

        //128 2 ========================================================================= dee
          if(bpm >= (sect + (4*12)) && bpm < (sect + (4*12 +1))){ iiisMaterial.opacity = 0.7  }; //1
          if(bpm+1 >= (sect + (4*12) + 1) && bpm < (sect + (4*12 +2))){ threeMaterial.opacity = 0.7 }; //7
        // ============================================================================== dee
    if(bpm >= (sect + (4*12) + 1) && bpm <= (sect + (4*12 +3))){ iiilMaterial.opacity = 0.7 }; //5
    if(bpm >= (sect + (4*13) + 1) && bpm <= (sect + (4*13 +3))){ iiisMaterial.opacity = 1 }; //2

        //128 2 ========================================================================= dee
          if(bpm >= (sect + (4*14)) && bpm <= (sect + (4*14 +1))){ threeMaterial.opacity = 1  }; //8
          if(bpm+1 >= (sect + (4*14) + 1) && bpm <= (sect + (4*14 +2))){ iiilMaterial.opacity = 1 }; //6
        // ============================================================================== dee
    if(bpm >= (sect + (4*14) + 1) && bpm <= (sect + (4*14 +3))){ iiimMaterial.opacity = 1 }; //4
    if(sect == 64){ //first loop
      if(bpm >= (sect + (4*15) + 1) && bpm <= (sect + (4*15 +2))){ threeMaterial.opacity = 1 }};//8 //16th
      if(bpm >= (sect + (4*15) + 3) && bpm <= (sect + (4*15 +4))){ iiilMaterial.opacity = 1 }; //6
     if(sect == 128){ //second loop
       if(bpm >= (sect + (4*15) + 1) && bpm <= (sect + (4*15 +2))){ threeMaterial.opacity = 0.7 }; //8 //16th
       if(bpm >= (sect + (4*15) + 3) && bpm <= (sect + (4*15 +4))){ iiilMaterial.opacity = 1 }}; //7
  }
  //console.log(sect);

  // BASS ANIMATION LOOP CALC
  if(bpm == (16*8)){ sect = (16*8) };
  if(bpm == (16*12)){ sect = (16*12) }; // UNTIL DROP DISTORTION PART

  // =======================================================================
  // =                      BASS ANIMATION LYRIC END                       =
  // =======================================================================

  //camera set
  if(bpm == (188)){ animateStatus = false,
    camera.position.set(0, 0, 400), camera.up = new THREE.Vector3(0,500,0)};

  // ============= LYRIC 3 =============
  if((clock.elapsedTime * (songBPM / 60)) - 0.3 >= (188) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 10)){
    now = new THREE.Mesh( nowgeometry, nowmaterial);
    if((clock.elapsedTime * (songBPM / 60)) - 0 >= (188) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 1)){ scene.add(now) };
    now.scale.set(0.12*2, 0.06*2, 0.0000000000000001);
    now.position.set(camera.position.x, camera.position.y * 0.9, camera.position.z * 0.90);
    if(bpm >= (188 + 1) && bpm <= (188 + 10)){ now.material.opacity -= 0.02};
    if(bpm == (188 + 10)){ scene.remove(now) }};
  // GLITCH TRANSITION =============
  if(bpm >= 188 && bpm <= (188 + 1)){ glitch.uniforms[ 'amount' ].value = 0.01 };

  // ============= LYRIC 4 =============
  if((clock.elapsedTime * (songBPM / 60)) >= (188 + 1.7) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 10)){
    lets = new THREE.Mesh( letsgeometry, letsmaterial);
    if((clock.elapsedTime * (songBPM / 60)) >= (188 + 1.7) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 1.8)){ scene.add(lets) };
    lets.scale.set(0.12*1, 0.06*1, 0.0000000000000001);
    lets.position.set(camera.position.x, camera.position.y * 0.9, camera.position.z * 0.90);
    if(bpm >= (188 + 2) && bpm <= (188 + 10)){lets.material.opacity -= 0.02};
    if(bpm == (188 + 10)){ scene.remove(lets) }};
  // GLITCH TRANSITION =============
  if(bpm >= (32 + 2) && bpm < (32 + 3)){ glitch.uniforms[ 'amount' ].value = 0.0025 };

  // ============= LYRIC 5 =============
  if((clock.elapsedTime * (songBPM / 60)) >= (188 + 2) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 10)){
    get = new THREE.Mesh( getgeometry, getmaterial);
    scene.add(get)
    if((clock.elapsedTime * (songBPM / 60)) >= (188 + 2) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 2.2)){ scene.add(get) };
    get.scale.set(0.12*1, 0.06*1, 0.0000000000000001);
    get.position.set(camera.position.x, camera.position.y * 0.9, camera.position.z * 0.90);
    if(bpm >= (188 + 2) && bpm <= (188 + 10)){get.material.opacity -= 0.03};
    if(bpm == (188 + 10)){ scene.remove(get) }};
  // GLITCH TRANSITION =============
  if(bpm >= (188 + 2) && bpm < (188 + 3)){ glitch.uniforms[ 'amount' ].value = 0.001 };

  // ============= LYRIC 6 =============
  if((clock.elapsedTime * (songBPM / 60)) >= (188 + 2.7) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 10)){
    nice = new THREE.Mesh( nicegeometry, nicematerial);
    if((clock.elapsedTime * (songBPM / 60)) >= (188 + 2.7) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 2.8)){ scene.add(nice) };
    nice.scale.set(0.12*3, 0.06*3, 0.0000000000000001);
    nice.position.set(camera.position.x, camera.position.y * 0.9, camera.position.z * 0.90);
    if(bpm >= (188 + 3) && bpm <= (188 + 10)){ nice.material.opacity -= 0.01 };
    if( bpm == 190){ here.scale.set(0.12*5, 0.06*5, 0.0000000000000001) };
    if(bpm == (188 + 10)){ scene.remove(nice) }};

  // ============= LYRIC 7 =============
  if((clock.elapsedTime * (songBPM / 60)) >= (188 + 3.3) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 10)){
    and = new THREE.Mesh( andgeometry, andmaterial);
    if((clock.elapsedTime * (songBPM / 60)) >= (188 + 3.3) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 3.4)){ scene.add(and) };
    and.scale.set(0.12*1, 0.06*1, 0.0000000000000001);
    and.position.set(camera.position.x, camera.position.y * 0.9, camera.position.z * 0.90);
    if(bpm >= (188 + 3) && bpm <= (188 + 10)){and.material.opacity -= 0.02};
    if( bpm == 190){ here.scale.set(0.12*5, 0.06*5, 0.0000000000000001) };
    if(bpm >= (188 + 10)){ scene.remove(and) }};

  // ============= LYRIC 8 =============
  if((clock.elapsedTime * (songBPM / 60)) >= (188 + 3.8) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 10)){
    dirty = new THREE.Mesh( dirtygeometry, dirtymaterial);
    if((clock.elapsedTime * (songBPM / 60)) >= (188 + 3.8) && (clock.elapsedTime * (songBPM / 60)) <= (188 + 3.9)){ scene.add(dirty) };
    dirty.scale.set(0.12*1, 0.06*1, 0.0000000000000001);
    if((clock.elapsedTime * (songBPM / 60) >= (188+3.5) && bpm <= (188 + 10))){ dirty.scale.set(0.12*3, 0.06*3, 0.0000000000000001) };
    dirty.position.set(camera.position.x, camera.position.y * 0.9, camera.position.z * 0.90);
    if(bpm >= (188 + 4) && bpm <= (188 + 10)){dirty.material.opacity -= 0.005};
    if( bpm == 190){ here.scale.set(0.12*5, 0.06*5, 0.0000000000000001) };
    if(bpm >= (188 + 10)){ scene.remove(dirty) }};

  // GLITCH TRANSITION =============
  if(bpm >= (188 + 3) && bpm < (32 + 4)){ glitch.uniforms[ 'amount' ].value = 0.1 };
  if(bpm > (188 + 3) && bpm < (188 + 5)){ glitch.uniforms[ 'amount' ].value = 0.005 };
  if(bpm >= (188 + 5) && bpm < (32 + 7)){ glitch.uniforms[ 'amount' ].value = 0.5 };

  // ============= CAMERA RESTORE =============
  if(bpm >= (188 + 6) && bpm <= (188 + 7)){ animateStatus = true, theta - 20;
    now.material.opacity = 0, lets.material.opacity = 0, get.material.opacity = 0;
    nice.material.opacity = 0, and.material.opacity = 0, dirty.material.opacity = 0;
  };
  // GLITCH RESET TOGGLE =============
  if(bpm > (188 + 7) && bpm <= (188 + 8)){ glitch.uniforms[ 'amount' ].value = 0.0025 };

  // =======================================================================
  // =                     BASS ANIMATION LOOP {DROP}                      =
  // =======================================================================

  if(bpm == (16*16)){ sect2 = (16*16) };
  if(bpm == (16*20)){ sect2 = (16*20) };

  if(bpm >= 192 && bpm <= 256){
    if(bpm >= (sect2 + (4*0) + 1) && bpm <= (sect2 + (4*0 +2))){ iiisMaterial.opacity = 0.7 }; //1
    if(bpm >= (sect2 + (4*1) + 1) && bpm <= (sect2 + (4*1 +2))){ threeMaterial.opacity = 0.7 }; //7
    if(bpm >= (sect2 + (4*2) + 1) && bpm <= (sect2 + (4*2 +2))){ iiilMaterial.opacity = 1 }; //6
    if(bpm >= (sect2 + (4*3) + 1) && bpm <= (sect2 + (4*3 +2))){ iiilMaterial.opacity = 0.7 };//5
    if(bpm >= (sect2 + (4*4) + 1) && bpm <= (sect2 + (4*4 +2))){ iiimMaterial.opacity = 1 }; //4
    if(bpm >= (sect2 + (4*5) + 1) && bpm <= (sect2 + (4*5 +2))){ iiisMaterial.opacity = 0.7 }; //1
    if(bpm >= (sect2 + (4*6) + 1) && bpm <= (sect2 + (4*6 +2))){ iiimMaterial.opacity = 0.7 }; //3
    if(bpm >= (sect2 + (4*7) + 1) && bpm <= (sect2 + (4*7 +2))){ iiilMaterial.opacity = 1 }; //6
    //
    if(bpm >= (sect2 + (4*8) + 1) && bpm <= (sect2 + (4*8 +2))){ iiisMaterial.opacity = 1 }; //2
    if(bpm >= (sect2 + (4*9) + 1) && bpm <= (sect2 + (4*9 +2))){ threeMaterial.opacity = 1 }; //8
    if(bpm >= (sect2 + (4*10) + 1) && bpm <= (sect2 + (4*10 +2))){ threeMaterial.opacity = 0.7 }; //7
    if(bpm >= (sect2 + (4*11) + 1) && bpm <= (sect2 + (4*11 +2))){ iiilMaterial.opacity = 1 }; //6
    if(bpm >= (sect2 + (4*12) + 1) && bpm <= (sect2 + (4*12 +2))){ iiilMaterial.opacity = 0.7 }; //5
    if(bpm >= (sect2 + (4*13) + 1) && bpm <= (sect2 + (4*13 +2))){ iiisMaterial.opacity = 1 }; //2
    if(bpm >= (sect2 + (4*14) + 1) && bpm <= (sect2 + (4*14 +2))){ iiimMaterial.opacity = 1 }; //4
    if(bpm >= (sect2 + (4*15) + 1) && bpm <= (sect2 + (4*15 +3))){ threeMaterial.opacity = 1 }; //8
  }

  // BASS ANIMATION RESET CALC =============
  if(bpm < 192){
    if(iiilMaterial.opacity >= 0.32){ iiilMaterial.opacity -= 0.02 };
    if(iiimMaterial.opacity >= 0.32){ iiimMaterial.opacity -= 0.02 };
    if(iiisMaterial.opacity >= 0.32){ iiisMaterial.opacity -= 0.02 };
    if(threeMaterial.opacity >= 0.32){ threeMaterial.opacity -= 0.02 }};
  if(bpm >= 192 && bpm < 256){
    if(iiilMaterial.opacity >= 0.32){ iiilMaterial.opacity -= 0.12 };
    if(iiimMaterial.opacity >= 0.32){ iiimMaterial.opacity -= 0.12 };
    if(iiisMaterial.opacity >= 0.32){ iiisMaterial.opacity -= 0.12 };
    if(threeMaterial.opacity >= 0.32){ threeMaterial.opacity -= 0.12 }};

  // =======================================================================
  // =                       PARTICLE BOUND DETECTOR                       =
  // =======================================================================

  //idle rotation + classif
  particleSystem.rotation.y += 0.0005;
  pCount = particleCount;

// =========================== Particle updater ===========================
  while (pCount--) {
    // ============= DISTANCE CHECK (EVEN) =============
    particle = particles.vertices[pCount];
    //AVG
    if (pCount%2 == 0){ //NEGATIVE Reset
      if (particle.x < -150) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0};
      if (particle.z < -150) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
      if (particle.y < -150) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };

      if (particle.x > 150) { //POSSITIVE reset
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
      if (particle.z > 150) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
      if (particle.y > 150) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
    } else {

    // ============= DISTANCE CHECK (ODD) =============
      if (particle.x < -200) { //NEGATIVE Reset
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
      if (particle.z < -200) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
      if (particle.y < -200) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };

      if (particle.x > 200) {//POSSITIVE reset
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
      if (particle.z > 200) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
      if (particle.y > 200) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0 };
    }
    // ============= DISTANCE CHECK (1/4) =============
    if (pCount%5 == 0){
      if (particle.x < -100) {//NEGATIVE Reset
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0};
      if (particle.z < -100) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
      particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0};
      if (particle.y < -100) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0};

      if (particle.x > 100) { //POSSITIVE reset
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0};
      if (particle.z > 100) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0};
      if (particle.y > 100) {
        particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
        particle.velocity.x = 0, particle.velocity.y = 0, particle.velocity.z = 0}};

    // ============= X VERTICIES ============= xxxxxxxxx xxxxxxxxx
    if (pCount%2 == 0){
      if (particle.x < 0){
        particle.velocity.x -= (Math.floor(Math.random()*2))*0.002;
        particle.velocity.y -= (Math.floor(Math.random()*2))*0.0001;
        particle.velocity.z -= (Math.sin(Math.random()*2))*0.001 };
      if (particle.x > 0){
        particle.velocity.x += (Math.floor(Math.random()*2))*0.002;
        particle.velocity.y += (Math.floor(Math.random()*2))*0.00001;
        particle.velocity.z -= (Math.random(Math.random()*2))*0.005 };

    // ============= Z VERTICIES ============= xxxxxxxxx xxxxxxxxx
    } else {
      if (particle.x < 0){
        particle.velocity.z += (Math.floor(Math.random()*2))*0.002;
        particle.velocity.y += (Math.floor(Math.random()*2))*0.0001;
        particle.velocity.x -= (Math.random(Math.random()*2))*0.001 };
      if (particle.x > 0){
        particle.velocity.z -= (Math.floor(Math.random()*2))*0.002;
        particle.velocity.y -= (Math.floor(Math.random()*2))*0.00001;
        particle.velocity.x += (Math.random(Math.random()*2))*0.005 }};

    // ============= SPREAD FIX ============= xxxxxxxxx xxxxxxxxx
    if (pCount%3 == 0){
      if (particle.velocity.z > 0){
        particle.velocity.y -= (Math.floor(Math.random()*2))*0.0001;
        particle.velocity.x -= (Math.random(Math.random()*2))*0.005 };
      if (particle.velocity.z < 0){
        particle.velocity.y += (Math.floor(Math.random()*2))*0.00001;
        particle.velocity.x -= (Math.random(Math.random()*2))*0.005 / 2}};
    if (pCount%5 == 0){
      if (particle.velocity.z > 0){
        particle.velocity.y -= (Math.floor(Math.random()*2))*0.0001;
        particle.velocity.z += (Math.random(Math.random()*2))*0.005 };
      if (particle.velocity.z < 0){
        particle.velocity.y += (Math.floor(Math.random()*2))*0.00001;
        particle.velocity.z += (Math.random(Math.random()*2))*0.005 }};
    if (pCount%7 == 0){
      if (particle.velocity.z > 0){
        particle.velocity.y -= (Math.floor(Math.random()*2))*0.0001;
        particle.velocity.x -= (Math.random(Math.random()*2))*0.005};
      if (particle.velocity.z < 0){
        particle.velocity.y += (Math.floor(Math.random()*2))*0.00001;
        particle.velocity.x -= (Math.random(Math.random()*2))*0.005 / 2}};

    // ============= AXIS RANDOM GENERATION ============= xxxxxxxxx xxxxxxxxx
    if (particle.y < -20) {
      particle.y = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 10;
      particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
      particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20 };
    if (particle.y > 30) {
      particle.y = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 10;
      particle.z = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20;
      particle.x = (Math.floor(Math.random()*2) == 1 ? 1 : -1)* 20 };

    particle.velocity.y += 0.00001, particle.add(particle.velocity);
  } //while loop end

  particleSystem.geometry.verticesNeedUpdate = true;
  particleSystem.rotation.y += (Math.random()*0.001)

  // =========================== CAMERA MODE TOGGLE ===========================
  if (cameraStatus === true) {
  cameramode.position.set(camera.position.x * 0.90, camera.position.y * 0.9, camera.position.z * 0.90);
  cameramode.rotation.set(camera.rotation.x,camera.rotation.y,camera.rotation.z) };
} //animate end

renderer.setAnimationLoop(() => {
  update();
  composer.render(scene, camera);
});

function render()
{
  analyser.getFrequencyData();
  /////////////////////////////////
	uniforms.tAudioData.value.needsUpdate = true;
  composer.render();
}
