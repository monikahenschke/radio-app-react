import { render, screen } from '@testing-library/react';
import ModalDefault from './Modal';
import { StationsContext } from '../../context/StationsContext';

test('if modal component renders properly', () => {
  render(
    <StationsContext.Provider value={{ isModalOpen: true }}>
      <ModalDefault>
        <p>Hello!</p>
        <a href="test">test</a>
      </ModalDefault>
    </StationsContext.Provider>
  );

  expect(screen.getByText('Hello!')).toBeTruthy();
});

test('focus trap throws error when is no one focusable child inside the modal', () => {
  console.error = jest.fn();
  expect(() =>
    render(
      <StationsContext.Provider value={{ isModalOpen: true }}>
        <ModalDefault>
          <p>Hello!</p>
        </ModalDefault>
      </StationsContext.Provider>
    )
  ).toThrow();
});
