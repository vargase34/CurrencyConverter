//once the page loads or if the user clicks on the left conver button, run this function
let fetchedData = function () {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => {
        return response.json()
    }).then(data => {
        let currency = data.rates
        let leftCountry = document.getElementById('selectCountry')
        let rightCountry = document.getElementById('selectCountry2')
        //below creates the left drop down menu
        for (i = 0; i < Object.keys(currency).length; i++) {
            let option = document.createElement("option")
            option.text = Object.keys(currency)[i]
            leftCountry.add(option)
        }
        //below creates the right drop down menu
        for (i = 0; i < Object.keys(currency).length; i++) {
            let option = document.createElement("option")
            option.text = Object.keys(currency)[i]
            rightCountry.add(option)
        }
        //below makes the conversions
        let userInput = document.getElementById('value').value
        let firstCountry = leftCountry.value
        let secondCountry = rightCountry.value
        let firstCurrency = currency[firstCountry]
        let secondCurrency = currency[secondCountry]
        console.log(`User typed ${userInput}`)
        console.log(`${firstCountry} currency is ${firstCurrency}`)
        console.log(`${secondCountry} currency is ${secondCurrency}`)
        let calculations = (userInput * firstCurrency) * secondCurrency
        document.getElementById('value2').value = calculations
    }).catch(function (error) {
        alert('Error! Fetch failed.')
    })
}

//if the user clicked on the right convert button, run this function
let fetchedData2 = function () {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => {
        return response.json()
    }).then(data => {
        let currency = data.rates
        let leftCountry = document.getElementById('selectCountry')
        let rightCountry = document.getElementById('selectCountry2')
        //below creates the drop down menu
        for (i = 0; i < Object.keys(currency).length; i++) {
            let option = document.createElement("option")
            option.text = Object.keys(currency)[i]
            leftCountry.add(option)
        }
        
        for (i = 0; i < Object.keys(currency).length; i++) {
            let option = document.createElement("option")
            option.text = Object.keys(currency)[i]
            rightCountry.add(option)
        }
        //below makes the conversions
        let userInput = document.getElementById('value2').value
        let firstCountry = leftCountry.value
        let secondCountry = rightCountry.value
        let firstCurrency = currency[firstCountry]
        let secondCurrency = currency[secondCountry]
        console.log(`User typed ${userInput}`)
        console.log(`${firstCountry} currency is ${firstCurrency}`)
        console.log(`${secondCountry} currency is ${secondCurrency}`)
        let calculations = (userInput * secondCurrency) * firstCurrency
        document.getElementById('value').value = calculations
    }).catch(function (error) {
        alert('Error! Fetch failed.')
    })
}