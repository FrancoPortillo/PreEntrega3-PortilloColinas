/* Segunda Pre Entrega - Portillo Colinas
 */
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const carroCompras = [];

const agregarProducto = (producto) => {
  carroCompras.push(producto);
};

const calcularTotal = () => {
  let total = 0;
  for (const producto of carroCompras) {
    total += producto.precio;
  }
  return total;
};

const milanesaDePollo = new Producto("Milanesas de Pollo", 1000);
const bolaDeLomo = new Producto("Bola de Lomo", 1400);
const bifeDeChorizo = new Producto("Bifes de Chorizo", 1500);
const medallonDePollo = new Producto("Medallones de Pollo", 1650);
const asado = new Producto("Asado", 1700);

alert("Bienvenido a la Carniceria!");
let continuarCompra = true;

while (continuarCompra != false) {
  const productoDeseado = prompt(
    "Ingrese el producto que quiere agregar al carro de compras: \n 1. Milanesas de Pollo \n 2. Bola de Lomo \n 3. Bife de Chorizo \n 4. Medallones de Pollo \n 5. Asado \n 6. Finalizar Compra. \n Recuerde que es 1kg por opcion elegida."
  );
  switch (productoDeseado) {
    case "1":
      agregarProducto(milanesaDePollo);
      alert(
        `Usted seleccionó el producto ${milanesaDePollo.nombre} con un precio de ${milanesaDePollo.precio} Pesos.`
      );
      console.log(
        `producto seleccionado ${milanesaDePollo.nombre} precio: ${milanesaDePollo.precio} Pesos.`
      );
      break;
    case "2":
      agregarProducto(bolaDeLomo);
      alert(
        `Usted seleccionó el producto ${bolaDeLomo.nombre} con un precio de ${bolaDeLomo.precio} Pesos.`
      );
      console.log(
        `producto seleccionado ${bolaDeLomo.nombre} precio: ${bolaDeLomo.precio} Pesos.`
      );
      break;
    case "3":
      agregarProducto(bifeDeChorizo);
      alert(
        `Usted seleccionó el producto ${bifeDeChorizo.nombre} con un precio de ${bifeDeChorizo.precio} Pesos.`
      );
      console.log(
        `producto seleccionado ${bifeDeChorizo.nombre} precio: ${bifeDeChorizo.precio} Pesos.`
      );
      break;
    case "4":
      agregarProducto(medallonDePollo);
      alert(
        `Usted seleccionó el producto ${medallonDePollo.nombre} con un precio de ${medallonDePollo.precio} Pesos.`
      );
      console.log(
        `producto seleccionado ${medallonDePollo.nombre} precio: ${medallonDePollo.precio} Pesos.`
      );
      break;
    case "5":
      agregarProducto(asado);
      alert(
        `Usted seleccionó el producto ${asado.nombre} con un precio de ${asado.precio} Pesos.`
      );
      console.log(
        `producto seleccionado ${asado.nombre} precio: ${asado.precio} Pesos.`
      );
      break;

    case "6":
      continuarCompra = false;
      alert(
        "Gracias por comprar en su Carniceria de Confianza, Vuelva Pronto!"
      );
      break;
    default:
      alert("Opción Inválida. Por favor, elija una opción válida");
  }
}

let total = 0;
for (let producto of carroCompras) {
  total += producto.precio;
  console.log(producto.nombre + " - Precio: $ " + producto.precio);
}

alert("Total a pagar: $ " + total);
