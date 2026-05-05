import dotenv from 'dotenv';
import mongoose from 'mongoose';
import MenuItem from './models/MenuItem.js';

dotenv.config();

const menuItems = [
  { id: 1, category: 'burgers', name: 'Classic Smash Burger', desc: 'Juicy beef patty, cheddar, pickles & special sauce', price: 9.99, image: '/gallery1.jpg' },
  { id: 2, category: 'burgers', name: 'BBQ Bacon Burger', desc: 'Smoky BBQ, crispy bacon, caramelised onion', price: 12.49, image: '/gallery2.jpg' },
  { id: 3, category: 'burgers', name: 'Veggie Delight', desc: 'Black bean patty, avocado, fresh lettuce & tomato', price: 10.49, image: '/gallery3.jpg' },
  { id: 4, category: 'burgers', name: 'Spicy Habanero', desc: 'Double beef, habanero sauce, jalapeños & pepper jack', price: 13.99, image: '/gallery4.jpg' },
  { id: 5, category: 'sides', name: 'Crispy Fries', desc: 'Golden shoestring fries with sea salt', price: 3.99, image: '/fries.jpg' },
  { id: 6, category: 'sides', name: 'Onion Rings', desc: 'Beer-battered onion rings, served with dip', price: 4.49, image: '/onion-rings.jpg' },
  { id: 7, category: 'sides', name: 'Garden Salad', desc: 'Mixed greens, cherry tomatoes, vinaigrette', price: 5.99, image: '/salad.jpg' },
  { id: 8, category: 'drinks', name: 'Fountain Soda', desc: 'Coke, Diet Coke, Sprite, Fanta (large)', price: 2.49, image: '/soda.jpg' },
  { id: 9, category: 'drinks', name: 'Fresh Lemonade', desc: 'Hand-squeezed lemon, honey & mint', price: 3.99, image: '/fresh-lemonade.jpg' },
  { id: 10, category: 'drinks', name: 'Iced Coffee', desc: 'Cold-brew espresso over ice with oat milk', price: 4.49, image: '/iced-coffee.jpg' },
  { id: 11, category: 'desserts', name: 'Vanilla Soft Serve', desc: 'Classic creamy cone or cup', price: 2.99, image: '/vanilla-soft-serve.jpg' },
  { id: 12, category: 'desserts', name: 'Cheesecake Slice', desc: 'New York style with strawberry coulis', price: 5.49, image: '/cheesecake-slice.jpg' },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(
      menuItems.map(({ id, ...rest }) => rest)
    );
    console.log(`Seeded ${menuItems.length} menu items`);
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();