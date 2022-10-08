export const mapperDictionaryToArray = (dictionary) =>  
Object.entries(dictionary).map((c, index) => ({id: c[0], name: c[1], value: index}))

export const sortedArrayByName = (arr) => 
arr.sort(function(a, b){
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

export const filterArrayByValue = (arr, e) => arr.filter(c => c.value.toString() === e.target.value)[0];
    