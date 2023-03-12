import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timekey = 'videoplayer-current-time';

function durationSavelocalstorage({ seconds }) {
  localStorage.setItem(timekey, seconds);
}

window.addEventListener('load', newStart);

player.on('timeupdate', Throttle(durationSavelocalstorage, 1000));
function newStart() {
  if (!localStorage.getItem(timekey)) {
    return;
  }
  const currentVideoTime = localStorage.getItem(timekey);

  player.setCurrentTime(currentVideoTime ?? 0);
}
