function comprar(juego){

    alert(juego + " agregado al carrito.");

}

window.onload = function(){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},2500);

}
const menu=document.querySelector(".hamburguesa");

const nav=document.querySelector("nav");

menu.onclick=()=>{

nav.classList.toggle("active");

}
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});
let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

actualizar();

function comprar(nombre){

carrito.push(nombre);

localStorage.setItem("carrito",JSON.stringify(carrito));

actualizar();

}

function actualizar(){

contador.innerText=carrito.length;
