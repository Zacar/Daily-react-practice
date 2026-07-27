const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <div>
        <select
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none
        focus:ring-2 focus:ring-indigo-500"
        >
          {currencies?.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
