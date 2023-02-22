import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {

  it('Renders app name', () => {
    // ARRANGE
    render(<Button label="click me!!!" />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('button')
    ).toHaveTextContent('click me!!!');
  });

});
