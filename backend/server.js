import "dotenv/config";
import express from "express";
import cors from "cors";
import { routes } from "./src/routes/index.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT ?? 3333;
app.listen(PORT, () => {
  console.log(`TradeUp API rodando em http://localhost:${PORT}`);
});
