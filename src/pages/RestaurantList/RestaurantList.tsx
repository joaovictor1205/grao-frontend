import { useEffect, useState } from 'react';
import { Flex, Input } from 'antd';
import api from '../../api';
import { RestaurantsType } from '../../types/restaurant';
import RestaurantCard from '../../components';

function RestaurantList() {
  const [data, setData] = useState<RestaurantsType[]>();
  const [filteredData, setFilteredData] = useState<RestaurantsType[]>();

  useEffect(() => {
    api.getRestaurants('/restaurants/')
      .then((response) => setData(response))
      .catch((err) => console.log(err));
  }, []);

  const filterByName = (name: string) => {
    if (!data) return;
    const updatedList = data.filter((item) => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    setFilteredData(updatedList);
  };

  const displayedRestaurants = (listOfItems: RestaurantsType[]) => (
    listOfItems.map((restaurant) => (
      <RestaurantCard
        description={restaurant.description}
        location={restaurant.location}
        name={restaurant.name}
        key={restaurant.id}
        id={restaurant.id}
      />
    ))
  );

  if (!data) return <h1>loading</h1>;

  return (
    <Flex vertical style={{ padding: '32px' }}>
      <h1>Restaurantes</h1>

      <Input.Search
        placeholder="Buscar restaurante"
        type="text"
        onChange={(e) => filterByName(e.target.value)}
        style={{ marginBottom: '16px', width: '30%' }}
      />

      <Flex gap="middle" align="center" wrap="wrap">
        {displayedRestaurants(!filteredData ? data : filteredData)}
      </Flex>
    </Flex>
  );
}

export default RestaurantList;
