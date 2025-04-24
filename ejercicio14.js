const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  let count=[];
  let word;
  for (let i = 0; i < list.length; i++){
    word = list[i];
    if (count[word]){
      count[word] = count[word] + 1;
    }
    else{
      count[word] = 1
    } 
  }
  return count;
}

console.log (repeatCounter(words));