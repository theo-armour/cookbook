
	var SOTH = {} || SOTH;

	var controls, renderer, stats, scene, camera;
	var geometry, material, mesh;

	SOTH.addThreeJS = function() {

		renderer = new THREE.WebGLRenderer( { alpha: 1, antialias: true, clearColor: 0xffffff }  );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );
		scene = new THREE.Scene();

		SOTH.getTrackballController();

		stats = new Stats();
		stats.domElement.style.cssText = 'bottom: 10px; opacity: 0.5; position: absolute; right: 10px; ';
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
		geometry = new THREE.PlaneGeometry( 200, 200, 125, 125 );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -Math.PI / 2 ) );

		var texture = THREE.ImageUtils.loadTexture( "../textures/UV_Grid_512.png" );
//		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.anisotropy = 16;
//		texture.needsUpdate = true;
		material = new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading, side: THREE.DoubleSide });
		material = new THREE.MeshBasicMaterial( { map: texture, shading: THREE.SmoothShading, side: THREE.DoubleSide });
//		material = new THREE.MeshLambertMaterial( { map: texture, color: 0xff2222, shading: THREE.SmoothShading, side: THREE.DoubleSide });
//		material = new THREE.MeshPhongMaterial( {map: texture, color: 0xffaaaa, ambient: 0xaaaaaa, shading: THREE.SmoothShading, shininess: 50, side: THREE.DoubleSide, specular: 0x333333 } );


		mesh = new THREE.Mesh( geometry, material );
//		mesh.castShadow = true;
//		mesh.receiveShadow = true;
		scene.add( mesh );
	};

	SO.addGradient = function() {
		var css = document.body.appendChild( document.createElement('style') );
		var col1 = "#" + Math.random().toString(16).slice(2, 8);
		var col2 = "#" + Math.random().toString(16).slice(2, 8);
		var col3 = "#" + Math.random().toString(16).slice(2, 8);
		var X = ( Math.random() * window.innerWidth ).toFixed(0);
		var Y = ( Math.random() * window.innerHeight ).toFixed(0);
		var center =  20 + ( Math.random() * 60 ).toFixed(0);

		css.innerHTML += 'body { ' +
			'background: -webkit-radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); ' +
			'background: -moz-radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); ' +
			'background: radial-gradient(' + X + 'px ' + Y + 'px, farthest-corner, ' + col1 + ' 0%, ' + col2 + ' 50%, ' + col3 + ' 100%); }' +
		'';
	};

	SOTH.getTrackballController = function() {
		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 200, 100, 200 );
		controls = new THREE.TrackballControls( camera, renderer.domElement );
		controls.target.set( 0, 20, 0 );
	};

	SOTH.resetCamera = function() {
		SOTH.getTrackballController();
	};
