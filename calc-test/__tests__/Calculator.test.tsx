import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Calculator from '../src/components/Calculator';

test('2 + 3 = 5 via UI', () => {
  const { getByTestId, getByText } = render(<Calculator />);
  
  fireEvent.changeText(getByTestId('input-a'), '2');
  fireEvent.changeText(getByTestId('input-b'), '3');
  fireEvent.press(getByText('+'));
  
  expect(getByTestId('result')).toHaveTextContent('5');
});

test('10 - 4 = 6 via UI', () => {
  const { getByTestId, getByText } = render(<Calculator />);
  
  fireEvent.changeText(getByTestId('input-a'), '10');
  fireEvent.changeText(getByTestId('input-b'), '4');
  fireEvent.press(getByText('-'));
  
  expect(getByTestId('result')).toHaveTextContent('6');
});

test('3 × 4 = 12 via UI', () => {
  const { getByTestId, getByText } = render(<Calculator />);
  
  fireEvent.changeText(getByTestId('input-a'), '3');
  fireEvent.changeText(getByTestId('input-b'), '4');
  fireEvent.press(getByText('×'));
  
  expect(getByTestId('result')).toHaveTextContent('12');
});

test('division by zero shows error', () => {
  const { getByTestId, getByText } = render(<Calculator />);
  
  fireEvent.changeText(getByTestId('input-a'), '10');
  fireEvent.changeText(getByTestId('input-b'), '0');
  fireEvent.press(getByText('÷'));
  
  expect(getByTestId('result')).toHaveTextContent('Divisão por zero');
});