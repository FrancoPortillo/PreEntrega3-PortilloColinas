/* Segunda Pre Entrega - Portillo Colinas
Algoritmo utilizando un condicional If en el cual se le indica al alumno dependiendo la nota que ingrese si esta aprobado o no
*/
let nota = parseInt(prompt("Ingrese la nota de su examen"));
if (nota >= 0 && nota <= 10) {
  if (nota == 10) {
    console.log("Felicidades, obtuviste la nota mas alta");
  } else if (nota >= 7 && nota <= 9) {
    console.log("Felicidades, estas aprobado");
  } else {
    console.log("Lamentablemente estas desaprobado");
  }
} else {
  console.log("Nota invalida");
}

// Algoritmo utilizando ciclos while en el cual el usuario ingresa el precio de sus productos y le da el total
let hayProductos = prompt(
  "Si tiene productos escriba Si, en caso de no tener ningun producto escriba SALIR"
);
let total = 0;
while (hayProductos != "SALIR") {
  let precio = parseInt(prompt("Ingrese el precio de su producto"));
  total = total + precio;
  hayProductos = prompt(
    "Si tiene mas productos escriba Si. En caso de no tener mas escriba SALIR"
  );
}
console.log("El total de su compra es de: " + total);
