
// TO DO:
// Music Array
// Ambient Occlusion
// Reactiveness
// Particles

// =======================================================================
// =                             SETUP STUFF                             =
// =======================================================================

var composer, particlestatic, baseplate;
/////////////////////////////////
var iii, three, blue, iiiWire, threeWire, white, x, asteroids;
/////////////////////////////////
var radius = 400,
    theta = 0,
    count = 0,
    sf = 14,
    baseplatev = 180;
/////////////////////////////////
var animateStatus = true;
///////////////////////////////// x
var particleCount = 1800,
    particles = new THREE.Geometry(),
    pMaterial = new THREE.PointsMaterial({
      size: 20,
      map: THREE.TextureLoader("x.png"),
      blending: THREE.AdditiveBlending,
      transparent: true
    });
var particleCount = 500,
    particleSystem;
/////////////////////////////////
var dirs = [],
    parts = [],
    container = document.createElement('div');
/////////////////////////////////
document.body.appendChild( container );
/////////////////////////////////
var renderer, camera, scene
/////////////////////////////////
var orbitalControl = new THREE.OrbitControls(camera, renderer);
var controls = new THREE.OrbitControls( camera, renderer);
controls.addEventListener( 'change', render );
/////////////////////////////////
var skyGeo = new THREE.SphereGeometry(1000, 25, 25),
  loader  = new THREE.TextureLoader();
  skytexture = loader.load( "skybox.jpg" )
var skybox
var equirectShader = THREE.ShaderLib[ "equirect" ];
var skymaterial = new THREE.MeshBasicMaterial({
    map: skytexture,
    reflectivity: 1,
    shininess: 1,
    color: 0xF3FFE2,
    specular: 0xffffff,
    });
/////////////////////////////////
var fftSize = 128,
    mediaElement,
    audio,
    listener;
/////////////////////////////////

/////////////////////////////////

init();
animate();
render();
update();

// =======================================================================
// =                          SCENE GENERATION                           =
// =======================================================================

function init() {

  // ============= RENDER SETUP ============= xxxxxxxxx xxxxxxxxx

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  /////////////////////////////////
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0.0);
  /////////////////////////////////
  document.getElementById('ThreeJS').appendChild(renderer.domElement);

  // =========================== SCENE STUFF ===========================

  scene = new THREE.Scene();

  // ============= CAMERA SETUP ============= xxxxxxxxx xxxxxxxxx

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.z = 4000;
  camera.position.y = 0;
  camera.up = new THREE.Vector3(0,500,0);
  /////////////////////////////////
  controls = new THREE.OrbitControls(camera);
  controls.target = new THREE.Vector3(500, 200, 500);
  controls.addEventListener('change', render);
  /////////////////////////////////
  scene.add(camera);

  document.addEventListener('keydown',function(e) {
    console.log('keydown')
    var key = e.keyCode || e.which;
    if(key === 81) {
      animateStatus = !animateStatus;
    }
  }, false);

  // =======================================================================
  // =                            OBJECT STUFF                             =
  // =======================================================================

  particlestatic = new THREE.Object3D();

  // ============= BASEPLATE ============= xxxxxxxxx xxxxxxxxx

  var geometry = new THREE.BoxGeometry( 3000, 1 , 3000 );
	// baseplate = new THREE.Mesh( geometry);
  // baseplate.material.color.setHex( 0xfdfeff );
  // scene.add(baseplate)
  // baseplate.castShadow = true;
  // baseplate.receiveShadow = true;
  // baseplate.position.set(-5, -180, -40);

  // ============= Skybox ============= xxxxxxxxx xxxxxxxxx

  skybox = new THREE.Mesh(skyGeo, skymaterial);
  skybox.material.side = THREE.BackSide;
  scene.add(skybox);
  skybox.rotation.set(0,0,130)

  // ============= III ============= xxxxxxxxx xxxxxxxxx

  //dec
  iii = new THREE.OBJLoader();

  var iiiMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 0.9,
    shininess: 0.3,
    color: 0xF3FFE2,
    specular: 0xffffff,
    shininess: 900,
    transparent: true,
    //color: '#7FFFD4'
  });

	iii.load("III.obj", function(mesh){
		mesh.traverse(function(node){

			if( node instanceof THREE.Mesh ){
        node.material = iiiMaterial;
				node.castShadow = true;
				node.receiveShadow = true;
        node.material.opacity = 0.3;
			}

		});
		scene.add(mesh);
    /////////////////////////////////
    mesh.scale.set(sf - 0.1, sf - 0.1, sf - 0.1);
		mesh.position.set(-5, 10, -40);
	});

  // ============= III Wire ============= xxxxxxxxx xxxxxxxxx

  //dec
  iiiWire = new THREE.OBJLoader();

  var iiiWireMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 0.9,
    shininess: 0.3,
    color: 0xF3FFE2,
    specular: 0xffffff,
    shininess: 900,
    wireframe: true,

  });

	iiiWire.load("IIIWire.obj", function(mesh){
		mesh.traverse(function(node){

			if( node instanceof THREE.Mesh ){
        node.material = iiiWireMaterial;
				node.castShadow = true;
				node.receiveShadow = true;
			}

		});
		scene.add(mesh);
    /////////////////////////////////
    mesh.scale.set(sf, sf , sf );
		mesh.position.set(-5, 10, -40);
	});

  // ============= Three ============= xxxxxxxxx xxxxxxxxx

  three = new THREE.OBJLoader();

  var ThreeMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 3.9,
    shininess: 0.3,
    specular: 0xffffff,
    shininess: 900,
    transparent: true,
    //color: '#2F2F2F'
  });

	three.load("3.obj", function(mesh){
		mesh.traverse(function(node){

			if( node instanceof THREE.Mesh ){
        node.material = ThreeMaterial;
				node.castShadow = true;
				node.receiveShadow = true;
        node.material.opacity = 0.3;
			}

		});
		scene.add(mesh);
    /////////////////////////////////
    mesh.scale.set(sf - 0.1, sf - 0.1, sf - 0.1);
		mesh.position.set(-5, 10, -40);
	});

  // ============= Three Wire ============= xxxxxxxxx xxxxxxxxx

  threeWire = new THREE.OBJLoader();

  var ThreeWireMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 3.9,
    shininess: 0.3,
    specular: 0xffffff,
    wireframe: true,
    shininess: 900,
    //color: '#2F2F2F'
  });

  threeWire.load("3.obj", function(mesh){
    mesh.traverse(function(node){

      if( node instanceof THREE.Mesh ){
        node.material = ThreeWireMaterial;
        node.castShadow = true;
        node.receiveShadow = true;
      }

    });
    scene.add(mesh);
    /////////////////////////////////
    mesh.scale.set(sf, sf, sf);
    mesh.position.set(-5, 10, -40);
  });

  // ======== blue shards ======== xxxxxxxxx xxxxxxxxx

  blue = new THREE.OBJLoader();

  var BlueMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 300,
    shininess: 300,
    color: '#f670ef',
    transparent: true
  });

	blue.load("blueshards.obj", function(mesh){
		mesh.traverse(function(node){

			if( node instanceof THREE.Mesh ){
        node.material = BlueMaterial;
				node.castShadow = true;
				node.receiveShadow = true;
        node.material.opacity = 0.8;
			}

		});
		scene.add(mesh);
    /////////////////////////////////
    mesh.scale.set(sf, sf, sf);
		mesh.position.set(-5, 10, -40);
	});

  // ======= white shards  ======= xxxxxxxxx xxxxxxxxx

  white = new THREE.OBJLoader();

  var WhiteMaterial = new THREE.MeshPhongMaterial({
    reflectivity: 1,
    shininess: 1,
    color: '#e6e3ea'
  });

	white.load("whiteshards.obj", function(mesh){
		mesh.traverse(function(node){

			if( node instanceof THREE.Mesh ){
				node.castShadow = true;
				node.receiveShadow = true;
			}

		});
		scene.add(mesh);
    /////////////////////////////////
    mesh.scale.set(sf, sf, sf);
		mesh.position.set(-5, 10, -40);
	});

  // =========================== SCENE STUFF ===========================

  //scene.background = 0xfdfeff;
  //scene.fog = new THREE.Fog(0xfdfeff, 0.01, 20);
  scene.add(particlestatic);

  var geometry = new THREE.TetrahedronGeometry(2, 0);
  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.flatShading
  });

  // ======= shards  ======= xxxxxxxxx xxxxxxxxx

  for (var i = 0; i < 1500; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2+100, Math.random() * 2);
    mesh.scale.set(Math.random(30), Math.random(30) / 2, Math.random(30) / 2 );
    particlestatic.add(mesh);
  }

  // ============= x ============= xxxxxxxxx xxxxxxxxx

  	for(var p = 0; p < particleCount; p++) {

       pX = Math.random() * 500 - 250,
       pY = Math.random() * 500 - 250,
       pZ = Math.random() * 500 - 250,

      particle = new THREE.Vector3(new THREE.Vector3(pX, pY, pZ));
  		particle.velocity = new THREE.Vector3( 0 , Math.random() ,0 );
  		particles.vertices.push(particle);
  	}

  	particleSystem = new THREE.Points(particles, pMaterial);

  	particleSystem.sortParticles = true;
  	scene.add(particleSystem);

// =========================== LIGHT STUFF ===========================

  var ambientLight = new THREE.AmbientLight( 0x999999 );
  scene.add(ambientLight);

  var lights = [];
  /////////////////////////////////
  lights[0] = new THREE.DirectionalLight( 0xe1e0f0, 0.5, 00  );
  lights[0].position.set( 1, -0.7, 0 );
  lights[1] = new THREE.DirectionalLight( 0x11E8BB, 0.5, 100  );
  lights[1].position.set( 0.5, 1, 0.5 );
  lights[2] = new THREE.DirectionalLight( 0x8200C9, 0.5, 100 );
  lights[2].position.set( -0.75, -1, 0.5 );;
  /////////////////////////////////
  lights[0].castshadow = true;
  lights[1].castshadow = true;
  lights[2].castshadow = true;
  /////////////////////////////////
  scene.add( lights[0] );
  scene.add( lights[1] );
  scene.add( lights[2] );

  // ============= Post Processing ============= xxxxxxxxx xxxxxxxxx

  composer = new THREE.EffectComposer( renderer );
  composer.addPass( new THREE.RenderPass( scene, camera ) );

  var effect1 = new THREE.ShaderPass( THREE.DigitalGlitch );
  effect1.uniforms[ 'amount' ].value = 0.001;
  effect1.uniforms[ 'distortion_x' ].value = 0.1;
  composer.addPass( effect1 );

  // ============= Control Adjustment ============= xxxxxxxxx xxxxxxxxx

  controls.addEventListener( 'change', render );
  /////////////////////////////////
  controls.enableDamping = true;
  controls.dampingFactor = 0.75;
	controls.screenSpacePanning = true;
	controls.minDistance = 500;
	controls.maxDistance = 900;
	controls.maxPolarAngle = Math.PI;
  /////////////////////////////////
  controls.addEventListener( 'change', render );

//

  // ============= Audio Input ============= xxxxxxxxx xxxxxxxxx

  listener = new THREE.AudioListener();
  audio = new THREE.Audio( listener );
	mediaElement = new Audio( 'NOTHINGBUTNOISE.mp3' );

	mediaElement.loop = false;
	mediaElement.play();
  /////////////////////////////////
	audio.setMediaElementSource( mediaElement );
  /////////////////////////////////
	analyser = new THREE.AudioAnalyser( audio, fftSize );

	uniforms = {
		tAudioData: { value: new THREE.DataTexture( analyser.data, fftSize / 2, 1, THREE.LuminanceFormat ) }
	};

  // ============= End =============

  window.addEventListener('resize', onWindowResize, false);

};

// =========================== SCENE STUFF ===========================

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    /////////////////////////////////
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize( window.innerWidth, window.innerHeight );
  }
// =======================================================================
// =                           ANIMATION STUFF                           =
// =======================================================================

// ============= Camera Keybind ============= xxxxxxxxx xxxxxxxxx

function animate()
{
  requestAnimationFrame( animate );

  // ============= background particles ============= xxxxxxxxx xxxxxxxxx

  particlestatic.rotation.x += 0.001;
  particlestatic.rotation.y -= 0.001;

  if (animateStatus === true) {

    theta += 0.1;
    camera.position.x = (radius * Math.sin( THREE.Math.degToRad(theta))   );
    camera.position.y = (radius / 2 * Math.sin( THREE.Math.degToRad(theta))   );
    camera.position.z = (radius * Math.cos( THREE.Math.degToRad(theta))   );

  }
   camera.lookAt( scene.position );
   camera.updateMatrixWorld();

  // ============= Audio Sync ============= xxxxxxxxx xxxxxxxxx



  // ============= Render Settings ============= xxxxxxxxx xxxxxxxxx
  controls.update();
  composer.render();
  update();
  render();
};

// =========================== Particle update ===========================

function update() {

  particleSystem.rotation.y += 0.01;

  pCount = particleCount;
  while (pCount--) {
    particle = particles.vertices[pCount];
    if (particle.y < -200) {
      particle.y = 200;
      particle.velocity.y = 0;
    }

    particle.velocity.y -= Math.random() * .1;
    particle.add(particle.velocity);
  }

  particleSystem.geometry.__dirtyVertices = true;

  renderer.render(scene, camera);
  // requestAnimationFrame(update);
}

// =========================== RENDER STUFF ===========================

function render()
{

  analyser.getFrequencyData();
  /////////////////////////////////
	uniforms.tAudioData.value.needsUpdate = true;

 	renderer.render( scene, camera );
}
