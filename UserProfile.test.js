// __tests__/UserProfile.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import UserProfile from './UserProfile';
import { fetchUser } from './apiService';

jest.mock('./apiService'); // make sure this matches your import path

describe('UserProfile', () => {
  const fakeUser = { id: 1, name: 'Dinesh Kumar' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('displays loading indicator initially', () => {
    fetchUser.mockResolvedValueOnce(fakeUser);

    const { getByTestId } = render(<UserProfile userId={1} />);
    expect(getByTestId('loading')).toBeTruthy();
  });

  test('displays user data after fetch', async () => {
    fetchUser.mockResolvedValueOnce(fakeUser);

    const { getByText } = render(<UserProfile userId={1} />);

    // Wait for async updates
    await waitFor(() => {
      expect(getByText('Dinesh Kumar')).toBeTruthy();
    });
  });

  test('handles fetch error gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    fetchUser.mockRejectedValueOnce(new Error('Network error'));

    const { queryByTestId } = render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(queryByTestId('loading')).toBeNull();
    });

    expect(consoleSpy).toHaveBeenCalledWith(new Error('Network error'));
    consoleSpy.mockRestore();
  });
});