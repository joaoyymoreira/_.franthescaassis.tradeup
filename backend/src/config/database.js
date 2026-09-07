// Conexão com o PostgreSQL (camada de dados).
// A string de conexão vem da variável DATABASE_URL (ver .env.example).
import pg from "pg";

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query(text, params) {
  const result = await pool.query(text, params);
  return result.rows;
}
