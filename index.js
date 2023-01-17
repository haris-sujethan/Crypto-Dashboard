const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req,res) => {  //visit local host 8000, pass through a call back with a request and a response, then use response jason to display hi
    res.json('hi')
})

app.get('/news', (req,res) => {  //visit local host 8000, pass through a call back with a request and a response, then use response jason to display hi
    const options = {
        method: 'GET',
        url: 'https://bitcoin-news1.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'bitcoin-news1.p.rapidapi.com'
        }
      };
    
      axios.request(options).then(function (response) {
        res.json(response.data);
    
      }).catch(function (error) {
        console.error(error);
      });
})

app.get('/convert', (req,res) => {  //visit local host 8000, pass through a call back with a request and a response, then use response jason to display hi
  const toCurrency = req.query.to_currency
  const fromCurrency = req.query.from_currency
  
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {from_currency: fromCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: toCurrency},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
      res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(8000, () => console.log(`Backend is running on port ${PORT}`)) //listen for changes on port