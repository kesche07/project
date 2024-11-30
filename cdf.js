function display() 
            {
                var amount = parseFloat(document.getElementById('amt').value);
                var fromCurrency = document.getElementById('sel1').value;
                var toCurrency = document.getElementById('sel2').value;

                var exchangeRates = {
                'nrs': 0.0075,  // 1 NPR = 0.0075 USD
                'irs': 0.012,   // 1 INR = 0.012 USD
                'usd': 1,       // 1 USD = 1 USD
                'Euro': 1.09,   // 1 EUR = 1.09 USD
                'Gbd': 1.28,    // 1 GBP = 1.28 USD
                'yen': 0.0068,  // 1 JPY = 0.0068 USD
                'baht': 0.028,  // 1 THB = 0.028 USD
                'krw': 0.00074, // 1 KRW = 0.00074 USD
                'cy': 0.14,     // 1 CNY = 0.14 USD
                'peso': 0.017    // 1 PHP = 0.017 USD
            }
    var amountInUSD =amount*exchangeRates[fromCurrency];
    var convertedAmount =amountInUSD*1/exchangeRates[toCurrency];
     document.getElementById('ans').innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
}