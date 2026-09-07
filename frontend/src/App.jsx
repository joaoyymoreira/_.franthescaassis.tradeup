import { useEffect, useState } from "react";
import { getHealth } from "./services/api";

function App() {
  const [status, setStatus] = useState("verificando...");

  useEffect(() => {
    getHealth()
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("API indisponível"));
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ color: "var(--roxo-escuro)" }}>TradeUp</h1>
      <p>Troque o que você sabe, descubra o que vem depois.</p>
      <p>
        Status da API: <strong>{status}</strong>
      </p>
    </main>
  );
}

export default App;
