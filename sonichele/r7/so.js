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
			'<a href=# onclick=SO.openDialog(SO.about); ><p class=button >' +
				'<i class="fa fa-paw"></i> About Sonichele...' +
			'</p></a>'; 

		SO.about = SO.container.appendChild( document.createElement( 'div' ) );
		SO.about.style.cssText = 'display: none; background-color: #ccc; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; ';
		SO.about.innerHTML =
			'<div >' +
				'<h3>' + document.title + '</h3>' +
				'<h4>Features include the following:</h4>' +
				'<ul>' +
					'<li>xxx</li>' +
					'<li>xxx</li>' +
				'</ul>' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Source code</a><br>' +
				'<small>' +
					'credits: <a href="http://threejs.org" target="_blank">three.js</a> - ' +
					'<a href="http://khronos.org/webgl/" target="_blank">webgl</a> - ' +
					'<a href="http://jaanga.github.io" target="_blank">jaanga</a><br>' +
					'copyright &copy; 2014 Jaanga authors ~ MIT license' +
				'</small><br><br>' +
				'<p style=text-align:right; >' +
					'<a class=button href=JavaScript:SO.toggleDialogs(); >Close</a> ' +
				'</p>' +
			'</div>';
	};


	SO.toggleMenu = function(  ) {
		var toggle = SO.menu.children[1].style.display === 'none' ? '' : 'none';
		for (var i = 1; i < TA.menu.children.length; i++) {
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
