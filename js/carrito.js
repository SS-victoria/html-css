let boxPlus     = document.getElementById("boxPlus");
let boxMinus    = document.getElementById("boxMinus");
let boxUnidades = document.getElementById("boxUnidades");
let subTotal    = document.getElementById("subTotal");
const valorUnidad = 85000;
const valorUnidadstr = Intl.NumberFormat("de-De"). format(valorUnidad);
document.getElementById("precio").innerHTML = "$" + valorUnidadstr;


// sumar producto

boxPlus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if (auxUnidades < 10) {
        boxUnidades.innerHTML = (auxUnidades + 1).toString();
      let valorsubtotal  = parseInt(boxUnidades.innerHTML) * valorUnidad;
      subTotal.innerHTML = Intl.NumberFormat("de-DE").format
      (valorsubtotal);

      if (boxUnidades.innerHTML == 1) {
        document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "Producto";
      }else if (boxUnidades.innerHTML >=2){
        document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "Productos";
      }

    };
});

// restar productos

boxMinus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if (auxUnidades > 0) {
        boxUnidades.innerHTML = (auxUnidades - 1).toString();
      let valorsubtotal  = parseInt(boxUnidades.innerHTML) * valorUnidad;
      subTotal.innerHTML = Intl.NumberFormat("de-DE").format
      (valorsubtotal);

      if (boxUnidades.innerHTML == 1) {
        document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "Producto";
      }else if (boxUnidades.innerHTML == 0 || boxUnidades.innerHTML >=2){
        document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "Productos";
      }
    
    };
});

