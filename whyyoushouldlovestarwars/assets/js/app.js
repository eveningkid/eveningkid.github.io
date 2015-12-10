/*
	Why You Should Love Star Wars
*/

var reason = getReason();

document.querySelector('#wrapper').style.height = window.innerHeight + 'px';

function getReason () {
	return reasons[
		Math.round(Math.random() * (reasons.length - 1))
	];
}

function gimme (lazyload, first) {

	if (reasons.length) {

		var main      = document.querySelector('#main'),
			container = document.querySelector('#reason-view');

		if (!lazyload) {
			if (!first)	reason = getReason();

			main.style.display = 'none';
			container.style.display = 'block';
		}

		container.querySelector('img').src = reason.img;
		container.querySelector('p').innerText = reason.text;

	} else {
		console.info("Oh, apparently, the reasons are not loaded yet. Please, keep waiting.");
	}

}

gimme(true, true);