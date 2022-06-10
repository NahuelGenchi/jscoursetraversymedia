const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].textContent = "Brad";
ul.lastElementChild.innerHTML = "<h2>Hi</h2>"

const btn = document.querySelector(".btn");
btn.style.background = "red";