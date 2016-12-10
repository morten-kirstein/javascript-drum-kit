window.addEventListener('keydown', function(evnt) {

		const audio = document.querySelector(`audio[data-key="${evnt.keyCode}"]`);
		console.log(audio);

		if (!audio) {
			return;
		}

		audio.currentTime = 0;
		audio.play();
});

window.attachEvent()
