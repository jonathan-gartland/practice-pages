import React from 'react';
import { render, screen } from '@testing-library/react';
import QTForm from '../components/QTForm';

test('QTForm components', async () => {
  render(<QTForm />);
  const headerLabel = await screen.getByText(/QuantiTray®/i);
  expect(headerLabel).toBeInTheDocument();

  const element = screen.getByTestId('qt-input-dataid');
  expect(element).toHaveAttribute('name', 'QTinput');

  const checkVal = screen.getByTestId('qt-mpn-val').textContent.split(':')[1];
  expect(parseInt(checkVal)).toEqual(0);
});
