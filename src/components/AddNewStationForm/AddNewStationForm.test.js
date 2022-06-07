import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AddNewStationForm } from './AddNewStationForm';
import { StationsContextProvider } from '../../context/StationsContext';

function renderComponent() {
  return render(
    <StationsContextProvider>
      <AddNewStationForm />
    </StationsContextProvider>
  );
}

test('Component renders proprtly - if so, should have a form', () => {
  renderComponent();
  expect(screen.getByTestId('add-new-station-form')).toBeInTheDocument();
});

test('Label should be hidden when input is not empty', async () => {
  renderComponent();
  const nameInput = screen.getByRole('textbox', {
    name: 'stationName',
  });

  fireEvent.change(nameInput, { target: { value: 'Zosia' } });
  expect(nameInput.value).toBe('Zosia');

  await waitFor(() => {
    const label = screen.getByTestId('labelTest');
    expect(label).toHaveAttribute('hidden');
  });
});

test('User tries to submit an empty form', async () => {
  renderComponent();
  const submitButton = screen.getByRole('button', { name: 'Save' });
  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(screen.getAllByText('required')).toBeTruthy();
  });
});
