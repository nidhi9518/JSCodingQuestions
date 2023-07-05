// Group the json obj with same state name 
var obj = [{ state: 'MP', city: 'Indore' }, { state: 'MP', city: 'Bhopal' }, { state: 'UP', city: 'Mirzapur' }]
var output =[{ state: 'MP', city: ['Indore', 'Bhopal'] }, { state: 'UP', city: ['Mirzapur'] }];


function formatJson(arr) {
  var obj = {}
  arr.forEach(el => {
    if(!obj.hasOwnProperty(el.state)) {
      obj[el.state] = el;
      obj[el.state].city = [el.city];
    } else {
      obj[el.state].city.push(el.city);
    }
  })
  
  return Object.values(obj);
  
}

console.log((formatJson(obj)));