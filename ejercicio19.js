const toys = [
  {id: 5, name: 'Transformers'}, 
  {id: 11, name: 'LEGO'}, 
  {id: 23, name: 'Hot Wheels'}, 
  {id: 40, name: 'Rascador de gato'},
  {id: 40, name: 'FurReal Friends gato interactivo'},
  {id: 60, name: 'Nerf Blaster'},
  {id: 71, name: 'Sylvanian Families - Familia gato'}
];
function removeToysCat(list){
  let filter = [];
  for (let i of list){
    if(!i.name.includes('gato')){
      filter.push(i);
    }
  }
  return filter;
}

console.log(removeToysCat(toys));
