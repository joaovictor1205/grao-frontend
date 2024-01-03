type DrinkType = {
    id: string;
    name: string;
    description: string;
    price: number;
}

type FoodType = {
    id: string;
    name: string;
    description: string;
    price: number;
}

export type RestaurantsType = {
    id: string;
    name: string;
    description: string;
    location: string;
    phoneNumber: string;
    drink: DrinkType[];
    food: FoodType[];
}
