import type { CurrencyRatesResponse } from '../types/currencyRates';

// Should be in .env file, but kept here to simplify testing
// 5000 requests/month free plan
const key = 'fxf_2YVReqmOFQLdkWC8KgXo';

let cachedRatesResponse: CurrencyRatesResponse | null = null;

export async function fetchCurrencyRates(): Promise<CurrencyRatesResponse | null> {
  if (cachedRatesResponse) {
    return cachedRatesResponse;
  }

  const res = await fetch(
    `https://api.fxfeed.io/v1/latest?base=USD&api_key=${key}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch currency rates');
  }
  cachedRatesResponse = await res.json();
  return cachedRatesResponse;
}
