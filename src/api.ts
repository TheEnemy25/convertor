export const fetchCurrencyRates = async () => {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/UAH");
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error(error);
  }
};
