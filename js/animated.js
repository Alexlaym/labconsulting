
$(function () {
	$(window).scroll(function () {
		$('.quality-top').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 850) {
				$(this).addClass("fadeInUpBig");
			}
		});
	});
	$(window).scroll(function () {
		$('.quality-left').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 850) {
				$(this).addClass("fadeInLeftBig");
			}
		});
	});
	$(window).scroll(function () {
		$('.quality-right').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 850) {
				$(this).addClass("fadeInRightBig");
			}
		});
	});
})