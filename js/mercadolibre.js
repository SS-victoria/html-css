class Motocicleta {

    constructor(marca, modelo, precio, anyo, kilometros, ubicacion, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
    }
}

let moto1 = new Motocicleta("Ducati","Hypermotard","$ 87.000.000","2021","999.999 Km","Medellin-Antioquia","img/ducaty.jpg");
let moto2 = new Motocicleta("kawasaki","Z1000","$ 38.000.000","2014","66.000 Km", "Bogota-D.C","img/z10004.jpg");
let moto3 = new Motocicleta("Kawasaki","Z800","$ 25.000.000","2013","80.000 Km","Valledupar-Cesar","img/z800.jpg");

let boxProductos= document.getElementById("boxProductos");
let inputBusqueda= document.getElementById("inputBusqueda").value;

window.addEventListener("keydown", (event) =>{
    if (event.key == ) 
})


cargarMotocicleta(moto1);
cargarMotocicleta(moto2);
cargarMotocicleta(moto3);

function cargarMotocicleta(moto){

    let boxProducto=document.createElement("div")
boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class","box-producto")

let infoproducto=document.createElement("div")
boxProducto.appendChild(infoproducto)
infoproducto.setAttribute("class","box-info-producto")

let marcaProducto=document.createElement("label");
infoproducto.appendChild(marcaProducto);
let nodoMarcaProducto=document.createTextNode(moto.marca + " ");
marcaProducto.appendChild(nodoMarcaProducto);
marcaProducto.setAttribute("class","marca-producto")

let modeloProducto=document.createElement("label");
infoproducto.appendChild(modeloProducto);
let nodoModeloProducto=document.createTextNode(moto.modelo);
modeloProducto.appendChild(nodoModeloProducto);
modeloProducto.setAttribute("class","modelo-producto")

let precioProducto=document.createElement("label");
infoproducto.appendChild(precioProducto);
let nodoPrecioProducto=document.createTextNode(moto.precio);
precioProducto.appendChild(nodoPrecioProducto);
precioProducto.setAttribute("class","precio-producto")

let anyoProducto=document.createElement("label");
infoproducto.appendChild(anyoProducto);
let nodoAnyoProducto=document.createTextNode(moto.anyo + " ·");
anyoProducto.appendChild(nodoAnyoProducto);
anyoProducto.setAttribute("class","anyo-producto")

let kilometroProducto=document.createElement("label");
infoproducto.appendChild(kilometroProducto);
let nodoKilometroProducto=document.createTextNode(moto.kilometros + " ·");
kilometroProducto.appendChild(nodoKilometroProducto);
kilometroProducto.setAttribute("class","kilometro-producto")

let ubicacionProducto=document.createElement("label");
infoproducto.appendChild(ubicacionProducto);
let nodoUbicacionProducto=document.createTextNode(moto.ubicacion);
ubicacionProducto.appendChild(nodoUbicacionProducto);
ubicacionProducto.setAttribute("class","ubicacion-producto")




let boxImagen=document.createElement("div")
boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("class","box-imagen")
let imagenProducto=document.createElement("img");
boxImagen.appendChild(imagenProducto);
imagenProducto.setAttribute("src", moto.imagen);
imagenProducto.setAttribute("class", "imagen-producto");


}









