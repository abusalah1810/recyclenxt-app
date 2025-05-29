import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Dense Backpack',
    category: 'Backpacks',
    price: 1499,
    description: 'Eco-friendly backpack made from recycled plastic bottles. Durable, water-resistant, and stylish for everyday use.',
    images: ['/src/assets/backpack.jpg'],
    stockStatus: 'In Stock'
  },
  {
    id: 2,
    name: 'Dense Tote Bag',
    category: 'Totes',
    price: 899,
    description: 'Spacious tote bag made from recycled materials. Perfect for shopping, beach trips, or daily commutes.',
    images: ['/src/assets/tote.jpg'],
    stockStatus: 'In Stock'
  },
  {
    id: 3,
    name: 'Laptop Sleeve',
    category: 'Laptop Sleeves',
    price: 1299,
    description: 'Protective laptop sleeve crafted from recycled plastic. Fits most 13-15 inch laptops with extra padding.',
    images: ['/src/assets/laptop_sleeve.jpg'],
    stockStatus: 'In Stock'
  },
  {
    id: 4,
    name: 'Accessory Pouch',
    category: 'Accessories',
    price: 499,
    description: 'Versatile accessory pouch for organizing small items. Made from upcycled materials with a water-resistant lining.',
    images: ['/src/assets/pouch.jpg'],
    stockStatus: 'In Stock'
  },
  {
    id: 5,
    name: 'Weekender Bag',
    category: 'Backpacks',
    price: 1899,
    description: 'Spacious weekender bag perfect for short trips. Features multiple compartments and sustainable materials.',
    images: ['/src/assets/weekender.jpg'],
    stockStatus: 'In Stock'
  },
  {
    id: 6,
    name: 'Mini Crossbody',
    category: 'Accessories',
    price: 799,
    description: 'Compact crossbody bag for essentials. Made from recycled plastic bottles with adjustable strap.',
    images: ['/src/assets/crossbody.jpg'],
    stockStatus: 'In Stock'
  },
  {
    id: 7,
    name: 'Laptop Backpack',
    category: 'Backpacks',
    price: 1699,
    description: 'Professional backpack with padded laptop compartment. Made from recycled materials with ergonomic design.',
    images: ['/src/assets/laptop_backpack.jpg'],
    stockStatus: 'In Stock'
  },
  {
    id: 8,
    name: 'Market Tote',
    category: 'Totes',
    price: 699,
    description: 'Foldable market tote that is perfect for grocery shopping. Lightweight yet durable construction from recycled fabrics.',
    images: ['/src/assets/market_tote.jpg'],
    stockStatus: 'In Stock'
  }
];

export const categories = [
  'All',
  'Backpacks',
  'Totes',
  'Laptop Sleeves',
  'Accessories'
];

export const banners = [
  {
    id: 1,
    title: 'Eco Tip',
    content: 'Reusing a single plastic bottle saves enough energy to power a 60W light bulb for 6 hours',
    backgroundColor: '#8BC34A'
  },
  {
    id: 2,
    title: 'Special Offer',
    content: 'Get 10% off on all backpacks this week! Use code ECO10',
    backgroundColor: '#03A9F4'
  },
  {
    id: 3,
    title: 'Sustainability News',
    content: 'Your donations helped recycle over 10,000 bottles last month!',
    backgroundColor: '#4CAF50'
  }
];
