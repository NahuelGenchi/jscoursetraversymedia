// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    };
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
};

// Instantiate object
const person1 = new Person("Nahuel", "Genchi", "07-21-2000");

console.log(person1);
console.log(person1.firstName, person1.lastName);
console.log(person1.dob);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());