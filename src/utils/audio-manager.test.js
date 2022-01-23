import '@testing-library/jest-dom/extend-expect';
const playMock = jest.fn();
Audio.prototype.play = async () => playMock();
let getAudioManager;

beforeEach(() => {
  jest.resetModules();
  getAudioManager = require('./audio-manager').default;
});

test('Check if getAudioManager() has been called twice, is still the same instance of class', () => {
  const first = getAudioManager();
  const second = getAudioManager();
  expect(first === second).toBeTruthy();
});

test('Check if getAudioManager() has been called with no args then play() returns undefined', async () => {
  const instanceOfAudioManager = getAudioManager();
  await instanceOfAudioManager.play();

  expect(playMock).not.toHaveBeenCalled();
});

test('Check if getAudioManager() has been called with the argument, then play() is called', async () => {
  const instanceOfAudioManager = getAudioManager(
    'http://icepool.silvacast.com/COUNTRY108.mp3'
  );
  await instanceOfAudioManager.play();
  expect(playMock).toHaveBeenCalled();
});

test('What if play() throw exception', async () => {
  Audio.prototype.play = async () => {
    throw new Error();
  };

  const instanceOfAudioManager = getAudioManager(
    'http://icepool.silvacast.com/COUNTRY108.mp3'
  );
  await expect(instanceOfAudioManager.play()).rejects.toThrow();
});

test('Calling select() with no url passed', () => {
  const instanceOfAudioManager = getAudioManager();
  expect(instanceOfAudioManager.select).toThrow();
});
