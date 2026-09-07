// Middleware de autenticação via JWT.
// Protege rotas que só podem ser acessadas por usuários autenticados (RNF-004).
import jwt from "jsonwebtoken";

export function auth(req, _res, next) {
  const header = req.headers.authorization ?? "";
  const token = header.replace("Bearer ", "");

  if (!token) {
    const erro = new Error("Token não informado");
    erro.status = 401;
    return next(erro);
  }

  try {
    req.usuario = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    const erro = new Error("Token inválido ou expirado");
    erro.status = 401;
    next(erro);
  }
}
