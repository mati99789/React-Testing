import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './Title';

describe('Title', () => {
  it('should render title', function () {
    render(<Title title="Table" />);

    const title = screen.getByText('Table');

    expect(title).toBeInTheDocument();
  });

  it('throw error if title not found', function () {
    render(<Title title="Table" />);

    const title = screen.queryByText('Heading');

    expect(title).not.toBeInTheDocument();
  });
});
