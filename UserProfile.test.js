import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import UserProfile from './UserProfile';
import * as apiService from './apiService';

jest.mock('./apiService');

describe('UserProfile Component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading initially', () => {

    apiService.fetchUser.mockResolvedValueOnce({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });

    const { getByTestId } = render(<UserProfile userId={1} />);

    expect(getByTestId('loading')).toBeTruthy();
  });

  it('renders user data after API call', async () => {

    apiService.fetchUser.mockResolvedValueOnce({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });

    const { getByTestId } = render(<UserProfile userId={1} />);

    await waitFor(() => expect(getByTestId('username')).toBeTruthy());

    expect(getByTestId('username').props.children).toBe('John Doe');
    expect(getByTestId('email').props.children).toBe('john@example.com');
  });

  it('renders error message if API fails', async () => {

    apiService.fetchUser.mockRejectedValueOnce(new Error('Network error'));

    const { getByTestId } = render(<UserProfile userId={1} />);

    await waitFor(() => expect(getByTestId('error')).toBeTruthy());

  });

});