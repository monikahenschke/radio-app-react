import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';
import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { ReactComponent as IconLarge } from '../images/play-large.svg';

test('check if any text is present (it should not) if you pass the iconOnly and icon props.', () => {
  const clickPlay = jest.fn();
  render(
    <Button onClick={clickPlay} icon={IconLarge} iconOnly children="Play" />
  );
  const icon = screen.queryByTestId('buttonIcon');
  expect(icon).toBeInTheDocument();

  const textButton = screen.queryByText('Play');
  expect(textButton).not.toBeInTheDocument();
});

test('check if component throws error if you pass the iconOnly but omit the icon porp ', () => {
  const clickPlay = jest.fn();
  expect(() =>
    render(<Button onClick={clickPlay} iconOnly children="Play" />)
  ).toThrow(
    'You cannot use iconOnly and icon separately. You have to pass these props together.'
  );
});

test('check if onClick function is actually called when user clicks the button', () => {
  const clickPlay = jest.fn();
  render(<Button onClick={clickPlay} children="Play" />);
  fireEvent.click(screen.getByText(/play/i));
  expect(clickPlay).toHaveBeenCalled();
});
