import { render, screen } from '@testing-library/react';
import ModalDefault from './Modal';

test('if modal component renders properly', () => {
  const isModalOpen = true;

  render(
    <ModalDefault isModalOpen={isModalOpen} buttonName="click">
      <p>Hello!</p>
      <a href="test">test</a>
    </ModalDefault>
  );

  expect(screen.getByText('Hello!')).toBeTruthy();
});

test('focus trap throws error when is no one focusable child inside the modal', () => {
  const isModalOpen = true;
  expect(() =>
    render(
      <ModalDefault isModalOpen={isModalOpen} buttonName="click">
        <p>Hello!</p>
      </ModalDefault>
    )
  ).toThrow();
});
