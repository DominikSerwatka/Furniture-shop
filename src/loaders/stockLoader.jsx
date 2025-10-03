export const stockLoader = async (ticker, number) => {
  const API = import.meta.env.VITE_API_URL

  // wariant „uniwersalny”: jeśli jest API w env to użyj, inaczej zostań przy /api (dev)
  const base = API || '/api'

  if (!ticker || typeof ticker !== "string") throw new Error("Brak tickera");

  const headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(`${base}/alignment_ratio/${ticker}/${number}`, {
    method: "GET",
    headers
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Błąd API (${res.status})`);
  }

  return res.json();
};
