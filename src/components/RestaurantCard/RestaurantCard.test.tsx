import { render } from '@testing-library/react';
import RestaurantCard from '.';

describe('RestaurantCard | component | unit test', () => {
  test('if component is showing the attributes', () => {
    const { getByText } = render(<RestaurantCard
      description="description test"
      id="1"
      location="location test"
      name="name test"
      key="1"
    />);

    expect(getByText('description test')).toBeVisible();
    expect(getByText('location test')).toBeVisible();
    expect(getByText('name test')).toBeVisible();
  });

  test('if the card has link to detail', () => {
    const { getByRole } = render(<RestaurantCard
      description="description test"
      id="1"
      location="location test"
      name="name test"
      key="1"
    />);

    expect(getByRole('link', { name: 'Ver' })).toHaveAttribute('href', '/details/1');
  });
});
