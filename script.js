/* =========================
   VARIABLES
========================= */

const loader = document.getElementById("loader");
const menu = document.querySelector(".hamburguesa");
const nav = document.querySelector("nav");
const contador = document.getElementById("contador");

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2500);

});

/* =========================
   MENÚ HAMBURGUESA
========================= */

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});

/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach((elemento) => {

    observer.observe(elemento);

});

/* =========================
   CARRITO
========================= */

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

function comprar(nombre) {

    carrito.push(nombre);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    alert(`${nombre} agregado al carrito.`);

}

function actualizarContador() {

    contador.textContent = carrito.length;

}
