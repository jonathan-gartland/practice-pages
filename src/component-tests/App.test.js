import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import AppContainer from '../components/AppContainer';
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
});
