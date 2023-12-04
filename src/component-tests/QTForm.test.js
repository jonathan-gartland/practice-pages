import React from 'react';
import { render, screen } from '@testing-library/react';
import QTForm from '../components/QTForm';

describe('Tests for QuantiTray MPN Lookup', () => {
  test('Open form, validate some elements', async () => {
    render(<QTForm />);
    const headerLabel = screen.getByText(/QuantiTray®/i);
    expect(headerLabel).toBeInTheDocument();

    const element = screen.getByTestId('qt-input-dataid');
    expect(element).toHaveAttribute('name', 'QTinput');

    const checkVal = screen.getByTestId('qt-mpn-val').textContent.split(':')[1];
    expect(parseInt(checkVal)).toEqual(0);
  });

  test('The links', async () => {
    render(<QTForm />);
    const headerLabel = screen.getByText(/QuantiTray®/i);
    expect(headerLabel).toBeInTheDocument();
  });

  test('Some different values', async () => {
    render(<QTForm />);
    const headerLabel = screen.getByText(/QuantiTray®/i);
    expect(headerLabel).toBeInTheDocument();
  });
});
