// @flow
import React from 'react';
import { render } from '@testing-library/react';
import SegmentedControl from './SegmentedControl.js';

test('SegmentedControl handles click', () => {
  const mockOnChange = jest.fn();
  const { getByText } = render(
    <SegmentedControl
      items={['Item1', 'Item2']}
      selectedItemIndex={0}
      onChange={mockOnChange}
    />
  );

  getByText('Item1').click();
  expect(mockOnChange).toHaveBeenCalled();

  getByText('Item2').click();
  expect(mockOnChange).toHaveBeenCalled();
});
