
// Coding challenge - Write a program to find the numbers that most frequently occurred from a given array of numbers. Return top k frequently recurred numbers as output. 

var input = [1, 1, 2, 2, 2, 2, 3, 4, 4, 4];
var output = [2, 4];

function findFrequent(arr, k) {
  var obj = {};
  for (let item of arr) {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
  }

  let resArr = []
  for (let i = 0; i < k; i++) {
    let frequentItem;
    let occurence = 1;

    for (let key in obj) {
      if (obj[key] > occurence) {
        occurence = obj[key];
        frequentItem = key;
      }
    }

    resArr.push(frequentItem);
    delete obj[frequentItem]
  }

  console.log(resArr)

}

findFrequent(input, 2)
