import { listarCarrosService } from "../services/carros.services";

export const listarCarrosController = async (request, response) => {
  const carros = await listarCarrosService();

  response.send(carros);
};
