// Creating a clean and concise way of creating new objects and inserting them into our database.

function Developer(name) {
    this.name = name
    this.type = 'Developer'
}

function Tester(name) {
    this.name = name
    this.type = 'Tester'
}

function CustomerSupport(name) {
    this.name = name
    this.type = 'Customer Support Representative'
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
            case 3:
                return new CustomerSupport(name)
        }
    }
}

function say() {
    console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("Jacob", 2))
employees.push(employeeFactory.create("Steph", 3))

employees.forEach(emp => {
    say.call(emp)
})
