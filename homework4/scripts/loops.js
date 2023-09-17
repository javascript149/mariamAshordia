// task 1
// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე.
// შეასრულეთ ეს დავალება ციკლების მეშვეობით.


// let arr = [];

// let userInput = () =>{
//     let i = 0;
//     while(i<10){
//         let num = prompt("Please, enter a number:");
//         arr.push(num);
//         i++;
//     }
// }

// let array = [];

// function thirdElement(){
//     for(let count = 0; count<arr.length; count++){
//         if(count % 3 === 2){
//             array.push(arr[count]);
//         }
//     }

//     return array;
// }

// userInput();
// console.log(thirdElement());


//     task 2
// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.


// for(let count = 10; count > 0; count--){
//     console.log(count);
// }



//     task 3
// მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] 
// შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

//with a loop
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
// function withoutBob(arr){
//     let newNames = [];
//     for(let count = 0; count < arr.length; count++){
//         if(arr[count] !== 'Bob'){
//             newNames.push(arr[count]);
//         }
//     }
//     return newNames;
// }
// console.log(withoutBob(names));

//without a loop
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
// names.pop();
// names.pop();
// names.splice(2,1);
// names.splice(3,1);
// console.log(names)



//     task 4   
//ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, 
//მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3,
//მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

// function power(number, power){
//     let i = 1,result = 1;
//     while(i <= power){
//         result *= number;
//         i++;
//     }
//     return result;
// }

// function power(number, power){
//     let result = 1;
//     for(let i = 1; i <= power; i++){
//         result *= number;
//     }
//     return result;
// }

// function power(number, power){
//     return number**power;
// }


// let num = prompt("Enter a number:");
// let pow = prompt("Enter an exponent:");
// console.log(power(num,pow));

//     task 5
//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც
//იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, 
//ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
// მაგ.
// 1
//  2
// 3 Fizz
// 4
// 5 Buzz
// 6 Fizz
// 7
// 8
// 9 Fizz
// 10 Buzz
// 11
// 12 Fizz
// 13
// 14
// 15 FizzBuzz
// … 100-მდე.

// function createArray(num){
//     let array = [];
//     for(let i = 1; i <= num; i++){
//         //array.push(i);
//         array[i -1] = i;
//     }
//     return array;
// }

// function func(arr){
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
//             console.log(`${arr[i]} FizzBuzz`);
//         }
//         else if(arr[i] % 3 === 0){
//             console.log(`${arr[i]} Fizz`);
//         }
//         else if(arr[i] % 5 === 0){
//             console.log(`${arr[i]} Buzz`);
//         }
//         else{
//             console.log(arr[i]);
//         }
//     }
// }

// let arr = createArray(100)
// console.log(arr);
// func(arr);




//     task 6   
// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის
//სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

// function factorialCalculator(num){
//     num = Number(num);
//     if(Number.isInteger(num)){
//         if(num === 0 || num === 1){
//             return 1;
//         }
//         else if(num > 1){
//             let result = 1;
//             for(let i = 2; i <= num; i++){
//                 result *= i;
//             }
//             return result;
//         }
//         else{
//             return 'Number has to be positive!';
//         }
//     }
//     else{
//         return 'Invalid input! Please, enter an integer number.';
//     }
     
// }


// let userInput = prompt("Enter a number:");
// console.log(factorialCalculator(userInput));


//    task 7
//შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: 
// Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

// let capitalizeFunction = (str) =>{
//     let arr = str.split('');
//     arr[0] = arr[0].toUpperCase();
//     str = arr.join('');
//     return str;
    
// }

// let userInput = prompt('Please, enter a word you want to capitalize:');
// console.log(capitalizeFunction(userInput));

//     task 8
//შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. 
//blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

// function blankStringChecker(testString){
//     testString.length === 0 ? console.log('This string is blank') : console.log('This string is not blank');
// }

// let str = "";
// let str1 = "dog";
// blankStringChecker(str);
// blankStringChecker(str1);



//     task 9
//შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => 
//თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]


// function strToArray(str){
//     let arr = str.split(' ');
//     return arr;
// }

// let userInput = prompt("Enter a sentence: ");
// console.log(strToArray(userInput));

//     task 10
//შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით
// გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  
//beqa……..@gmail.com. წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

// function emailProtection(email){
//     let arr = email.split('');
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === '.'){
//             for(let j = i + 1; true ; j++){
//                 if(arr[j] === '@'){
//                     email = arr.join('');
//                     return email;
//                 }
//                 arr[j] = '.';
//             }
//         }
//     }

        
//     }


// let userEmail = prompt("Enter your email: ");
// console.log(emailProtection(userEmail));