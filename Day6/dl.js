function CheckAge() {
    // console.log(document.getElementById("number").value);
    //   alert("Function called.");
    const age = document.getElementById("age").value;
    console.log(age, "age");
    if (!age) {
      console.log("Please type your age.");
      alert("Please type your age.");
    }
    else if (age >= 18) {
        console.log("You are not eligible for DL");
        alert("You are eligible for permanent license.");
    }
    else if (age > 16) {
        //console.log("You are not eligible for DL");
        alert("You are eligible for learning license.");
      }
    else if (age >= 16) {
      console.log("your are eligilble for learning license.");
      //alert(`Number ${number} is Even.`);
    } else if (age < 16) {
     // console.log("You are not eligible for DL");
      alert("You are not eligible for driving license");
    }
      
  }