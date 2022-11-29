"use strict";

function BinarioADecimal(num) {
  let cero = 0;
  for (let i = 0; i < num.length; i++) {
    cero = cero + num[i] * 2 ** (num.length - 1 - i);
  }
  return cero;
}
function DecimalABinario(num) {
  let binario = Number(num).toString(2);
  return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
