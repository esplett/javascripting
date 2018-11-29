var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function (a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return 0;
  } else if (nameA > nameB) {
    return 2;
  } else if (a.age > b.age) {
    return -1;
  } else {
    return 1;
  }
})

console.log(students);


//sort students in alphabetical order.
//name ascending alphabetically
// if students have same name, descending age
//name, older student = first.

//REFERENCE


// var array = [10, 2, 5, 1, 9];
// array.sort(function(a,b){
//   return a - b
// })

// console.log(array);


var array = [10, 2, 5, 1, 9];
array.sort(function(a,b){
  return a - b
})

console.log(array);


//Sort numerically and ascending:
// var myarray=[25, 8, 7, 41]
// myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
//     return a - b
// })


//ANSWER [1, 2, 5, 9, 10]
