import React from 'react';
import { render } from '@testing-library/react';
import Root from './Root';

describe('<Root />', () => {
  it('renders ', () => {
    const { getByText } = render(<Root />);
    const text = getByText(/weare/i);
    expect(text).toBeInTheDocument();
  });
});
