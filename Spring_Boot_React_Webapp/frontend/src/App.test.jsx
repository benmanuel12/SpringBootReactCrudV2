import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import App from './App';

// Stop the list page from calling the real backend
vi.mock('./service/UnitDataService', () => ({
  default: { retrieveAllUnits: () => Promise.resolve({ data: [] }) }
}));

it('renders without crashing', async () => {
  render(<App />);
  expect(await screen.findByText('Unit Tracker')).toBeTruthy();
});
