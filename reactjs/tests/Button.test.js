// Button.test.js
import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Button from '../test-components/Button';
 
test('calls onClick when button is clicked', () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(<Button onClick={mockOnClick} label="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
 
  fireEvent.click(buttonElement);
 
  expect(mockOnClick).toHaveBeenCalled();
});


//Snapshots Testing Button

// import React from 'react';
// import renderer from 'react-test-renderer';
// import Button from '../components/Button'
 
 
 
// test('Button snapshot', () => {
//   const component = renderer.create(<Button label="Click me" />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });