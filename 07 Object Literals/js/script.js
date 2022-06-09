const person = {
    firstName: "Nahuel",
    lastName: "Genchi",
    age: 21,
    birthdayMonth: "July",
    birthdayDay: 21,
    address: {
        street: "Av. Leandro Alem",
        number: 426,
        province: "Buenos Aires",
    },
    hobbies: ["Music", "Football", "Programming", "Languages"],
};

person.email = "nahuel@gmail.com";

const {address, hobbies} = person;

let nameMessage = `My name is ${person.firstName} ${person.lastName}.`;
let ageMessage = `I am ${person.age} years old.`;
let addressMessage = `I live in ${address.street} ${address.number}, ${address.province}.`;
let hobbiesMessage = `My favorite hobbies are ${hobbies[2]} and practicing ${hobbies[3]}.`;
let emailMessage = `My email is ${person.email}`;

console.log(person);
console.log(nameMessage);
console.log(ageMessage);
console.log(addressMessage);
console.log(hobbiesMessage);
console.log(emailMessage);