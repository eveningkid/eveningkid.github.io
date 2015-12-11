/*
	Why You Should Love Star Wars
*/

var reason = getReason();

document.querySelector('#wrapper').style.height = window.innerHeight + 'px';

/**
 * Return a reason
 * @return {object} val - reason object
 */

function getReason () {

	var i   = Math.round(Math.random() * (reasons.length - 1)),
	    val = reasons[i];

	reasons.splice(i, 1);

	return val || {
		img: "https://media.giphy.com/media/pDTCmXCVXoMCY/giphy.gif",
		text: "Because there is no other reason for now. Why don't give yours on Github?"
	};

}

/**
 * Display one reason (text and picture)
 * @param {boolean} lazyload - true, if we lazyload the picture 
 * @param {boolean} first - true, if first call
 */

function gimme (lazyload, first) {

	var main      = document.querySelector('#main'),
	    container = document.querySelector('#reason-view');

	if (!lazyload) {
		if (!first)	reason = getReason();

		main.style.display = 'none';
		container.style.display = 'block';
	}

	container.querySelector('img').src = reason.img;
	container.querySelector('p').innerHTML = reason.text;

}

gimme(true, true);
