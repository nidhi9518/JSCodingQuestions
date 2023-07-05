var arr = ["Nidhi", "Shreya", "Anamika", "Avantika", "Sia"];

function findLongestString(arr) {
  if(arr.length === 0) return undefined;
  let longestLength = 0;
  let resIndex = 0;
  
  arr.forEach((el, index) => {
    if(el.length > longestLength) {
      longestLength = el.length;
      resIndex = index;
    }
  })
  
  return arr[resIndex];
  
}

console.log(findLongestString(arr))