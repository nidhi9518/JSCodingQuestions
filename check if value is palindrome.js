var input = "nonon";
var output = true;
function checkPalindrome(value) {
  if(!value) return false;
  
  let str;
  if( isNaN(value)) {
    str = value.length>1 ? str = value.split(' ').join('') : value;    
  } else {
    str = value.toString();
  }
 
  return str.split('').reverse().join('') === str;
}

console.log(checkPalindrome(input))