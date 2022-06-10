// Single element
const form = document.getElementById("my-form");
console.log(document.querySelector(".container"));

// Multiple elements
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item));