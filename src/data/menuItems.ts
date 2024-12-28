export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    category: 'Rice',
    name: 'Chicken Fried Rice',
    description: 'Wok-fried rice with tender chicken, vegetables, and eggs',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    category: 'Rice',
    name: 'Vegetable Biryani',
    description: 'Aromatic basmati rice cooked with mixed vegetables and spices',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3',
    category: 'Soup',
    name: 'Mushroom Soup',
    description: 'Creamy soup made with fresh mushrooms and herbs',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }
];