const dia = document.querySelector(".dialog");
const btn = document.getElementById("btn");
console.log("hi");
btn.addEventListener("click", () => {
  dia.showModel();
});

// =================================
let inputMiddle = document.querySelector("input[type='search']")
let toggle = document.querySelector("#themesColor");
let body = document.querySelector("body");
let header = document.querySelector("header");
let side = document.querySelector("aside");
let menu = document.querySelector(".menu");
let main = document.querySelector("section");
let i = document.querySelectorAll("i");
let hamburger = document.querySelectorAll(".hamburger div");
let p = document.querySelectorAll("p");
let a = document.querySelectorAll("a");
let h4 = document.querySelectorAll("h4");
let h3 = document.querySelectorAll("h3");
let small = document.querySelectorAll("small");
let hr = document.querySelectorAll("hr");
let input = document.querySelector("input");
// ================
// body.style.backgroundColor = "black"
// header.style.backgroundColor = "black"
// side.style.backgroundColor = "black"
// menu.style.backgroundColor = "black"
// main.style.backgroundColor = "black"
// hamburger.forEach(p => p.style.backgroundColor = "white")
// i.forEach(p => p.style.color = "white")
// p.forEach(p => p.style.color = "white")
// a.forEach(p => p.style.color = "white")
// h4.forEach(p => p.style.color = "white")
// h3.forEach(p => p.style.color = "white")
// small.forEach(p => p.style.color = "white")
// hr.forEach(p => p.style.borderTop = "white")


let theme = () => {
  if (toggle.checked) {
    body.classList.add("black-bg")
    header.classList.add("black-bg")
    side.classList.add("black-bg")
      menu.classList.add("black-bg")
      inputMiddle.style.color = "white"
    // main.classList.add("black-bg")
    main.style.backgroundColor = "black"
    hamburger.forEach((p) => (p.classList.add("black-bg")));
    i.forEach((p) => (p.classList.add("white-f")));
    p.forEach((p) => (p.classList.add("white-f")));
    // a.forEach((p) => (p.classList.add("white-f")));
      a.forEach(p => p.style.color = "white")
      h4.forEach((p) => (p.classList.add("white-f")));
    h3.forEach((p) => (p.classList.add("white-f")));
    small.forEach((p) => (p.classList.add("white-f")));
    hr.forEach((p) => (p.style.borderTop = "white"));
    input.classList.add("black-bg");
  } else {
    body.classList.remove("black-bg")
    header.classList.remove("black-bg")
    side.classList.remove("black-bg")
      menu.classList.remove("black-bg")
      inputMiddle.style.color = "black"
      
    // main.classList.remove("black-bg")
    main.style.backgroundColor = "white"
      
    hamburger.forEach((p) => (p.classList.remove("black-bg")));
    i.forEach((p) => (p.classList.remove("white-f")));
    p.forEach((p) => (p.classList.remove("white-f")));
    // a.forEach((p) => (p.classList.remove("white-f")));
    a.forEach(p => p.style.color = "black")
    h4.forEach((p) => (p.classList.remove("white-f")));
    h3.forEach((p) => (p.classList.remove("white-f")));
    small.forEach((p) => (p.classList.remove("white-f")));
    hr.forEach((p) => (p.style.borderTop = "black"));
    input.classList.remove("black-bg");
  }
};
