function BinarioADecimal(num) {
  // tu codigo aca

//MI CODIGO
//  let intArr = Array.from(String(num));

// let binRev = num.reverse();

// let array = binRev.map(function(element, index){
//     return (element*(2**index));
// });

// console.log(array);
// array.reduce(function (total, number) {
//   return total + number;
// });  

let sumatoria = 0;
for (let i = 0; i < num.length; i++) {
  sumatoria = sumatoria + num[i] * 2 ** (num.length -1 -i)
}
return sumatoria;

}
function DecimalABinario(num) { //D/2%
  // tu codigo aca
  let str = "";
  while(num > 0) {
    let resto = num % 2; // 
    str = resto + str;
    num = Math.floor(num/2) //redondea al entero hacia abajo
  }
  return str;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}