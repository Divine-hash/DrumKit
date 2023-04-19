export default class Sound {
  constructor() {
    this.keys = document.querySelector('.container');
    this.audios = document.querySelectorAll('audio');
  }

  bindSoundEvent() {
    this.keys.addEventListener('click', (event) => {
      const target = event.target.closest('.box');
      if (!target) return;
      target.classList.add('playing');
      const id = target.dataset.id;

      this.audios.forEach((audio) => {
        if (audio.dataset.id == id) {
          audio.currentTime = 0;
          audio.play();
        }
      });
    });
  }

  bindTransitionendEvent() {
    this.keys.addEventListener('transitionend', (event) => {
      event.target.classList.remove('playing');
    })
  }
}