import { render, waitFor } from '@testing-library/react';
import RestaurantDetail from '.';
import api from '../../api';
import response from './__mocks__/response.json';

jest.mock('../../api');

describe('RestaurantDetail | component | unit test', () => {
  beforeEach(() => {
    (api.getRestaurantDetail as jest.Mock).mockResolvedValue(response);
  });

  test('showing data according mock', async () => {
    const { getByText } = render(<RestaurantDetail />);

    await waitFor(() => {
      expect(getByText('Cantina')).toBeVisible();
      expect(getByText('Restaurante brasileiro')).toBeVisible();
      expect(getByText('Rua Teste, número 123')).toBeVisible();
      expect(getByText('(34) 1234-5678')).toBeVisible();

      expect(getByText('Pratos')).toBeVisible();
      expect(getByText('Strogonoff')).toBeVisible();

      expect(getByText('Bebidas')).toBeVisible();
      expect(getByText('Coca Cola')).toBeVisible();
      expect(getByText('Água')).toBeVisible();
    });
  });
});
