	var SOLI = {} || SOLI;

	SOLI.addLightsBox = function() {
		var LightsBoxButton = SO.menu.appendChild( document.createElement( 'div' ) );
		LightsBoxButton.innerHTML =
			'<a href=# onclick=SO.toggleDialogs(SOLI.lightsBox); ><p class=button >' +
				'<i class="fa fa-cogs"></i> Lights...' +
			'</p></a>'; 

// remember: no spaces in the JS below or add quotes
		SOLI.lightsBox = SO.container.appendChild( document.createElement( 'div' ) );
		SOLI.lightsBox.style.cssText = 'background-color: #ccc; bottom: 0; display: none; opacity: 0.9; padding: 20px; ' +
			'height: 330px; left: 20px; margin: auto; position: absolute; top: 250px; ';
		SOLI.lightsBox.innerHTML =
			'<div id=wiMsg >Messages appear here...</div>' +
			'<p>' +
				'<input type=checkbox id=inpLightAmbient onclick=SOLI.toggleLightAmbient(); checked /> Ambient Lighr <br>' +
			'</p>' +
			'<p>' +
				'<input type=checkbox id=inpLightPositionCamera onclick=SOLI.toggleLightPositionCamera(); checked /> Point light at camera position<br>' +
			'</p>' +
			'<p>' +
				'<input type=checkbox id=inpLightDirectional onclick=SOLI.toggleLightDirectional(); checked /> Directional Light<br>' +
			'</p>' +
			'<p>' +
				'Directional light latitude<br><input type=range id=rngLightLat min=-90 max=90 step=1 value=60 /> ' +
				'<output id=outpLightLat >60</output><br>' +
			'</p>' +
			'<p>' +
				'Directional light longitude<br><input type=range id=rngLightLon min=-180 max=180 step=1 value=90 /> ' +
				'<output id=outpLightLon >90</output><br>' +
			'</p>' +
			'<p>' +
				'<input type=checkbox id=chkLightHelper /> Display light helper ' +
			'</p>' +

			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:SO.toggleDialogs(); >Close</a> ' +
			'</p>' +
		'';

		rngLightLat.onmousemove = function() { outpLightLat.value=this.value; SOLI.updateLightPosition( rngLightLat.value, rngLightLon.value ); };
		rngLightLon.onmousemove = function() { outpLightLon.value=this.value;  SOLI.updateLightPosition( rngLightLat.value, rngLightLon.value ); };

		chkLightHelper.onchange = function() { SOLI.lightDirectional.shadowCameraVisible = chkLightHelper.checked === true ? true : false; };
	};

	SOLI.toggleLightPositionCamera = function() {
		if ( inpLightPositionCamera.checked === true ) {
			SOLI.lightCameraPosition = new THREE.PointLight( 0xffffff, 0.1 );
			SOLI.lightCameraPosition.position = camera.position;
			scene.add( SOLI.lightCameraPosition );

			SOLI.updateMaterials( scene.children );

		} else {
			scene.remove( SOLI.lightCameraPosition );
		}
	};

	SOLI.toggleLightAmbient = function() {
		if ( inpLightAmbient.checked === true ) {
			SOLI.lightAmbient = new THREE.AmbientLight( 0x888888);
			scene.add( SOLI.lightAmbient );
			SOLI.updateMaterials( scene.children );
		} else {
			scene.remove( SOLI.lightAmbient );
		}
	};

	SOLI.toggleLightDirectional = function() {
		if ( inpLightDirectional.checked === true ) {
//			SOLI.lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.5 );
			SOLI.lightDirectional = new THREE.SpotLight( 0xffffff, 1.5 );

			SOLI.updateLightPosition( rngLightLat.value, rngLightLon.value );
//			SOLI.lightDirectional.position.set( -50, 50, -50 );

			SOLI.lightDirectional.castShadow = true;
			var d = 100;
			SOLI.lightDirectional.shadowCameraLeft = -d;
			SOLI.lightDirectional.shadowCameraRight = d;
			SOLI.lightDirectional.shadowCameraTop = d;
			SOLI.lightDirectional.shadowCameraBottom = -d;

			SOLI.lightDirectional.shadowCameraNear = 200;
			SOLI.lightDirectional.shadowCameraFar = 400;
	
			SOLI.lightDirectional.shadowCameraFov = 100;
			SOLI.lightDirectional.shadowBias = -0.005;
//			SOLI.lightDirectional.shadowDarkness = 0.5;
//			SOLI.lightDirectional.shadowMapWidth = 2048;
//			SOLI.lightDirectional.shadowMapHeight = 2048;

			scene.add( SOLI.lightDirectional );
			SOLI.updateMaterials( scene.children );
		} else {
			scene.remove( SOLI.lightDirectional );
		}
	}

	SOLI.updateMaterials = function( children ) {
		for (var i = 0, len = children.length; i < len; i++) {
			if ( children[i].material ) {
				children[i].material.needsUpdate = true;
			}
		}
	}

	SOLI.updateLightPosition = function ( lat, lon ) {
		var pi = Math.PI, pi05 = pi * 0.5, pi2 = pi + pi;
		var d2r = pi / 180, r2d = 180 / pi;  // degrees / radians
		function cos(a) {return Math.cos(a);}
		function sin(a) {return Math.sin(a);}
		var theta = lat * d2r;
		var phi = lon * d2r;
		var radius = 300;
		SOLI.lightDirectional.position.x = radius * cos( theta ) * sin( phi );
		SOLI.lightDirectional.position.y = radius * sin( theta );
		SOLI.lightDirectional.position.z = radius * cos( theta ) * cos( phi );
	};
