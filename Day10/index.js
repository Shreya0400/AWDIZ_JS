
// Find 2 numbers from array whose addition is target .

// var array = [1, 2, 3, 4, 5]; //length -> 4
// var target = 6;

// function FindTarget(array,target) {
//     for (var i = 0; i < array.length - 1; i++){  // 0 1 2 3 -> i 
//       for (var j = i + 1; j < array.length; j++)
//       {
//         console.log(array[i], array[j]); //1 2 3 4 -> j
//         // if (array[i] + array[j] == target)
//         // {
//         //   console.log("anwer/");
//         // console.log(array[i], array[j]);
//         // }
//       }
//     }
// }
// FindTarget(array,target);

// Find 3 numbers from array whose addition is target .

// var array = [5, 6, 7, 8, 9, 4, 5, 7, 6, 3, 8, 2, 4, 5, 9];
// var target = 10;


// function FindThreeNumber(array, target) {
//   var results = [];
//   for (var i = 0; i < array.length - 2; i++) {
//     for (var j = i + 1; j < array.length - 1; j++) {
//       for (var k = j + 1; k < array.length; k++) {
//         //console.log(array[i], array[j], array[k]);
//         if (array[i] + array[j] + array[k] === target) {
//           results.push([array[i], array[j], array[k]]);
//          }
//       }
//     }
//   }
//   return results;
// }

// console.log(FindThreeNumber(array, target));

// var array = [1, 2, 3];
// console.log(array)
// array.push(4);
// console.log(array);
// array.pop();
// array.pop();
// console.log(array);
// array.unshift(4, 5);
// array.unshift(6);
// console.log(array);
// array.shift();
// console.log(array);

// var students = ["virat", "rohit", "rahul", "rishabh"];
// console.log(students)

// students.splice(1, 1, "Rahul");
// console.log(students)

// students.splice(2, 0, "Rishabh"); // ['v', R, Ri, r]
// console.log(students)

// students.splice(0, 1, "a"); // a R ri , r
// console.log(students)

// students.splice(3, 0, "b"); // a , r, ri, b,r
// console.log(students);


// const newArray = students.slice(0, -1);
// console.log(newArray);
// const todo = ["Do assignment", "Eat lunch", "Go home"];
// todo.splice(1, 1);
// console.log(todo);

// const array3 = [1, 2, "a", "1a"];
// console.log(array3.toString());

// //// Expected output: "1,2,a,1a"

// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);

// const array2 = [1, 30, 4, 21, 100000];
// array2.sort();
// console.log(array2);

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a, b) => a - b);
// array1.sort((a, b) => b - a);
// console.log(array1);


// //end

// // function(){}

// // const Myfunction = (message) => {
// //   console.log(message);
// // };
// // Myfunction("Hii");

// // function MyFunction() {
// // }
// // MyFunction();

// // const MyFunciton = () => {
// // };
// // MyFunciton();
var array = [1, 2, 3, 4, 5];
var target = 6;
// 1 + 4 =  5
// 2 +3  = 5
// 1 4
// 2 3
function FindTarget(array, target) {
  for (var i = 0; i < array.length - 1; i++) {
     console.log(array[i], "i");
    for (var j = i + 1; j < array.length; j++) {
       console.log(array[j], "j");
      // if (array[i] + array[j] === target) {
      //   console.log(array[i], array[j]);
      // }
      // j++
    }
    //   i++
  }
}
FindTarget(array, target);