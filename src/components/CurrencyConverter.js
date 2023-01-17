import ExchangeRate from "./ExchangeRate"
import { useState } from "react"
import axios from "axios"

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'CAD', 'XRP', 'WOO', 'BNB', 'ADA' , 'SOL', 'DOT', 'QNT']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)
    const [exchangeRate, SetExchangeRate] = useState(0)
    const [primaryCurrencyExchange, setPrimaryCurrencyExchange] = useState('BTC')
    const [secondaryCurrencyExchange, setSecondaryCurrencyExchange] = useState('BTC')
    const [result ,setResult] = useState(0)
    const convert = () => {
        

        const options = {
        method: 'GET',
        url: 'http://localhost:8000/convert',
        params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency}
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            SetExchangeRate(response.data)
            setResult(response.data * amount)
            setPrimaryCurrencyExchange(chosenPrimaryCurrency)
            setSecondaryCurrencyExchange(chosenSecondaryCurrency)
        }).catch(function (error) {
            console.error(error);
        });
    }

    console.log(exchangeRate)

    return (
      <div className="Currency-Converter">
        <h2> Currency Converter </h2>
        <div className="Input-Box">
            <table>
                <tbody>
                    <tr>
                        <td>Primary Currency:</td> 
                        <td>
                            <input
                                type="number" //only numbers
                                name="currency-amount-1"
                                value={amount}
                                className="Currency-Box"
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </td>

                        <td>
                            <select
                                value={chosenPrimaryCurrency}
                                name="currency-option-1"
                                className="Currency-Options"
                                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >

                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))} 

                            </select>
                        </td>
                    </tr>


                    <tr>
                        <td>Secondary Currency:</td> 
                        <td>
                            <input
                                name="currency-amount-2"
                                value={result}
                                disabled={true}
                                className="Currency-Box"
                            />
                        </td>

                        <td>
                            <select
                                value={chosenSecondaryCurrency}
                                name="currency-option-2"
                                className="Currency-Options"
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >

                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))} 

                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button id="Convert-Button" onClick={convert}>Convert</button>
        </div>

        <ExchangeRate 
            exchangeRate={exchangeRate}
            chosenPrimaryCurrency={primaryCurrencyExchange}
            chosenSecondaryCurrency={secondaryCurrencyExchange}
        /> 
      </div>
    )
  }
  
  export default CurrencyConverter
  