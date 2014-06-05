	var SOSA = {} || SOSA;

//	SOSA.sample1 = 'http://theo-armour.github.io/cookbook/sonichele/data-test/plate_coordinates_13x13-transposed.csv';

	SOSA.sample1 = '../data-test/plate_coordinates_13x13-transposed.csv';
	SOSA.sample2 = '../data-test/film_int_signed-150-450.csv';
	SOSA.sample3 = '../data-test/film_int_signed-3470-3670.csv';

	SOSA.addOnlineSamples = function() {
		var OnlineSamplesButton = SO.menu.appendChild( document.createElement( 'div' ) );
		OnlineSamplesButton.innerHTML =
			'<a href=# onclick=SO.toggleDialogs(SOSA.onlineSamples); title="Start here!" ><p class=button >' +
				'<i class="fa fa-cogs"></i> Online Samples...' +
			'</p></a>'; 

	// remember: no spaces in the JS below or add quotes
			SOSA.onlineSamples = SO.container.appendChild( document.createElement( 'div' ) );
			SOSA.onlineSamples.style.cssText = 'display: none; background-color: #ccc; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 450px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; ';
			SOSA.onlineSamples.innerHTML =
				'<h3>Online Samples</h3>' +
				'<p><i>These links give you access to sample files with limited amounts of data. ' +
					'You can catch a glimpse of what the app does and how it works. ' +
					'If you like what you see, you may download larger files off this site and open the using the File Reader tab.' +
					'If you really like what you see, contact Michele Ducceschi who can provide you with access to the gargantuan original data.' +
				'</i></p>' +

				'<p><button onclick=SOSA.runFile(SOSA.sample1); >Sample 1</button> plate_coordinates_13x13. 1.4 MB. ' +
					'The first file that worked. </p>' +
				'<p><button onclick=SOSA.runFile(SOSA.sample2); >Sample 2</button> film_int_signed-150-450. 12 MB.</p>' +
				'<p><button onclick=SOSA.runFile(SOSA.sample3); >Sample 3</button> film_int_signed-3470-3670 11 MB.</p>' +
				'<div id=lineReads ></div>' +
				'<div id=fileReads ></div>' +
				'<div id=msg ></div>' +
				'<p style=text-align:right; >' +
					'<a class=button href=JavaScript:SO.toggleDialogs(); >Close</a> ' +
				'</p>' +
				'';
	};

	SOSA.runFile = function( fname ) {
		heights = [];
		fileCount = 1;
		linesRead = 0;
		frame = 0;
		startTime = new Date();
		SOSA.requestFile( fname );
	};

	SOSA.requestFile = function ( fname ) {
		SOSA.xmlhttp = new XMLHttpRequest();
		SOSA.xmlhttp.crossOrigin = "Anonymous"; 
		SOSA.xmlhttp.open( 'GET', fname, true );
		SOSA.xmlhttp.onreadystatechange = callback;
		SOSA.xmlhttp.send( null );
	};

	function callback() {
		if ( SOSA.xmlhttp.readyState == 4  ) {
			data = SOSA.xmlhttp.responseText;
			SOFR.processData( data );
			SO.toggleDialogs();
/*
			lines = data.split(/\n/);
			var sep = ',';
			for ( var i = 0; i < 5; i++ ) {
				heights.push( lines[i].split( sep ) );
			}
			linesRead += heights.length;
			lineReads.innerHTML = 'Lines Read: ' + linesRead;
			fileReads.innerHTML = 'File reads: ' + fileCount + '<br>Time (ms): ' + ( new Date() - startTime);

			msg.innerHTML ='';
			if ( fileCount >  1467 ) {
				runFile();
			}
*/
		} else {
//			msg.innerHTML = 'waiting '; // + new Date() + '<br>' +  
				SOSA.xmlhttp.readyState + '<br>' + 
//				xmlhttp.response + '<br>' +  
				SOSA.xmlhttp.status + '<br>' + 
				SOSA.xmlhttp.statusText;
			'';
		}
	};
