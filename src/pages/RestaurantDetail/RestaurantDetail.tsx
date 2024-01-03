import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Flex } from 'antd';
import { BackwardOutlined } from '@ant-design/icons';
import { RestaurantsType } from '../../types/restaurant';
import api from '../../api';

function RestaurantDetail() {
  const { id } = useParams();

  const [data, setData] = useState<RestaurantsType>();

  useEffect(() => {
    api.getRestaurantDetail(`/details/${id}/`)
      .then((response) => setData(response))
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) return <h1>Loading</h1>;

  return (
    <Flex vertical align="start" justify="start" style={{ margin: '24px' }}>
      <Button icon={<BackwardOutlined />} type="link" href="/restaurants">Voltar para início</Button>
      <Flex vertical>

        <h1>{data.name}</h1>
        <h3>{data.description}</h3>
        <p>{data.location}</p>
        <p>{data.phoneNumber}</p>
      </Flex>

      <Flex vertical>
        <h2>Pratos</h2>
        <Flex gap="middle">
          {data.food.map((food) => (
            <Card key={food.id} style={{ width: 150 }}>
              <p>{food.name}</p>
              <p style={{ color: 'red' }}>
                R$
                {food.price}
              </p>
            </Card>
          ))}
        </Flex>
      </Flex>

      <Flex vertical>
        <h2>Bebidas</h2>
        <Flex gap="middle">
          {data.drink.map((drink) => (
            <Card key={drink.id} style={{ width: 150 }}>
              <p>{drink.name}</p>
              <p style={{ color: 'red' }}>
                R$
                {drink.price}
              </p>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default RestaurantDetail;
