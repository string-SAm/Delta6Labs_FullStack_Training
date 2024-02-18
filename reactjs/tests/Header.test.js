// Header.test.js
import React from 'react';
import { render,screen } from '@testing-library/react';
import Header from '../test-components/Header';
 
test('renders header with correct title', () => {
  const { getByText } = render(<Header title="My App" />);
  const headerElement = screen.getByText(/My App/i);
  //expect(headerElement).toBeInTheDocument();
});