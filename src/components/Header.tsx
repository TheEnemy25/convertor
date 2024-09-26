import { useEffect, useState } from "react";
import { fetchCurrencyRates } from "../api";

const Header: React.FC = () => {
  const [rates, setRates] = useState<{ USD: number; EUR: number }>({
    USD: 0,
    EUR: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRates = await fetchCurrencyRates();
      if (fetchedRates) {
        setRates({
          USD: 1 / fetchedRates.USD,
          EUR: 1 / fetchedRates.EUR,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <header className="flex flex-col py-3 w-full m-auto">
      <h1 className="text-3xl text-center">Welcome to currency converter</h1>
      <p className="mt-5 text-center">
        1 USD: {rates.USD.toFixed(4)} UAH | 100 USD:{" "}
        {(rates.USD * 100).toFixed(4)} UAH
      </p>
      <p className="mt-5 text-center">
        1 EUR: {rates.EUR.toFixed(4)} UAH | 100 EUR:{" "}
        {(rates.EUR * 100).toFixed(4)} UAH
      </p>
      <div className="w-full md:w-2/3 lg:w-1/2 mt-3 m-auto bg-[#9E78CF] h-1 rounded-xl"></div>
    </header>
  );
};

export default Header;
