const G_TRACKING_ID = 'UA-172407584-1';
const HOTJAR_ID = 1419537;
(function ($) {
	$(function () {

		$('.sidenav').sidenav();
		$('.parallax').parallax();

		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', G_TRACKING_ID);

	}); // end of document ready
})(jQuery); // end of jQuery name space


(function (h, o, t, j, a, r) {
	h.hj = h.hj || function () {
		(h.hj.q = h.hj.q || []).push(arguments)
	};
	h._hjSettings = {
		hjid: 1897496,
		hjsv: 6
	};
	a = o.getElementsByTagName('head')[0];
	r = o.createElement('script');
	r.async = 1;
	r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
	a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');