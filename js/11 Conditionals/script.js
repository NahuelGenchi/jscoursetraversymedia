let number;
function numberPrompt() {
    number = Number(prompt("Type a number"));
    if (number > 0) {
        console.log(`Your number is ${number}, greater than 0`);
    } else if (number < 0) {
        console.log(`Your number is ${number}, less than 0`);
    } else if (number == 0) {
        console.log(`Your number is ${number}`);
    } else if (number != Number) {
        console.log("That's not a number, try again.")
        numberPrompt();
    };
};

const x = 10;

// if x is greather than 10 then "red", else "blue".
const color = x > 10 ? "red" : "blue";

switch(color) {
    case "red":
        console.log(`Color is red`);
        break;
    case "blue":
        console.log(`Color is blue`);
        break;
    default:
        console.log("Color isn't red or blue");
        break;
};
