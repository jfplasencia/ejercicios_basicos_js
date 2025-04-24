const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
  let longword = "";
  for (let i = 0; i < stringList.length; i++){
    if(stringList[i].length > longword.length){
      longword = stringList[i];
    }
  }
  return longword;
}

console.log(findLongestWord(avengers));

