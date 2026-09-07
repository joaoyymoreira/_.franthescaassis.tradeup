// Controllers recebem a requisição, chamam o service e devolvem a resposta.
import { healthService } from "../services/health.service.js";

export const healthController = {
  async check(_req, res, next) {
    try {
      const status = await healthService.check();
      res.json(status);
    } catch (erro) {
      next(erro);
    }
  },
};
