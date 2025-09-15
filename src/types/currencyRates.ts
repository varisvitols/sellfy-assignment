export type CurrencyRate = {
  [currencyCode: string]: number;
};

export interface CurrencyRatesResponse {
  rates: CurrencyRate;
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  privacy: string;
}
