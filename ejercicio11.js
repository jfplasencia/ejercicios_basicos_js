const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  let suma = 0;
  let total = list.length;
  
  for (let i = 0; i < total; i++ ) {
    component = list[i];   
    if (typeof component  === 'number'){
      suma = suma + component;
    }
    else if (typeof component  === 'string'){
      suma = suma + component.length;
    }
  }
  return suma / component;
}

console.log(averageWord(mixedElements));
