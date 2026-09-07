// Tratamento centralizado de erros da API.
export function errorHandler(erro, _req, res, _next) {
  console.error(erro);
  const status = erro.status ?? 500;
  res.status(status).json({ mensagem: erro.message ?? "Erro interno do servidor" });
}
