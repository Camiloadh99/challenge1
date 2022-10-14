export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  cart: Cart[];
}
export const CartEmptyState: CartItem = {
  cart: [],
};
