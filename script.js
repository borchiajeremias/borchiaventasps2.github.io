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
const modal = document.getElementById("modal-carrito");

const lista = document.getElementById("lista-carrito");

const total = document.getElementById("total-productos");

const cerrar = document.querySelector(".cerrar");

const vaciar = document.getElementById("vaciar");

const pagar = document.getElementById("pagar");

const botonCarrito = document.querySelector(".cart");

botonCarrito.addEventListener("click",()=>{

    mostrarCarrito();

    modal.style.display="flex";

});

cerrar.addEventListener("click",()=>{

    modal.style.display="none";

});

function mostrarCarrito(){

    lista.innerHTML="";

    carrito.forEach((juego,index)=>{

        lista.innerHTML+=`

        <div class="item-carrito">

            <span>${juego}</span>

            <button onclick="eliminarProducto(${index})">

                🗑

            </button>

        </div>

        `;

    });

    total.innerText="Productos: "+carrito.length;

}

function eliminarProducto(i){

    carrito.splice(i,1);

    localStorage.setItem("carrito",JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();

}

vaciar.addEventListener("click",()=>{

    carrito=[];

    localStorage.setItem("carrito","[]");

    actualizarContador();

    mostrarCarrito();

});

pagar.addEventListener("click",()=>{

    if(carrito.length==0){

        alert("El carrito está vacío.");

        return;

    }

    alert("¡Gracias por tu compra!");

    carrito=[];

    localStorage.setItem("carrito","[]");

    actualizarContador();

    mostrarCarrito();

    modal.style.display="none";

});

