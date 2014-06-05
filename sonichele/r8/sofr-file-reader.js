
	var SOFR = {} || SOFR;

	SOFR.addFileReader = function() {
		var fileReaderButton = SO.menu.appendChild( document.createElement( 'div' ) );
		fileReaderButton.innerHTML =
			'<a href=# onclick=SO.toggleDialogs(SOFR.FileReader); ><p class=button >' +
				'<i class="fa fa-file-image-o"></i> File Reader...' +
			'</p></a>'; 

		SOFR.FileReader = SO.container.appendChild( document.createElement( 'div' ) );
		SOFR.FileReader.className = 'movable';
		SOFR.FileReader.addEventListener( 'mousedown', SO.mouseMove, false );
		SOFR.FileReader.style.cssText = 'display: none; background-color: #ccc; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; height: 330px; left: 0; margin: auto; position: absolute; right: 0; top: 0; width: 250px; ';
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
//		SO.toggleDialogs();
		SOFR.frame = 0;
		SOFR.heights = [];

		var data, lines, length;
		var base, min = 0, max = 0;
		if ( that.files && that.files[0]){
			var reader = new FileReader();
			divData.innerHTML = 'Loading...';
			reader.onload = function ( event ) { 
				data = event.target.result;
				//divData.innerHTML = data.substr( 1000, 1000 );
				var txt = '<div  style=height:50px;overflow:scroll>' + data.substr( 1000, 1000 ) + '</div><br>';
				lines = data.split(/\n/);
				length = lines.length;
				var sep = ',';
				for ( var i = 0; i < length; i++ ) {
					SOFR.heights.push( lines[i].split( sep ) );
				}
				txt += 'Frames Read: ' + length + '<br>';
				divFrames.innerHTML = 'Frames Read: ' + length;
				testFrame = length < 200 ? length - 1 : 200;
				length = SOFR.heights[ testFrame ].length
				txt += 'Elevations/frame: ' + length + '<br>';
				divElevations.innerHTML = 'Elevations/frame: ' + length;
				txt += 'Points/sides: ' + Math.sqrt( length ) + '<br>';
				base = SOFR.heights[ testFrame ][0];
				txt += 'First height: ' + base + '<br>';
				for (var i = 0; i < length; i++ ) {
					min = min < parseFloat( SOFR.heights[ testFrame ][ i ] ) ? min : parseFloat( SOFR.heights[ testFrame ][ i ] );
					max = max < parseFloat( SOFR.heights[ testFrame ][ i ] ) ? parseFloat( SOFR.heights[ testFrame ][ i ] ) : max;
				} 
				txt += 'Min: ' + min + '<br>';
				txt += 'Max: ' + max + '<br>';
				scale = 10 / ( max  * max );
				txt += 'Vertical scale: ' + scale + '<br>';
				divData.innerHTML = txt;

SOFR.FileReader.style.cssText += 'left: 20px; margin: 0; top: 400px; ';

				SOFR.startTime = new Date();
				SOTH.updateGroundPlane( Math.sqrt( length ), base, scale );

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