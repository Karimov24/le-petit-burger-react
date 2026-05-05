import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);