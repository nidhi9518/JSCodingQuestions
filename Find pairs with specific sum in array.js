arr = [1,4,5,3,2,6] ;
var n = 7 ;

// output= {1,6}, {2,5}, {4,3} 


function printPairs(arr, n) {
  let obj = {};
  arr.forEach((el, index) => {
    obj[el] = index;
  })
  
  for(let key in obj) {
    let diff = n - key;
    if(obj.hasOwnProperty(diff)) {
      console.log(`{${key}, ${diff}}`);
      delete obj[diff];
    }
  }
}

printPairs(arr, n) ;
