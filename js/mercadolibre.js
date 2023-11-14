
let boxProductos= document.getElementById("boxProductos")

let boxProducto=document.createElement("div")
boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class","box-producto")

let infoproducto=document.createElement("div")
boxProducto.appendChild(infoproducto)
infoproducto.setAttribute("class","box-info-producto")

let marcaProducto=document.createElement("label");
infoproducto.appendChild(marcaProducto);
let nodoMarcaProducto=document.createTextNode("Ducati");
marcaProducto.appendChild(nodoMarcaProducto);

let marcaProducto2=document.createElement("label");
let nodoMarcaProducto2=document.createTextNode("hypermotard");
marcaProducto.appendChild(nodoMarcaProducto2);

let marcaProducto3=document.createElement("label");
let nodoMarcaProducto3=document.createTextNode(" $ 76.000.000");
marcaProducto.appendChild(nodoMarcaProducto3);

let marcaProducto4=document.createElement("label");
let nodoMarcaProducto4=document.createTextNode("2021");
marcaProducto.appendChild(nodoMarcaProducto4);

let marcaProducto5=document.createElement("label");
let nodoMarcaProducto5=document.createTextNode("999.999km");
marcaProducto.appendChild(nodoMarcaProducto5);

let marcaProducto6=document.createElement("label");
let nodoMarcaProducto6=document.createTextNode("medellin-antioquia");
marcaProducto.appendChild(nodoMarcaProducto6);



let boxImagen=document.createElement("div")
boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("class","box-imagen")
let imagenProducto=document.createElement("img");
boxImagen.appendChild(imagenProducto);
imagenProducto.setAttribute("src", "img/hypermotar.webp");
imagenProducto.setAttribute("class", "imagen-producto");



