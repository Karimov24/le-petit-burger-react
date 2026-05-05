import { Router } from 'express';
import MenuItem from '../models/MenuItem.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:category', async (req, res) => {
  try {
    const items = await MenuItem.find({ category: req.params.category });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;