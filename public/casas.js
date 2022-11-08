/* 
    La idea de este javascript es implementar la función de que un cliente
    pueda agregar su casa al listado incluyendo el titulo, la descripción y
    un link a una foto. En caso de faltar un dato, la pagina da una alerta
    informando que falta uno de los datos
*/

var container = document.querySelector("#casas-container");
var boton = document.querySelector('.agregar-casa button');

boton.addEventListener("click", hola, false);
function hola(){
    let titulo_input = document.querySelector(".agregar-casa #titulo").value;
    let des_input = document.querySelector(".agregar-casa #des").value;
    let link_input = document.querySelector(".agregar-casa #link").value;
    
    let card = document.createElement("div");
    let img = document.createElement("img");
    let texto = document.createElement("div");
    let titulo = document.createElement("h2");
    let des = document.createElement("p");

    card.className = "card";

    img.src = link_input;
    texto.className = "texto";
    titulo.innerHTML = titulo_input;
    des.innerHTML = des_input;

    texto.append(titulo);
    texto.append(des);
    
    card.append(img);
    card.append(texto);
       
    let separador = document.createElement("div");
    separador.className = "separador";

    if(!titulo_input || !des_input || !link_input){
        alert("Faltan datos");
    }
    else{
        container.append(card);
        container.append(separador);
    }
}