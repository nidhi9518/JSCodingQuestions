var arr = [2, 10, 34, 43, 11, 1, 2, 3, 4, 1];
var m = 3;


function findLargestSum(arr, m) {
  var largestSum = 0;
  var subarr = [];
  for (let i = 0; i < arr.length; i++) {

    if (i + m > arr.length) break;
    let sum = 0;
    let subArr = [];
    for (let j = i; j < i + m; j++) {
      subArr.push(arr[j])
      sum = sum + arr[j];

    }
    if (sum > largestSum) {
      largestSum = sum;
      subarr = subArr;
    }
  }
  console.log(subarr)
}



findLargestSum(arr, m)