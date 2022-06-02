import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StationsList from './StationsList';
const fn = jest.fn();

test('if component renders a valid HTML element', () => {
  const radioStationsArray = [
    {
      id: 123,
      name: 'Cat Country',
      link: 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac',
    },
  ];
  render(<StationsList stations={radioStationsArray} handleSelect={fn} />);
  expect(screen.getByTestId('stationsList')).toBeInTheDocument();
});

test('if component render an <ul> element, when array is empty', () => {
  const array = [];
  console.error = jest.fn();
  render(<StationsList stations={array} handleSelect={fn}></StationsList>);
  expect(screen.getByTestId('stationsList')).toBeInTheDocument();
});
