import { setBasicRadioStationsToLS } from './setBasicRadioStations';
let data;

beforeAll(() => {
  global.localStorage.setItem = jest.fn((key, value) => {
    data[key] = value;
  });
  global.localStorage.getItem = jest.fn((key) => {
    return data[key];
  });
});

test('if localstorage is set correctly', () => {
  setBasicRadioStationsToLS();
  const result = localStorage.getItem('stations');
  expect(result).not.toBeNull();
});
