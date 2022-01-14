import { func } from 'prop-types';

class AudioManager {
  constructor(url) {
    this.audio = new Audio(url);
    this.setNewStation(url);
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  select(url) {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.setNewStation(url);
    this.play();
  }

  setNewStation(url) {
    this.audio.setAttribute('src', url);
  }
}

let audioManagerInstance = null;
const getInstance = (url) => {
  return (audioManagerInstance ??= new AudioManager(url));
};

export default getInstance;
