/*Quiero que despliegue un menú debajo del 
boton "Nuestras casas", para que el usuario 
pueda seleccionar entre las casas para ver*/

var boton = document.getElementById('casas_menu');
var menu = document.getElementById('menu');

boton.addEventListener('mouseover', desplegar, false);
boton.addEventListener('mouseout', ocultar, false);

function desplegar(){
    menu.style = "display: block";
    console.log("hola");
}
function ocultar(){
    menu.style = "display: none";
    console.log("chau");
}