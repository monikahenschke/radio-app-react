import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App.js';

jest.mock('./components/Layout', () => ({
  Layout: () => {
    return <div data-testid="layoutTest" />;
  },
}));

test('renders component', () => {
  render(<App />);
  expect(screen.getByTestId('layoutTest')).toBeInTheDocument();
});
