import '../css/main.scss';
import Sound from './sound.mjs';
require.context('../images', false, /\.(png|jpg)$/);
require.context('../sounds', false, /\.(wav)$/);

function init() {
  const sound = new Sound();
  sound.bindSoundEvent();
  sound.bindTransitionendEvent();
}

function preventDefault(event) {
  event.preventDefault();
}

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('mousedown', preventDefault);