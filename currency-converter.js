require("dotenv").config();
const envAuth = process.env.SECRET_API_KEY;
const axios = require("axios");

const getExchangeRate = async (fromCurrency, toCurrency) => {
  const options = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/exchange",
    params: { from: `${fromCurrency}`, to: `${toCurrency}`, q: "1.0" },
    headers: {
      "X-RapidAPI-Key": envAuth,
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };
  try {
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch {
    console.log(error);
  }
};

getExchangeRate("GBP", "EUR");
