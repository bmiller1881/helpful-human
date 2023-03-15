import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const colorsSchema = new Schema({
  ColorHex: { type: String, required: true },
  ColorRGB: { type: String, required: true },
  ShadesHex: { type: [String], required: true },
  ShadesRGB: { type: [String], required: true },
  TintsHex: { type: [String], required: true },
  TintsRGB: { type: [String], required: true },
});

const Colors = mongoose.model('colors', colorsSchema);

export default Colors;
