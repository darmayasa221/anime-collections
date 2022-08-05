import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Dashboard from '../Dashboard';

describe('Dasboard Pages', () => {
  it('should render dashboard correctly', () => {
    render(<Dashboard />);
    const text = screen.getByText('Dashboard');
    expect(text).toBeInTheDocument();
  });
});
