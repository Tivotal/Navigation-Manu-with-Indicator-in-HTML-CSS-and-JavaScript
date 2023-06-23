/* Created by Tivotal */

let navbar = document.querySelector(".navbar");
let links = document.querySelectorAll("li");
let indicator = document.querySelector(".indicator");

links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    //preventing default behaviour
    e.preventDefault();

    //removing active class from navbar items
    navbar.querySelector(".active").classList.remove("active");

    //adding active class to clicked link
    link.classList.add("active");

    indicator.style.transform = `translateX(calc(${index * 90}px))`;
  });
});
