import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App.js';

test('renders component', async () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello!')).toBeInTheDocument();
});
