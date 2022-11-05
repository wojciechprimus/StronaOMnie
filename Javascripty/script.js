console.log("Witam wszystkich developerów, jak wam się podoba mój kod??");

let button1 = document.querySelector(".button1");
button1.addEventListener("click", () => {
    header = document.querySelector(".title");
    header.remove();
});


let button2 = document.querySelector(".button2");
let content = document.querySelector(".content");

button2.addEventListener("click", () => {
    content.classList.toggle("content__Dark");
});

