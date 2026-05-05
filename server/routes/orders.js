import { Router } from 'express';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { items, totalPrice } = req.body;
    const order = new Order({ items, totalPrice });
    await order.save();

    // Clear the cart after placing the order
    if (req.body.cartId) {
      await Cart.findOneAndUpdate({ cartId: req.body.cartId }, { items: [] });
    }

    res.status(201).json({ orderId: order._id, status: order.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true },
    );
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;