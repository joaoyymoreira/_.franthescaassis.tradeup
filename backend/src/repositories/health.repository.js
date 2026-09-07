// Repositories fazem o acesso ao banco (operações CRUD via SQL).
import { query } from "../config/database.js";

export const healthRepository = {
  async ping() {
    try {
      await query("SELECT 1");
      return true;
    } catch {
      return false;
    }
  },
};
