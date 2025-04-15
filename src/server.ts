import express from "express";
import orderRoutes from "./routes/OrderRoutes";

const app = express();
app.use(express.json()); // Para parsing de JSON

// Usar as rotas
app.use("/api", orderRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});