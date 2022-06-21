'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let res = 0;
  let pos = 0;

  for ( let i = num.length - 1; i >= 0; i-- ) {
    res += num[i] * (2 ** pos);
    pos++;
  }
  return res;
}

function DecimalABinario(num) {
  // tu codigo aca
  let resto = '';
  if (num === 0) {
    resto = '0';
  }
  while (num > 0) {
    resto = num % 2 + resto; 
    num = Math.floor(num / 2); 
  }
  return resto;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}