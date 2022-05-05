// Encapsulate a group or family of closely related algorithms
// Allows to easily swap strategies out for each other

function Fedex() {
    this.calculate = package => {
        // Fedex Shipping Rate
        return 2.45
    }
}

function UPS() {
    this.calculate = package => {
        // UPS Shipping Rate
        return 1.56
    }
}

function USPS() {
    this.calculate = package => {
        // USPS Shipping Rate
        return 4.5
    }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = {
    from: 'Alabama',
    to: 'Georgia',
    weight: 1.56
}

fedex.calculate(package)
ups.calculate(package)
usps.calculate(package) // Strategy pattern allows you to encapsulate all of these!

// This is your Strategy
function Shipping() {
    this.company = '' // for initialization purposes
    this.setStrategy = (company) => {
        this.company = company
    }
    this.calculate = package => {
        return this.company.calculate(package)
    }
}

const shipping = new Shipping()

shipping.setStrategy(fedex)
console.log("Fedex: " + shipping.calculate(package))

shipping.setStrategy(ups)
console.log("UPS: " + shipping.calculate(package))

shipping.setStrategy(usps)
console.log("USPS: " + shipping.calculate(package))
