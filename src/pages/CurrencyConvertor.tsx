import { useEffect, useState } from "react";
import { fetchCurrencyRates } from "../api";

type Currency = "UAH" | "USD" | "EUR";

const CurrencyConvertor: React.FC = () => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState<Currency>("UAH");
  const [currency2, setCurrency2] = useState<Currency>("USD");

  const [rates, setRates] = useState<Record<string, number>>({
    UAH: 1,
    USD: 1,
    EUR: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRates = await fetchCurrencyRates();
      if (fetchedRates) {
        setRates(fetchedRates);
      }
    };
    fetchData();
  }, []);

  const convert = (
    amount: number,
    fromCurrency: Currency,
    toCurrency: Currency
  ): number => {
    return (amount / rates[fromCurrency]) * rates[toCurrency];
  };

  const handleAmount1Change = (amount: number) => {
    setAmount1(amount);
    setAmount2(convert(amount, currency1, currency2));
  };

  const handleAmount2Change = (amount: number) => {
    setAmount2(amount);
    setAmount1(convert(amount, currency2, currency1));
  };

  const handleCurrency1Change = (currency: Currency) => {
    setCurrency1(currency);
    setAmount2(convert(amount1, currency, currency2));
  };

  const handleCurrency2Change = (currency: Currency) => {
    setCurrency2(currency);
    setAmount1(convert(amount2, currency, currency1));
  };

  return (
    <section className="flex flex-col items-center space-y-4">
      <div className="flex items-center">
        <input
          type="number"
          value={amount1}
          onChange={(e) => handleAmount1Change(Number(e.target.value))}
          className="p-2 rounded-md text-black mr-4 transition-colors duration-200 focus:ring-2 focus:ring-[#9E78CF] focus:outline-none hover:ring-2 hover:ring-[#9E78CF]"
        />
        <select
          value={currency1}
          onChange={(e) => handleCurrency1Change(e.target.value as Currency)}
          className="p-2 rounded-md text-black transition-colors duration-200 focus:ring-2 focus:ring-[#9E78CF] focus:outline-none hover:ring-2 hover:ring-[#9E78CF]"
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={amount2}
          onChange={(e) => handleAmount2Change(Number(e.target.value))}
          className="p-2 rounded-md text-black mr-4 transition-colors duration-200 focus:ring-2 focus:ring-[#9E78CF] focus:outline-none hover:ring-2 hover:ring-[#9E78CF]"
        />
        <select
          value={currency2}
          onChange={(e) => handleCurrency2Change(e.target.value as Currency)}
          className="p-2 rounded-md text-black transition-colors duration-200 focus:ring-2 focus:ring-[#9E78CF] focus:outline-none"
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </section>
  );
};

export default CurrencyConvertor;
