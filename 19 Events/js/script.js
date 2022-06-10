const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("You clicked the button!");
    console.log(e);
    document.querySelector("#my-form").style.background = "#CCC";
    document.querySelector("body").classList.add("bg-dark");
    document.querySelector(".items").lastElementChild.innerHTML = "Hello";
});