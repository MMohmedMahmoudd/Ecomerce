export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  brand?: string;
  rating?: number;
  stock?: number;
  discount?: number;
  isNew?: boolean;
}

export const categories = [
  {
    id: 1,
    name: 'Clothes',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 6,
    name: 'Books',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=60',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    category: 'Clothes',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60',
    description: 'Essential cotton t-shirt perfect for everyday wear',
    brand: 'Essentials',
    rating: 4.5,
    stock: 50,
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop&q=60',
    description: 'High-quality wireless earbuds with noise cancellation',
    brand: 'SoundTech',
    rating: 4.8,
    stock: 30,
    isNew: true,
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 89.99,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60',
    description: 'Comfortable running shoes with great support',
    brand: 'SportFit',
    rating: 4.7,
    stock: 25,
  },
  {
    id: 4,
    name: 'Leather Watch',
    price: 199.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=60',
    description: 'Classic leather watch for any occasion',
    brand: 'TimeStyle',
    rating: 4.6,
    stock: 15,
    discount: 20,
  },
  {
    id: 5,
    name: 'Denim Jacket',
    price: 79.99,
    category: 'Clothes',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=60',
    description: 'Stylish denim jacket for a casual look',
    brand: 'DenimCo',
    rating: 4.4,
    stock: 20,
  },
  {
    id: 6,
    name: 'Smart Speaker',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=60',
    description: 'Voice-controlled smart speaker with premium sound',
    brand: 'TechSound',
    rating: 4.5,
    stock: 40,
    isNew: true,
  },
  {
    id: 7,
    name: 'Yoga Mat',
    price: 39.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=60',
    description: 'Premium yoga mat for comfortable practice',
    brand: 'YogaFit',
    rating: 4.6,
    stock: 35,
  },
  {
    id: 8,
    name: 'Novel Collection',
    price: 49.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=60',
    description: 'Collection of bestselling novels',
    brand: 'BookHouse',
    rating: 4.7,
    stock: 45,
  },
  {
    id: 9,
    name: 'Hiking Backpack',
    price: 89.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
    description: 'Durable hiking backpack with multiple compartments',
    brand: 'AdventurePro',
    rating: 4.8,
    stock: 20,
    discount: 15,
  },
  {
    id: 10,
    name: 'Laptop Stand',
    price: 49.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=60',
    description: 'Adjustable laptop stand for ergonomic use',
    brand: 'TechEase',
    rating: 4.4,
    stock: 30,
  },
  {
    id: 11,
    name: 'Leather Messenger Bag',
    price: 159.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
    description: 'Premium leather messenger bag for professionals',
    brand: 'LeatherCraft',
    rating: 4.9,
    stock: 15,
    isNew: true,
  },
  {
    id: 12,
    name: 'Smart Fitness Watch',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&auto=format&fit=crop&q=60',
    description: 'Advanced fitness tracker with heart rate monitoring',
    brand: 'TechFit',
    rating: 4.7,
    stock: 25,
    discount: 10,
  },
  {
    id: 13,
    name: 'Casual Sneakers',
    price: 69.99,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60',
    description: 'Comfortable casual sneakers for everyday wear',
    brand: 'UrbanWalk',
    rating: 4.5,
    stock: 40,
  },
  {
    id: 14,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=60',
    description: 'High-precision wireless gaming mouse',
    brand: 'GameTech',
    rating: 4.8,
    stock: 30,
    isNew: true,
  },
  {
    id: 15,
    name: 'Hooded Sweatshirt',
    price: 54.99,
    category: 'Clothes',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60',
    description: 'Comfortable hooded sweatshirt for casual wear',
    brand: 'UrbanStyle',
    rating: 4.6,
    stock: 35,
    discount: 25,
  },
];