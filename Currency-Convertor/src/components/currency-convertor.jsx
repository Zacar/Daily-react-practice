import { useEffect, useState } from "react";
import CurrencyDropdown from "./dropdown";

const CurrencyConvertor = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("JPY");

  //Currencies https://api.frankfurter.dev/v1/currencies
  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertCurrency = () => {};

  //Conversion https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}
  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        CurrencyConvertor
      </h2>
      <div>
        <CurrencyDropdown currencies={currencies} title="From" />
        {/* swapping currency button */}
        <CurrencyDropdown currencies={currencies} title="To:" />
      </div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Convert
        </button>
      </div>

      <div className="mt-4 text-lg font-medium text-right text-green-600">
        Converted Amount:69 USD
      </div>
    </div>
  );
};

export default CurrencyConvertor;
