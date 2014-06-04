
	var SOFR = {} || SOFR;

	SOFR.addFileReader = function() {
		var fileReaderButton = SO.menu.appendChild( document.createElement( 'div' ) );
		fileReaderButton.innerHTML =
			'<a href=# onclick=SO.toggleDialogs(SOFR.FileReader); ><p class=button >' +
				'<i class="fa fa-file-image-o"></i> File Reader...' +
			'</p></a>'; 

		SOFR.FileReader = SO.container.appendChild( document.createElement( 'div' ) );
		SOFR.FileReader.style.cssText = 'display: none; background-color: #ccc; opacity: 0.9; padding: 0 20px 20px; ' +
			'bottom: 0; height: 100px; left: 0;  margin: auto; position: absolute; right: 0; top: 0; width: 450px; ';
		SOFR.FileReader.innerHTML =
			'<p>' +
				'<input type=file id=inpFile ><br>' +
				'<div id=divData></div>' +
			'</p>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:SO.toggleDialogs(); >Close</a> ' +
			'</p>' +
		'';

		inpFile.onchange = function() { SOFR.readFile( this ); };
	};

	SOFR.readFile = function( that) {
		SO.toggleDialogs();
		SOFR.frame = 0;
		SOFR.heights = [];

		var data, lines, length;
		if ( that.files && that.files[0]){
			var reader = new FileReader();

			reader.onload = function ( event ) { 
				data = event.target.result;
				divData.innerHTML = data.substr( 1000, 1000 );
				lines = data.split(/\n/);
				length = lines.length;
				var sep = ',';
				for ( var i = 0; i < length; i++ ) {
					SOFR.heights.push( lines[i].split( sep ) );
				}
				divFrames.innerHTML = 'Frames Read: ' + length;
				divElevations.innerHTML = 'Elevations/frame: ' + SOFR.heights[ 0 ].length;
				SOFR.startTime = new Date();
				SO.updateFrame();
			};
			reader.readAsText( that.files[0] );

/*
		reader.onloadend = function( event ) {
			arrayBuffer = event.target.result;
			var elevations = new Float32Array( arrayBuffer );
			divData.innerHTML = elevations.length;
console.log( elevations );
		};
//		var blob = file.slice(start, stop + 1);
		reader.readAsArrayBuffer( that.files[0] );
*/
		}
	};