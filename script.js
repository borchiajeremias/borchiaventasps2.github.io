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
   ANIMACIONES
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

    mostrarCarrito();

    alert(`${nombre} agregado al carrito.`);

}

function actualizarContador() {

    contador.textContent = carrito.length;

}

/* =========================
   MODAL CARRITO
========================= */

const modal = document.getElementById("modal-carrito");
const lista = document.getElementById("lista-carrito");
const total = document.getElementById("total-productos");

const botonCarrito = document.querySelector(".cart");
const cerrar = document.querySelector(".cerrar");
const vaciar = document.getElementById("vaciar");
const pagar = document.getElementById("pagar");

/* Abrir */

botonCarrito.addEventListener("click", () => {

    mostrarCarrito();

    modal.style.display = "flex";

});

/* Cerrar */

cerrar.addEventListener("click", () => {

    modal.style.display = "none";

});

/* Cerrar haciendo click afuera */

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

/* Mostrar carrito */

function mostrarCarrito() {

    lista.innerHTML = "";

    if (carrito.length === 0) {

        lista.innerHTML = "<p>El carrito está vacío.</p>";

    } else {

        carrito.forEach((producto, indice) => {

            lista.innerHTML += `

                <div class="item-carrito">

                    <span>${producto}</span>

                    <button onclick="eliminarProducto(${indice})">

                        🗑️

                    </button>

                </div>

            `;

        });

    }

    total.textContent = `Productos: ${carrito.length}`;

}

/* Eliminar producto */

function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();

}

/* Vaciar carrito */

vaciar.addEventListener("click", () => {

    carrito = [];

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();

});

/* Pagar */

pagar.addEventListener("click", () => {

    if (carrito.length === 0) {

        alert("El carrito está vacío.");

        return;

    }

    alert("¡Gracias por tu compra!");

    carrito = [];

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();

    modal.style.display = "none";

});
