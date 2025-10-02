import React, { useState } from "react";
import { stockLoader } from "../loaders/stockLoader";

export default function StockPage() {
  const [ticker, setTicker] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);
    const t = ticker.trim().toUpperCase();
    if (!t) {
      setError("Podaj ticker spółki");
      return;
    }
    try {
      setLoading(true);
      const resp = await stockLoader(t);
      setData(resp);
    } catch (err) {
      setError(err.message || "Nie udało się pobrać danych");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6">
      <h1 className="text-2xl font-bold">Alignment Ratio</h1>
      <p className="text-sm text-gray-500 mb-4">Podaj ticker i sprawdź wskaźnik dla C-level.</p>

      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          inputMode="text"
          autoCapitalize="characters"
          placeholder="np. AAPL"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="w-full sm:w-64 rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:bg-black/90 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Ładowanie…" : "Pobierz"}
        </button>
      </form>

      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-red-700">
          {error}
        </div>
      )}

      {data && (
        <div className="rounded-2xl border border-gray-200 p-4 shadow-sm">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold">{data.company_name}</h2>
              <p className="text-sm text-gray-500">Ticker: {data.ticker}</p>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-3">
            {Array.isArray(data.c_level_executives) && data.c_level_executives.length > 0 ? (
              data.c_level_executives.map((p, idx) => (
                <div key={idx} className="rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      {p.first_name} {p.last_name}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">
                        {p.alignment_ratio?.toFixed?.(2)}×
                      </div>
                      <div className="text-xs text-gray-500">Alignment</div>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="text-gray-500">Akcje</div>
                    <div className="font-medium">{p.shares?.toLocaleString?.()}</div>
                    <div className="text-gray-500">Wartość akcji</div>
                    <div className="font-medium">${p.equity_value_usd?.toLocaleString?.()}</div>
                    <div className="text-gray-500">Roczne wynagrodzenie</div>
                    <div className="font-medium">${p.annual_pay_usd?.toLocaleString?.()}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500">Brak danych o kadrze C-level.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
