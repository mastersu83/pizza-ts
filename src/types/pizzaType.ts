export type PizzaType = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  count: number;
  totalPrice: number;
};
export type BasketPizzaType = {
  id: number;
  imageUrl: string;
  name: string;
  types: string;
  sizes: number;
  price: number;
  category: number;
  rating: number;
  count: number;
  totalPrice: number;
};
