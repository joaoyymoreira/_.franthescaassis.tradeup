// Camada de comunicação com a API REST do back-end.
// A URL base vem de uma variável de ambiente (ver .env.example).
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3333";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers ?? {}) },
    ...options,
  });
  if (!response.ok) {
    const erro = await response.json().catch(() => ({}));
    throw new Error(erro.mensagem ?? `Erro ${response.status}`);
  }
  return response.json();
}

export function getHealth() {
  return request("/health");
}
