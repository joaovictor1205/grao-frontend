import { render, waitFor } from '@testing-library/react';
import RestaurantList from '.';
import api from '../../api';
import response from './__mocks__/response.json';

jest.mock('../../api');

describe('RestaurantList | component | unit test', () => {
  beforeEach(() => {
    (api.getRestaurants as jest.Mock).mockResolvedValue(response);
  });

  test('showing data according mock', async () => {
    const { getByText } = render(<RestaurantList />);

    await waitFor(() => {
      expect(getByText('Cantina')).toBeVisible();
      expect(getByText('Self service')).toBeVisible();
      expect(getByText('Outback')).toBeVisible();
      expect(getByText('Almoço grátis')).toBeVisible();
    });
  });
});
