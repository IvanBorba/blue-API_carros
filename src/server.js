import app from "./app";
import conectarDB from "./database";

const port = 3000;

app.listen(port, () => {
  conectarDB();
  console.log("Aplicação rodando na porta 3000");
});
