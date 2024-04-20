
// console.log("Hello");
// Difference between var let const
// 1. redeclare and reassign
//          redeclare       reassign
// var ->   possible        possible
// let ->   not possible    possible
// const->  not possible    not possible

// 2. Scope

// var - global scope
// let const - block scope

// 3. Hoisting
// var - hoisting applicable
// let const - hoisting not applicable

// 2. Scope

// console.log("Hii");

// console.log("Hii 2");

function Greeting() {
    console.log("Hello there.");
  }
  console.log(Greeting());
  
  {
    var number = 20;
  }
  console.log(number);
  
  {
    let number = 10;
  }
  console.log(number);
  
  {
    let number = 10;
    {
      console.log(number);
    }
  }
  
  // console.log(number);
  
  let firstNumber = 100;
  {
    const secondNumber = 84;
    var thirdNumber = 33;
    console.log(firstNumber);
    {
      {
        console.log(thirdNumber);
        console.log(firstNumber);
      }
      console.log(secondNumber);
    }
  }
  console.log(thirdNumber);
  
  mynumber = 11;
  console.log(mynumber);
  

// var mynumber;
  
  
//   mynumber = 44;
//   console.log(mynumber);
  
//   let mynumber;
  