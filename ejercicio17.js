const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
};

for (let i in alien){
  console.log('La propiedad ' + i + ' tiene como valor: ' + alien[i]);
}