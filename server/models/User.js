import mongoose from "mongoose";

const {Schema, Types} = mongoose;

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  cart: [{type: Types.ObjectId, ref: 'Goods'}]
})

export default mongoose.model('User', schema);