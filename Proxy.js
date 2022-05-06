// Allows you to use 1 object(object) as a placeholder for another object.

// Build a Mock API

function CryptoCurrencyAPI() {
    this.getValue = coin => {
        console.log("Calling External API Service...")
        switch(coin) {
            case "Bitcoin":
                return "3,500"
            case "Litecoin":
                return "$50"
            case "Ethereum":
                return "$175"
        }
    }
}

// const api = new CryptoCurrencyAPI()

// console.log(api.getValue("Bitcoin")) // Litecoin | Ethereum

// Create our PROXY to talk to the API for us...

function CryptoProxy() {
    this.api = new CryptoCurrencyAPI()
    this.cache = {}

    this.getValue = coin => {
        if(this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

const proxy = new CryptoProxy()

console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Ethereum"))