import React from 'react';
import { render } from '@testing-library/react';
import Root from './Root';

describe('<Root />', () => {
  it('renders ', () => {
    const { getByText } = render(<Root />);
    const text = getByText(/light/i);
    expect(text).toBeInTheDocument();
  });
});
