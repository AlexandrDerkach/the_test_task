$(document).ready(function () {
	var touch = $(".touch-menu");
	var menu = $(".navbar-top");
	var userpanel = $(".top-user-panel");
	var toppanel = $(".top-cont");
	$(touch).on('click', function (e) {
		e.preventDefault();
		menu.slideToggle(0);
		userpanel.slideToggle(0);
		toppanel.slideToggle(0, function () {
			toppanel.toggleClass('top-cont-highter');
			$(this).toggleClass('expand').css('display', '');
			menu.toggleClass('expand').css('display', '');
			userpanel.toggleClass('expand').css('display', '');
		})
	})
	$(window).resize(function () {
		var wid = $(window).width();
		if (wid >= 500 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
		if (wid >= 500 && userpanel.is(':hidden')) {
			userpanel.removeAttr('style');
		}
		if (wid >= 500 && userpanel.is(':hidden')) {
			toppanel.removeAttr('style');
		}
	})
})