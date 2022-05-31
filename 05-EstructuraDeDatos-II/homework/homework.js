"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(data){
  let node = new Node(data); //agrego un nuevo nodo con su data. node = {value: data, next: null}
  let current = this.head;

  if (current === null){ //en el caso que no E nodo asociado al head, le asigno el nuevo nodo a this.head
    this.head = node;
    return node;
  } else {
    while(current.next !== null) // mientras el nodo siguiente al current no sea null (es decir que el siguiente no sea el ultimo), a current le asigno el nodo siguiente.
    current = current.next;
    } 
  current.next = node;
  return current; // una vez que el current.next es igual a null, entonces asigno el nuevo nodo al current.next
}

LinkedList.prototype.remove =  function(){

  let current = this.head;

  if (this.head === null){ //si no hay els en la list, entonces this.head = null
    return null;
  } else if(current !== null && current.next === null){ // si hay un solo node en la list, entonces current.this === null, y para quitar el current y devolver su data, le asigno su data a un auxiliar, luego convierto el current en null, y devuelvo el aux.
      let aux = this.head.value;
      current = null;
      return aux;
  } else {
    while(current.next.next !== null){
      current = current.next;
    }
    let aux = current.next.value;
    current.next = null;
    return aux;
  }
}


LinkedList.prototype.search = function(value){
  if (this.head === null){ //si no hay els en la list, entonces this.head = null
    return null;
  } else{
    let current = this.head;
    while(current !== null){
      if (current.value === value) {
        return current.value;
      }
      else if(typeof value === 'function'){
        if(value(current.value)){
          return current.value;
        }
      }
      current = current.next;
    }
    return null;
  }
}

function Node(value) { //cada nuevo nodo tiene su this.next = null ya que sería el ultimo de la lista. Si deja de ser el ultimo, entonces this.next es un nodo y no null.
  this.value = value;
  this.next = null;
}

/* ACLARACIONNNN: cuidado con los enunciados!!! Si dice:
- Devuelvo una nueva lista -> new LinkedList
- Modifico la lista -> algo debo modificar entre el current/aux (no devuelvo nada)
- No devuelvo nada, no devuelvo nada.


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/


function HashTable(numBuckets) {
  this.numBuckets = numBuckets || 35;
  this.buckets = new Array(this.numBuckets);
}

HashTable.prototype.hash = function(key){
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum = sum + key.charCodeAt(i);
  }
  return sum % this.numBuckets;
}

HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string') throw TypeError('Keys must be strings');
  let i = this.hash(key); //donde guardarlo.

  if(this.buckets[i] === undefined){
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
}

HashTable.prototype.get = function(key){
  let i = this.hasKey(key);
  return this.buckets[i][key];
}

HashTable.prototype.hasKey = function(key){
  let i = this.hash(key); //me calcula el hash de key
  return this.buckets[i].hasOwnProperty(key);
}


// No modifiquen nada debajo de esta linea 
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
