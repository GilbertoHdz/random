// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,5';

//Aquí define si es mayor o menor.
if (numero <= 0.5){
  str = ' MENOR que 0,5';
}

//Mostramos el resultado por consola. (pulsar tecla F12 para mostrar herramientas de desarrollo)
console.log('\n' + numero + str + '\n');

