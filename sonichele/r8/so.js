	var SO = {} || SO;


	SO.addCSS = function() {
		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: 600 12pt monospace; margin: 0; overflow: hidden; }' +
			'h1 { margin: 0; }' +
			'a { text-decoration: none; opacity: 0.8; }' +
			'#closer p { text-align:right; margin: 0; }' +
			'#movable { background-color: #ccc; opacity: 0.8; left: 20px; overflow: auto; padding: 10px; position: absolute; top: 20px; }' +
			'.button { background-color: #eee; outline: 1px #aaa solid; padding: 5px; }' +
		'';
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

	SO.addMenu = function() {
		SO.menu = SO.container.appendChild( document.createElement( 'div' ) );
		SO.menu.id = 'movable';
		SO.menu.addEventListener( 'mousedown', SO.mouseMove, false );
		SO.menu.innerHTML = '<a href=# id=closer ><p><i class="fa fa-bars"></i></p></a>' +
			'<h1>' +
				'<a href="" ><i class="fa fa-music"></i> ' + document.title + '</a> ' +
			'</h1>';

		closer.style.cssText = 'text-decoration: none; ';
		closer.onclick = function() { SO.toggleMenu(); };

	};

	SO.addHR = function(){
		SO.hr = SO.menu.appendChild( document.createElement( 'hr' ) );
	}

	SO.addAbout = function() {
		var aboutButton = SO.menu.appendChild( document.createElement( 'div' ) );
		aboutButton.innerHTML =
			'<a href=# onclick=SO.toggleDialogs(SO.about); ><p class=button >' +
				'<i class="fa fa-paw"></i> About Sonichele...' +
			'</p></a>'; 

		SO.about = SO.container.appendChild( document.createElement( 'div' ) );
		SO.about.style.cssText = 'display: none; background-color: #ccc; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; ';
		SO.about.innerHTML =
			'<h3>' + document.title + '</h3>' +
			'<h4>Translates numerical sound data in ASCII format to 3D animations viewable in your browser</h4>' +
			'<p>Data made available via  Michele Ducceschi\'s research on wave turbulence in elastic plates. See also:</p>' +
			'<ul>' +
				'<li><a href="http://www.msc.univ-paris-diderot.fr/~berhanu/Ducceschi.pdf" target="_blank">Numerical Simulations of Wave Turbulence in Elastic Plates Using aFinite Difference Code</a></li>' +
				'<li><a href="http://www.ness-music.eu/wp-content/uploads/2013/06/ducceschi_michele.pdf" target="_blank">Numerical Simulations of Wave Turbulence in Vibrating Plates</a></li>' +
			'</ul>' +

			'<small>' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Source code</a> ' +
				'Credits: <a href="http://threejs.org" target="_blank">three.js</a> - ' +
				'<a href="http://khronos.org/webgl/" target="_blank">webgl</a> - ' +
				'<a href="http://sonichele.github.io" target="_blank">Sonichele</a><br>' +
				'copyright &copy; 2014 Sonichele authors ~ MIT license' +
			'</small><br><br>' +

			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:SO.toggleDialogs(); >Close</a> ' +
			'</p>';
	};

	SO.toggleMenu = function(  ) {
		var toggle = SO.menu.children[1].style.display === 'none' ? '' : 'none';
		for (var i = 1; i < SO.menu.children.length; i++) {
			SO.menu.children[i].style.display = toggle;
		}
	};

	SO.toggleDialogs = function( dialog ) {
		for (var i = 1, len = SO.container.children.length; i < len; i++) {
			SO.container.children[i].style.display = 'none';
		}
		if ( dialog ) dialog.style.display="block";
	};

// events
	SO.mouseUp = function() {
		window.removeEventListener('mousemove', SO.divMove, true);
	};

	SO.mouseMove = function( event ){
		if ( event.target.id === 'movable' ) {
			event.preventDefault();

			offsetX = event.clientX - event.target.offsetLeft;
			offsetY = event.clientY - event.target.offsetTop;
			window.addEventListener('mousemove', SO.divMove, true);
		}
	};
// add move cursor 
	SO.divMove = function( event ){
		event.target.style.left = ( event.clientX - offsetX ) + 'px';
		event.target.style.top = ( event.clientY - offsetY ) + 'px';
	};
