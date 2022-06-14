class AudioManager {
  constructor() {
    this.audio = new Audio();
  }

  play() {
    if (!this.audio.src) {
      return;
    }
    return this.audio.play().catch((error) => {
      console.error(`Error has occured while trying to play!`);
      throw error;
    });
  }

  pause() {
    this.audio.pause();
  }

  select(url) {
    this.setNewStation(url);
    this.play();
  }

  setNewStation(url) {
    if (!url) {
      throw new Error('You have to pass a url as the argument!');
    }
    this.audio.setAttribute('src', url);
  }
}

let audioManagerInstance = null;
export const getAudioManager = () => {
  return (audioManagerInstance ??= new AudioManager());
};
