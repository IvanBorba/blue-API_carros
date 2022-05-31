import mongoose from "mongoose";

const carrosSchema = new mongoose.Schema(
  {
    placa: { type: String, required: true },
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    ano: { type: Number, required: true },
  },
  { versionKey: false }
);

const Carro = mongoose.model("carros", carrosSchema);

export default Carro;
