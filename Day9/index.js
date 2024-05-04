
// Datatypes
// String
// Number
// Boolean
// undefined
// console.log()
// typeof()
// Varibles
// Var
// let
// const
// Scope
// block
// hoisting

// Conditional Statement
// 1. if else
// 2. switch

// Logical Operators
// && ||

// Function;
// Traditional function
// array
// loops - for
// ++ --

// nested for loops

// for (Start; end; sequence) {
//   for (start; end; sequence) {
//     for (start; end; sequence) {}
//   }
// }

// Q Given an array, find two numbers whose addition is target.

var array = [1, 2, 3, 4, 5, 6];
var target = 8
var count = 0;
for (var i = 0; i < array.length; i++) {
  
  for (var j = i + 1; j < array.length; j++) {
    
    //sum = array[i] + array[j];
    if(array[i] + array[j] == target){
      console.log(array[i], array[j]);
    }
  }
}
