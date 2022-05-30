'use strict'

const { size } = require("@11ty/eleventy/src/TemplateCache");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n < 0) return false;
  else if(n === 0 || n === 1) return 1;
  return n * nFactorial(n - 1);
}

function nFibonacci(n) { // nfib = nfib (n-1) + nfib (n-2)
  if (n < 0) return false;
  else if (n < 2 ) return n; //si n=0 o n=1, devuelve n
  return  nFibonacci(n - 1) + nFibonacci(n - 2);
}


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.arr = []; //estructura de tipo FIFO, entonces puedo usar un arr vacio para que cumple el size inicial 0 dentro de constructor
  }
  enqueue(valor) { // creo el met enqueue que toma un val dado y lo pushea
    this.arr.push(valor);
  }
  dequeue() { // creo el met dequeue que toma el primer val del arr y lo shift. Pide el return del mismo
    if (this.arr === [])
      return undefined;
    return this.arr.shift();
  }
  size() { //creo el met size que da el length del arr
    return this.arr.length;
  }
}




//---- De la forma func constructora y prototype
// function Queue() {
//   this.arr = []; //estructura de tipo FIFO, entonces puedo usar un arr vacio para que cumple el size inicial 0
// }
// Queue.prototype.enqueue = function (valor){
//   this.arr.push(valor);
//   }
// Queue.prototype.dequeue = function() {
//   if(this.arr === []) return undefined;
//   return this.arr.shift();
// }
// Queue.prototype.size = function(){
//   return this.arr.length;
//   }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
