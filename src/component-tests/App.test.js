// noinspection JSCheckFunctionSignatures

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import AppContainer from '../components/AppContainer';
import AboutForm from '../components/AboutForm';
import QTForm from '../components/QTForm';
describe('Tests for the App component', () => {
  test('renders App', async () => {
    render(<App />);
    const headerElement = await screen.getByText(/MPN Lookup/i);
    expect(headerElement).toBeInTheDocument();
    expect(
      await screen.getByText(
        /Hope this is useful to the three of you that need it./i
      )
    );
    expect(
      await screen.getByLabelText(/QuantiTray® Legiolert/i)
    ).toBeInTheDocument();
  });

  test('verify contains the about text section', async () => {
    render(<AppContainer />);
    const headerElement = await screen.getByText(/MPN Lookup/i);
    expect(headerElement).toBeInTheDocument();
    expect(
      await screen.getByText(
        /Hope this is useful to the three of you that need it./i
      )
    );
    expect(
      await screen.getByLabelText(/QuantiTray® Legiolert/i)
    ).toBeInTheDocument();
  });

  test('testing tests', async () => {
    expect(1).toBe(1);
    const { queryByText } = render(<AboutForm />);
    expect(
      queryByText(/Hope this is useful to the three of you that need it./i)
    ).not.toBeNull();
  });

  test('testing tests2', async () => {
    expect(1).toBe(1);
    const { queryByText } = render(<QTForm />);
    expect(queryByText(/MPN: 0/i)).not.toBeNull();
    expect(queryByText(/Low: <1.0 -- High: 3.7/i)).not.toBeNull();
  });
});
