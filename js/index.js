// PRODUCTOS
const catalogo = [
{
    nombre: "papas",
    precio: 100
},
{
    nombre: "gaseosa",
    precio: 200
},
{
    nombre: "jugo",
    precio: 150
},
{
    nombre: "galletas",
    precio: 250
}
]

let carrito = [];

///////////////////////////////////////////////////////////////////
/*
let nombre = prompt("Inserte su nombre");
let apellido = prompt("Inserte su apellido");

let saludo = alert("Hola " + nombre + " " + apellido);
*/
let inicio = prompt("Para ver los productos ingrese CATALOGO").toLowerCase();

let lista

while(inicio != "listo"){
    lista = prompt("PAPAS-GASEOSA-JUGO-GALLETAS. Inserte el nombre del producto para agregar al carro.");
    let producto = catalogo.find(catalogo => catalogo.nombre = lista);
    carrito.push(producto);
    inicio = prompt("Inserte LISTO para finalizar la compra. CATALOGO para ver los productos.").toLowerCase();
    console.log(carrito);
}
console.log(carrito);

const total = carrito.reduce((prev, now) => {
    return prev + now;
});

console.log(total);
