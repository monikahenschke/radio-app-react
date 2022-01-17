import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import getAudioManager from './audio-manager';

test('Check if getAudioManager() has been called twice, is still the same instance of class', () => {
  const first = getAudioManager();
  const second = getAudioManager();

  expect(first === second).toBeTruthy();
});

test('Check if getAudioManager() has been called with no args then play() returns undefined ', async () => {
  const instanceOfAudioManager = getAudioManager();
  const playMethod = await instanceOfAudioManager.play();

  expect(playMethod).toBeUndefined();
});

test('Check if getAudioManager() has been called with the argument, then Audio object is playing ', async () => {
  const instanceOfAudioManager = getAudioManager(
    'http://icepool.silvacast.com/COUNTRY108.mp3'
  );
  await instanceOfAudioManager.play();

  expect(instanceOfAudioManager.audio.paused).toBeFalsy();
});

test('Check if getAudioManager() has been called with no argument, then Audio object is not playing ', async () => {
  const instanceOfAudioManager = getAudioManager();
  await instanceOfAudioManager.play();

  expect(instanceOfAudioManager.audio.paused).toBeTruthy();
});
