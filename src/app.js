import express from "express";
import cors from "cors";
import carrosRouter from "./routes/carros.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/carros", carrosRouter);

export default app;
