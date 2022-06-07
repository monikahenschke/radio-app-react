import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { AppWrapper } from './AppWrapper';
import Content from '../Content/Content';
import { StationsContextProvider } from '../../context/StationsContext';

const radioStationsArray = [
  {
    id: 'cat-country',
    name: 'Cat County 98.1',
    link: 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac',
  },
  {
    id: 'americas-country',
    name: "America's Country",
    link: 'https://ais-sa2.cdnstream1.com/1976_128.mp3',
  },
  {
    id: 'ktwb-big-country',
    name: 'KTWB Big Country 92.5',
    link: 'https://14083.live.streamtheworld.com/KTWBFMAAC.aac',
  },
  {
    id: 'country-208',
    name: 'Country 108',
    link: 'http://icepool.silvacast.com/COUNTRY108.mp3',
  },
  {
    id: 'kickin-country',
    name: "Kickin' Country 181.fm",
    link: 'https://listen.181fm.com/181-kickincountry_128k.mp3',
  },
];

test('if layout component renders properly', () => {
  render(
    <StationsContextProvider>
      <AppWrapper />
    </StationsContextProvider>
  );
  const divTested = screen.getByTestId('layout');
  expect(divTested).toBeInTheDocument();
});

test('if layout component renders the content properly', () => {
  var localStorageMock = (function () {
    var store = {};

    return {
      getItem: function (key) {
        return store[key] || null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      clear: function () {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  localStorageMock.setItem('stations', JSON.stringify(radioStationsArray));

  render(
    <StationsContextProvider>
      <AppWrapper>
        <Content />
      </AppWrapper>
    </StationsContextProvider>
  );
  const divTested = screen.getByTestId('content');
  expect(divTested).toBeInTheDocument();
});
