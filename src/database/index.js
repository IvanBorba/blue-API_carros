import mongoose from "mongoose";

const conectarDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/carros_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Conectado");
    })
    .catch((err) => {
      console.log(`Erro na conexão com o MongoDB: ${err}`);
    });
};

export default conectarDB;
