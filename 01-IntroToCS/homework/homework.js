function BinarioADecimal(num) {
  // tu codigo aca

//MI INTENTO
var intArr = Array.from(num);  // declaro intArr como instancia del metodo Array.from que convierte a num en un array 
var binRev = intArr.reverse(); // declaro binRev como instancia del met reverse que reversa los elementos del array anterior
var array = binRev.map(function(element, index){ // declaro array con el met map que crea un array con los reultados de la funcion
    return (element*(2**index)); // la funcion que toma el elemento del array y el indice.
    });
let dec = array.reduce(function (total, number) { //declaro dec como el resultadio de aplicar el metodo reduce con el resultado de la funcion
  return total + number;
});    
  return dec;


//RESUELTO
//let sumatoria = 0;
// for (let i = 0; i < num.length; i++) {
//   sumatoria = sumatoria + num[i] * 2 ** (num.length -1 -i) //
// }
// return sumatoria;

}
function DecimalABinario(num) { //D/2%
  // tu codigo aca
  // let str = "";
  // while(num > 0) {
  //   let resto = num % 2; // calcula el resto de la division num/2
  //   str = resto + str; // ojo que no es lo mismo que str + resto
  //   num = Math.floor(num/2) //redondea al entero hacia abajo
  // }
  // return str;
  let bin = '';  // declaro bin como string vacia que recibira los digitos del binario
  while (num > 0) {
    let resto = num % 2;    // calcula el resto de la division num/2
    bin = resto + bin;      // ojo que no es lo mismo que str + resto
    num = Math.floor(num/2) // redondea al entero hacia abajo
  }
  return bin;
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}