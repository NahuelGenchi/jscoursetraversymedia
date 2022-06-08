// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
};

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
};
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

// Instantiate object
const person1 = new Person("Nahuel", "Genchi", "07-21-2000");
const person2 = new Person("Mary", "Smith", "01-01-1999");

console.log(person1);
console.log(person2.getFullName());