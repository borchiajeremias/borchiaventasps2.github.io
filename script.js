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
