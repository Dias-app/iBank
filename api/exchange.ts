
const API_URL = 'https://open.er-api.com/v6/latest/KZT';

export async function getExchangeRates(): Promise<Record<string, number>> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  if (
    data.result !== 'success' ||
    !data.rates ||
    typeof data.rates !== 'object'
  ) {
    throw new Error('Invalid exchange rates data');
  }

  return data.rates;
}
