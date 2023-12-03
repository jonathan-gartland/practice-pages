import React from 'react';
import { render, screen } from '@testing-library/react';
import QT2KForm from '../components/QT2KForm';

test('QT2KForm components', async () => {
  render(<QT2KForm />);
  const headerLabel = screen.getByText(/QuantiTray2000®/i);
  expect(headerLabel).toBeInTheDocument();
});
