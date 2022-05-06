// Allows to add or provide new operations to an obj without changing that obj itself. ;)
// Actually not very common in JS!

function Employee(name, salary) {
    this.name = name
    this.salary = salary
}

Employee.prototype = {
    getSalary: function() {
        return this.salary
    },
    setSalary: function(salaryAmount) {
        this.salary = salaryAmount
    },
    accept: function(visitorFunction) {
        visitorFunction(this)
    }
}

const jacobMichael = new Employee("Jacob", 1000000)
console.log(jacobMichael.getSalary())

function ExtraSalary(emp) {
    emp.setSalary(emp.getSalary() * 2)
}

jacobMichael.accept(ExtraSalary)
console.log(jacobMichael.getSalary())