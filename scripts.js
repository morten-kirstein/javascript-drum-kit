window.addEventListener('keydown', function(evnt) {

		const audio = document.querySelector(`audio[data-key="${evnt.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${evnt.keyCode}"]`);
		
		if (!audio) {
			return;
		}

		key.classList.add("playing");

		audio.currentTime = 0;
		audio.play();


});
