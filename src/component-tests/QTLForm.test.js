import React from 'react';
import { render, screen } from '@testing-library/react';
import QTLForm from '../components/QTLForm';

test('QTLForm components', async () => {
  render(<QTLForm />);
  const headerLabel = await screen.getByText(/QuantiTray® Legiolert/i);
  expect(headerLabel).toBeInTheDocument();
});
