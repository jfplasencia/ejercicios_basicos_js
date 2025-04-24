const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0;
  let total = numberList.length;
  
  for (let i = 0; i < total; i++ ) {
    let component = numberList[i];
    suma = suma + component;
  }   
  return suma;
}

console.log (sumNumbers(numbers));
