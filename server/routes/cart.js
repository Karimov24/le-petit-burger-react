import { Router } from 'express';
import Cart from '../models/Cart.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const cart = new Cart({ cartId: req.body.cartId, items: req.body.items || [] });
    await cart.save();
    res.status(201).json({ cartId: cart.cartId, items: cart.items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:cartId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ cartId: req.params.cartId });
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    res.json({ cartId: cart.cartId, items: cart.items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:cartId', async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { cartId: req.params.cartId },
      { items: req.body.items },
      { new: true, upsert: true },
    );
    res.json({ cartId: cart.cartId, items: cart.items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:cartId', async (req, res) => {
  try {
    await Cart.findOneAndUpdate(
      { cartId: req.params.cartId },
      { items: [] },
    );
    res.json({ message: 'Cart cleared' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;