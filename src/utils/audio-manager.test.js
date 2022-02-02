import '@testing-library/jest-dom/extend-expect';
let getAudioManager;
let playMock;

beforeEach(() => {
  jest.resetModules();
  if (typeof playMock !== 'function') {
    playMock = jest.fn().mockResolvedValue();
  }
  global.Audio = jest.fn().mockImplementation(function (url) {
    this.src = url;
    this.play = playMock;
    this.setAttribute = jest.fn();
  });

  import('./audio-manager').then((module) => {
    getAudioManager = module.default;
  });
});

afterEach(() => {
  playMock = null;
});

test('if getAudioManager() has been called twice, should be still the same instance of class', () => {
  const first = getAudioManager();
  const second = getAudioManager();
  expect(first === second).toBeTruthy();
});

test('if getAudioManager() has been called with no args then play() shouldnt be called', async () => {
  const instanceOfAudioManager = getAudioManager();
  await instanceOfAudioManager.play();

  expect(playMock).not.toHaveBeenCalled();
});

test(' if getAudioManager() has been called with the argument, then play() should be called', async () => {
  const instanceOfAudioManager = getAudioManager(
    'http://icepool.silvacast.com/COUNTRY108.mp3'
  );
  await instanceOfAudioManager.play();
  expect(playMock).toHaveBeenCalled();
});

test('play() should throw ', async () => {
  playMock = jest.fn().mockRejectedValue(new Error());
  console.error = jest.fn();

  const instanceOfAudioManager = getAudioManager(
    'http://icepool.silvacast.com/COUNTRY108.mp3'
  );
  await expect(instanceOfAudioManager.play()).rejects.toThrow();
});

test('select() with no args passed should throw', () => {
  const instanceOfAudioManager = getAudioManager();
  expect(instanceOfAudioManager.select).toThrow();
});
