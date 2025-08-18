import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/layout/Header';

describe('Theme toggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    // Ensure system preference is light for predictable tests
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('toggles dark class on documentElement and saves to localStorage', () => {
    render(<Header />);

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();

    // initial should be light
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // click to enable dark
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('work-exp-theme')).toBe('dark');

    // click to disable
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('work-exp-theme')).toBe('light');
  });
});
