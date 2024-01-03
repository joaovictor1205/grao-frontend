import { Card } from 'antd';

type RestaurantProps = {
    name: string;
    description: string;
    location: string;
    id: string;
}

function RestaurantCard(props: RestaurantProps) {
  const {
    name, description, location, id,
  } = props;

  return (
    <Card title={name} extra={<a href={`/details/${id}`}> Ver </a>} style={{ width: 250 }}>
      <h1>{description}</h1>
      <h1>{location}</h1>
    </Card>
  );
}

export default RestaurantCard;
