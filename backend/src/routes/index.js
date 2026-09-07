// Ponto central das rotas da API.
// Cada recurso (usuarios, publicacoes, propostas, mensagens, avaliacoes, denuncias)
// terá seu próprio arquivo de rotas registrado aqui.
import { Router } from "express";
import { healthRoutes } from "./health.routes.js";

export const routes = Router();

routes.use("/health", healthRoutes);
// routes.use("/usuarios", usuariosRoutes);
// routes.use("/publicacoes", publicacoesRoutes);
// routes.use("/propostas", propostasRoutes);
// routes.use("/mensagens", mensagensRoutes);
// routes.use("/avaliacoes", avaliacoesRoutes);
// routes.use("/denuncias", denunciasRoutes);
