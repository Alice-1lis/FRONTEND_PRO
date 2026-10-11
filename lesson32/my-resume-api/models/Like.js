import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  cardId: { type: String, required: true, unique: true },
  count: { type: Number, default: 0, min: 0 },
});

export default mongoose.model("Like", likeSchema);