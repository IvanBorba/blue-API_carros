import express from "express";
import { listarCarrosController } from "../controllers/carros.controllers";

const carrosRouter = express.Router();

carrosRouter.get("", listarCarrosController);

export default carrosRouter;
