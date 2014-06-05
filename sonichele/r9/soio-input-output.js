	var SOIO = {} || SOIO;

	SOIO.addInputOutput = function() {
		SOIO.msg = SO.menu.appendChild( document.createElement( 'div' ) );
		SOIO.msg.innerHTML =
			'<div>' +
				'<div id=divFrames>Frames:</div>' +
				'<div id=divElevations>Elevations/frame:</div>' +
				'<div id=divFrame>Current frame:</div>' +
				'<div id=divTimes>Time in Ms:</div>' +
				'<div id=divMsg ></div>' +

			'</div>'; 
	};