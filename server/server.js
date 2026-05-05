import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import menuRoutes from './routes/menu.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/orders.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/menu', menuRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

await connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});