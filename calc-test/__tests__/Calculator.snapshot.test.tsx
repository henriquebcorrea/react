import React from 'react';
import { render } from '@testing-library/react-native';
import Calculator from '../src/components/Calculator';

test('snapshot Calculator', () => {
  const tree = render(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});