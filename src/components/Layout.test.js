import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';
import Content from '../containers/Content';

test('if layout component renders properly', () => {
  render(<Layout />);
  const divTested = screen.getByTestId('layout');
  expect(divTested).toBeInTheDocument();
});

test('if layout component renders the content properly', () => {
  render(
    <Layout>
      <Content />
    </Layout>
  );
  const divTested = screen.getByTestId('content');
  expect(divTested).toBeInTheDocument();
});
