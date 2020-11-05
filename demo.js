const carrito = [
    {
        id: 198752,
        name: "Falda larga",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Pantalon Jeans",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Pack 3 pares calcetines",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Zapatillas deporte",
        price: 9.95,
        count: 2,
        premium: false
    }
];
//LISTAR TODOS LOS PRODUCTOS 

function imprimirCarrito(producto) {
    console.log("id: " + producto.id);
    console.log("nombre: " + producto.name);
    console.log("precio: " + producto.price);
    console.log("cantidad: " + producto.count);
    console.log("premium: " + producto.premium);
};
/* for(i = 0; i < carrito.length; i++){
    imprimirCarrito(carrito[i]);
    console.log(carrito[i]);
};  */

//(PRUBA CON FOR...OF)
/* for(producto of carrito){
    imprimirCarrito(producto);
    console.log(producto);
} */

//ELIMINAR UN PRODUCTO DE LA LISTA DE LA COMPRA POR ID

/* for(i = 0; i < carrito.length; i++){
    if (carrito[i].id === 75621){
        carrito.splice(i,1);
    }
    
};
for(producto of carrito){
    imprimirCarrito(producto)
};
 */

//CALCULAR TOTAL DEL CARRITO

/* let total = 0;
function calcularTotal(cantidad,precio){
    total = total + cantidad * precio;
};
for(producto of carrito){
    calcularTotal(producto.count, producto.price)
};
console.log(total); */

//FILTRAR LOS PRODUCTOS QUE SEAN PREMIUM

/* for(producto of carrito){
    if(producto.premium === true){
        imprimirCarrito(producto)
    }
} */

//MOSTRAR MENSAJE DE GASTOS DE ENVIO

/* for (producto of carrito) {
    if (producto.premium === true) {
        console.log("-----------")
        console.log("GASTO DE ENVIO 0");
        imprimirCarrito(producto);
    }
    else{
        console.log("-----------")
        console.log("PEDIDO CON GASTOS DE ENVIO");
        imprimirCarrito(producto);
    }
};
 */

//APLICAR DESCUENTO DE 5% SI LA COMPRA ES MAYOR DE 50€
/* let total = 0;
function calcularTotal(cantidad, precio) {
    total = total + cantidad * precio
};
for (producto of carrito) {
    calcularTotal(producto.count, producto.price)
}
if (total > 50) {
    total = total * 0.95;
}

console.log(total)
 */

//MOSTRAR UN HTML BASICO

/* document.write("<h2>Tu carrito de la compra:</h2>")
for(producto of carrito){
    document.write("<ul>")
    document.write("<li>" + producto.name + "</li>")
    document.write("<ol>" + "id:"+ producto.id + "</ol>")
    document.write("<ol>" + "precio:" + producto.price + "</ol>")
    document.write("<ol>" + "cantidad:" + producto.count + "</ol>")
    document.write("<ol>" + "premium:" +  producto.premium + "</ol>")
    document.write("</ul>")

} */