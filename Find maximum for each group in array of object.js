// Coding test - finding out maximum price in a json data of objects and find max/min for each group 

var z = [
    {
        "Company": "Microsoft",
        "date": "2022-02-15",
        "price": 198
    },
    {
        "Company": "Microsoft",
        "date": "2022-02-15",
        "price": 202,
    },
    {
        "Company": "Microsoft",
        "date": "2022-02-15",
        "price": 10
    },
    {
        "Company": "Apple",
        "date": "2022-02-15",
        "price": 202
    },
    {
        "Company": "Apple",
        "date": "2022-02-15",
        "price": 900
    }
]

function maxmin(arr) {
  let obj = {};
  for(let item of arr) {
    if(!obj.hasOwnProperty(item.Company)) {
      obj[item.Company] = {min: item.price, max: item.price}
    } 
    else {
      console.log(item.Company, item.price)
      if(item.price<obj[item.Company].min) {
        obj[item.Company].min = item.price
      }
      if(item.price>obj[item.Company].max) {        
        obj[item.Company].max = item.price
      }
    }
  }
  console.log(obj);
  
}

maxmin(z);

  




























