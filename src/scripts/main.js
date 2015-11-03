(function() {
	var loadCSS = require ('./lib/loadCSS');
	var onScroll = require ('./lib/onScroll');

	document.addEventListener('DOMContentLoaded', onDOMLoad);

	function onDOMLoad() {
		var btnMenu = document.getElementById('btnMenu');
		var navbarMenu = document.getElementById('navbarMenu');
		var headerElem = document.querySelector('.header');
		
		// headerElem.addEventListener('scroll', onScroll);
  		window.addEventListener('scroll', function(){ onScroll(headerElem) });



		btnMenu.addEventListener('click', onClickMenu);

		loadCSS('https://fonts.googleapis.com/css?family=Montserrat|Lato');	

		loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css');	
					

		function onClickMenu() {
			navbarMenu.classList.toggle('header-menu-list--show')

		}
	}
}());