import { useState, useEffect } from "react";

const CurrencyApp = () => {
  // wybrana wartosc (chosenAmount)
  // wybrana walute (chosenCurrency)
  const initChosenAmount = 1;
  const initChosenCurrency = "USD";
  const initCurrencies = [];
  const [chosenAmount, setChosenAmount] = useState(initChosenAmount);
  const [chosenCurrency, setChosenCurrency] = useState(initChosenCurrency);
  const [currencies, setCurrencies] = useState(initCurrencies);
  const NBP_API_URL =
    "http://api.nbp.pl/api/exchangerates/tables/a/?format=json";

  useEffect(() => {
    fetch(NBP_API_URL)
      .then((response) => response.json())
      .then((data) => setCurrencies(data[0].rates))
      .catch((err) => console.error(err));
  }, []);

  // functions
  const calculatedCurrency = () => {
    const chosenCurrencyValue = currencies.find(
      ({ code }) => code === chosenCurrency
    )?.mid;
    return chosenAmount * chosenCurrencyValue;
  };

  // events
  const changeChosenAmount = (e) => setChosenAmount(e.target.value);
  const changeChosenCurrency = (e) => setChosenCurrency(e.target.value);

  return (
    <div>
      <input type="number" onChange={changeChosenAmount} value={chosenAmount} />
      <select onChange={changeChosenCurrency} value={chosenCurrency}>
        {currencies.map(({ code }) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <span> = {calculatedCurrency()}</span>
    </div>
  );
};

export default CurrencyApp;
