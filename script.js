$(document).ready(function () {
	$('#aboutNav').click(function () {
		$('html, body').animate({scrollTop: $('#about').offset().top}, 1000);
	});
	$('#projectsNav').click(function () {
		$('html, body').animate({scrollTop: $('#projects').offset().top}, 1000);
	});
	$('#contactNav').click(function () {
		$('html, body').animate({scrollTop: $('#contact').offset().top}, 1000);
	});

	$(document).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#arrow-up').show(1000);
		} else {
			$('#arrow-up').hide(1000);
		}
	});

	$('#arrow-up').click(function () {
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	$('.flip-container .flipper').click(function () {
		$(this).closest('.flip-container').toggleClass('hover');
		$(this).css('transform, rotateY(180deg)');
	});

	AOS.init({
		easing: 'ease',
		duration: 1800,
	});

	var TxtRotate = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		var that = this;
		var delta = 300 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};
	window.onload = function () {
		var elements = document.getElementsByClassName('txt-rotate');
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-rotate');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}
		var css = document.createElement('style');
		css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
		document.body.appendChild(css);
	};
});
