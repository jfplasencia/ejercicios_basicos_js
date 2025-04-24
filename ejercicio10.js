const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let suma = 0;
  let total = numberList.length;
  
  for (let i = 0; i < total; i++ ) {
    suma = suma + numberList[i];
  }   
  let promedio = suma / total;
  return promedio;
}

console.log (average(numbers))