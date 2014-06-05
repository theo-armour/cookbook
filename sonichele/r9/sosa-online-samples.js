	var SOSA = {} || SOSA;

	SOSA.addOnlineSamples = function() {
		var OnlineSamplesButton = SO.menu.appendChild( document.createElement( 'div' ) );
		OnlineSamplesButton.innerHTML =
			'<a href=# onclick=SO.toggleDialogs(SOSA.onlineSamples); title="Start here!" ><p class=button >' +
				'<i class="fa fa-cogs"></i> Online Samples...' +
			'</p></a>'; 
/*
		SOSA.onlineSamples = function() {
			SOSA.msg = SO.menu.appendChild( document.createElement( 'div' ) );
			SOSA.msg.innerHTML =
				'<div>' +
					'<div id=divFrames>Frames:</div>' +
					'<div id=divElevations>Elevations/frame:</div>' +
					'<div id=divFrame>Current frame:</div>' +
					'<div id=divTimes>Time in Ms:</div>' +
					'<div id=divMsg ></div>' +
				'</div>'; 
		};
*/

	// remember: no spaces in the JS below or add quotes
			SOSA.onlineSamples = SO.container.appendChild( document.createElement( 'div' ) );
			SOSA.onlineSamples.style.cssText = 'display: none; background-color: #ccc; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; ';
			SOSA.onlineSamples.innerHTML =
				'<h3>Online Samples</h3>' +
				'<div id=wiMsg >Messages appear here...</div>' +
				'<p>' +
					'<input type=checkbox id=inpLightAmbient onclick=SOLI.toggleLightAmbient(); checked /> Ambient Lighr <br>' +
				'</p>' +
				'';

	};