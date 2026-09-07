// Services concentram as regras de negócio e orquestram o acesso aos dados.
import { healthRepository } from "../repositories/health.repository.js";

export const healthService = {
  async check() {
    const bancoOk = await healthRepository.ping();
    return {
      status: bancoOk ? "ok" : "banco indisponível",
      servico: "TradeUp API",
      horario: new Date().toISOString(),
    };
  },
};
