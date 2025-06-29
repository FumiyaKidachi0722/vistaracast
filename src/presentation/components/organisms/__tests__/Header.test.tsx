import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '../Header';

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /videos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /live/i })).toBeInTheDocument();
  });
});
