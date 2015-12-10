var reasons = [
	{ 
		img: 'http://i.imgur.com/EF7cZIG.gif', 
		text: 'Chewbacca is cool. Seriously, look at his bright hair.'
	},{
		img: 'https://media.giphy.com/media/muVfdK4fmamek/giphy.gif',
		text: "even your dog is in. You can't deny anymore."
	},{
		img: "https://media.giphy.com/media/10QbzBy3KKAw36/giphy.gif",
		text: "moustache. Yes, just because of it."
	},{
		img: "https://media.giphy.com/media/Um4fcXY6FThO8/giphy.gif",
		text: "Obama said so. I swear it isn't a montage."
	},{
		img: "https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif",
		text: "jedi cats are the future. Period."
	},{
		img: "https://media.giphy.com/media/K9yzeKyvvva9i/giphy.gif",
		text: "sometimes Vader will make you smile. At least, after what he became."
	},{
		img: "https://media.giphy.com/media/YjCNKPkea0QjS/giphy.gif",
		text: "you'll make new friends and...wait, wait, how cute is that? I'm sure it melted your heart, don't lie to me."
	}
];

for (var i = 0, l = reasons.length; i < l; ++i) {
	reasons[i].text = "Because " + reasons[i].text;
}