// //   task 1
function square(num){
    return Math.pow(num,2);
    // return num*num;
}

const num1=prompt("Enter the number: ");
if(isNaN(num1)){
    alert("Not a number, please enter a number.");
}
else alert(square(num1));


// //   task 2
let celsiusToFarenheit = (num) =>{
    return num * 33.8;
}

let temp = prompt("Enter temperature in celsius: ");
alert(isNaN(temp) ? "Not a number" : celsiusToFarenheit(temp));



// //    task 3
function stringBackwards(str){
    let arr = str.split("");
    let newStr = "";
    let i = 0;
    while(i <= arr.length - 1){
        newStr += arr[arr.length - (i+1)];
        i++;
    }
    return newStr;
}

let str = prompt("Enter a word");
alert(stringBackwards(str));


//    task 4
let vegetables = prompt("Enter a veggie either carrot or broccoli: ");
switch(vegetables){
    case "carrot":
    case "Carrot":
        alert("Hello");
        break;
    case "broccoli":
    case "Broccoli":
        alert("Welcome");
        break;
    default:
        alert("neither carrot nor broccoli");
}

//   task 5
let action = "move";

switch(action){
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("Invalid action!");
}