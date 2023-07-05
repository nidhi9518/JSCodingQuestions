var arr = [1,2,[3,4],[5,[6, [7]]]];

function flat(arr) {
  var outputarr = [];
  
  function handleFlatOp(inputarr) {
    
    inputarr.forEach(el => {
      if(Array.isArray(el)) {
        handleFlatOp(el);
      } else {
        outputarr.push(el);
      }
    })
    
  }
  
  handleFlatOp(arr);    
  console.log(outputarr)
}

flat(arr)