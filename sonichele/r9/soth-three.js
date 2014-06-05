
	var SOTH = {} || SOTH;

	var controls, renderer, stats, scene, camera;
	var geometry, material, mesh, wires;

	SOTH.addThreeJS = function() {
		renderer = new THREE.WebGLRenderer( { alpha: 1, antialias: true, clearColor: 0xffffff }  );
		renderer.setSize( window.innerWidth, window.innerHeight );
//		renderer.shadowMapEnabled = true;
		renderer.shadowMapSoft = true;

		document.body.appendChild( renderer.domElement );
		scene = new THREE.Scene();

		SOTH.getTrackballController();

		stats = new Stats();
		stats.domElement.style.cssText = 'bottom: 10px; opacity: 0.5; position: absolute; right: 10px; ';
		stats.domElement.title = 'Frames per second. Click to see ms per frame';
		SO.menu.appendChild( stats.domElement );

	};

	SOTH.addThreeFooter = function() {
		var footer = SO.menu.appendChild( document.createElement( 'div' ) );
		footer.innerHTML =
			'<h2>' +
				'<a href=# onclick=SOTH.resetCamera(); title="Return to default view"><i class="fa fa-home"></i></a>  ' +

			'</h2>'; 
	};

	SOTH.addAssets = function() {
		SOLI.toggleLightAmbient();
		SOLI.toggleLightPositionCamera();
		SOLI.toggleLightDirectional();

		SOTH.updateGroundPlane( 126, 0, 1 );
	};

	SOTH.updateGroundPlane = function( segments, base, scale) {
		scene.remove( mesh );
		scene.remove( wires );
		geometry = new THREE.PlaneGeometry( 1, 1, segments - 1, segments - 1 );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) );

//		var texture = THREE.ImageUtils.loadTexture( "../textures/UV_Grid_512.png" );
//		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//		texture.anisotropy = 16;
//		texture.needsUpdate = true;
//		material = new THREE.MeshBasicMaterial( { map: texture, shading: THREE.SmoothShading, side: THREE.DoubleSide });
//		material = new THREE.MeshLambertMaterial( { map: texture, color: 0xff2222, shading: THREE.SmoothShading, side: THREE.DoubleSide });

//		material = new THREE.MeshNormalMaterial( { side: THREE.DoubleSide } );
//		material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff });
//		material = new THREE.MeshPhongMaterial( {map: texture, color: 0xffaaaa, ambient: 0xaaaaaa, shading: THREE.SmoothShading, shininess: 50, side: THREE.DoubleSide, specular: 0x333333 } );
//		material = new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.SmoothShading, side: THREE.DoubleSide }),
		material = new THREE.MeshPhongMaterial( { ambient: 0xffffff * Math.random(), color: 0xffffff * Math.random(), shininess: 20, side: THREE.DoubleSide, specular: 0xffffff * Math.random(), transparent: true } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.scale.set( 200, scale, 200 );
		mesh.position.y = -base;
//		mesh.castShadow = true;
//		mesh.receiveShadow = true;
		scene.add( mesh );

		wires = mesh.clone();
		wires.material = new THREE.MeshBasicMaterial( { wireframe: true } );
		scene.add( wires );
	}

	SOTH.getTrackballController = function() {
		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 200, 100, 200 );
		controls = new THREE.TrackballControls( camera, renderer.domElement );
		controls.target.set( 0, 20, 0 );
	};

	SOTH.resetCamera = function() {
		SOTH.getTrackballController();
	};
