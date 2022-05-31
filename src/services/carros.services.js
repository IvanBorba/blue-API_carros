import Carro from "../models/carros.model";

export const listarCarrosService = async () => {
  const carros = await Carro.find();

  return carros;
};
