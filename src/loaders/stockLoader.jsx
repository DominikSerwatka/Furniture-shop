import { useAuth } from '../context/AuthContext';

export const stockLoader = async (ticker, number = 1, retry = true, refreshFn) => {

  const API = import.meta.env.VITE_API_URL;
  const base = API || '/api';

  if (!ticker || typeof ticker !== 'string') throw new Error('Brak tickera');
  const t = encodeURIComponent(ticker.trim().toUpperCase());
  const n = Number.isFinite(Number(number)) ? Number(number) : 1;

  const token = localStorage.getItem('accessToken');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  let res;
  try {
    res = await fetch(`${base}/alignment_ratio/${t}/${n}`, {
      method: 'GET',
      headers,
      credentials: 'include', // ← odkomentuj tylko jeśli logujesz przez cookies HTTP-only
    });
  } catch (e) {
    console.error('Network error while fetching alignment_ratio:', e);
    throw new Error('Brak połączenia z serwerem');
  }

  // Obsługa 401 -> spróbuj odświeżyć token i ponów 1 raz
  if (res.status === 401 && retry) {
    console.log('Access token invalid, trying refresh...');
    const ok = await refreshFn();
    if (ok) {
      return stockLoader(ticker, n, false);
    }
    throw new Error('Sesja wygasła. Zaloguj się ponownie.');
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const msg = text || `Błąd API (${res.status})`;
    throw new Error(msg);
  }

  const data = await res.json();
  console.log('Alignment data fetched:', data);
  return data;
};
