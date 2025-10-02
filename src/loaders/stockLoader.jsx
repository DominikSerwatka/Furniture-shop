export const stockLoader = async (ticker) => {
  if (!ticker || typeof ticker !== "string") throw new Error("Brak tickera");

  const headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(`/api/alignment_ratio/${ticker}`, {
    method: "GET",
    headers
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Błąd API (${res.status})`);
  }

  return res.json();
};
