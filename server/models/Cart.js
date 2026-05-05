import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
}, { _id: false, id: false });

const cartSchema = new mongoose.Schema({
  cartId: { type: String, required: true, unique: true },
  items: [cartItemSchema],
}, { timestamps: true });

export default mongoose.model('Cart', cartSchema);