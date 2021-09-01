$(document).ready(function () {
	// Nav re-position
	$('#aboutNav').click(function () {
		$('html, body').animate({scrollTop: $('#about').offset().top}, 1000);
	});
	$('#projectsNav').click(function () {
		$('html, body').animate({scrollTop: $('#projects').offset().top}, 1000);
	});

	$(document).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#arrow-up').show(1000);
		} else {
			$('#arrow-up').hide(1000);
		}
	});

	// Top re-position
	$('#arrow-up').click(function () {
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	// AOS
	AOS.init({
		easing: 'ease',
		duration: 1800,
	});

	const TxtRotate = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	// Typing text
	TxtRotate.prototype.tick = function () {
		const i = this.loopNum % this.toRotate.length;
		const fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		const that = this;
		let delta = 300 - Math.random() * 100;

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

	const elements = document.getElementsByClassName('txt-rotate');
	for (let i = 0; i < elements.length; i++) {
		const toRotate = elements[i].getAttribute('data-rotate');
		const period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	const css = document.createElement('style');
	css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
	document.body.appendChild(css);
});
