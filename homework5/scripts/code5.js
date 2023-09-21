// 1.შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
// function stringToArray(str){
//     let arr = str.split(' ');
//     return arr;
// }

// let arr = stringToArray(prompt('Enter a sentence:'));

// function maxWord(arr){
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i].length > max.length){
//             max = arr[i];
//         }
// }
//     return max;
// }

// console.log(maxWord(arr));

//2.შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5},
//დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი
// რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.

// let calculator = {
//     num1:10,
//     num2:5,
//     add:function(){return this.num1 + this.num2;},
//     substract:function(){return this.num1 - this.num2;}
// }
// calculator.multiply = function(){
//     return this.num1 * this.num2;
// }
// calculator['divide'] = function(){
//     return this.num1 / this.num2;
// }

// console.log(calculator.add(),calculator.substract(),calculator.multiply(),calculator.divide());


//3.შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების 
//შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

/*
მომხმარებელს შემოაქვს წინადადება და ჩვენი მიზანია შევქმნათ ფუნქცია,რომელიც ამ წინადადებაში არსებულ სიტყვებს დაალაგებს ამ სიტყვების სიგრძეების
ზრდადობის მიხედვით.
*/

// console.log(sortedWords(prompt('Enter a sentence:')));//ფუნქციის გამოცხადებამდე და განსაზღვრებამდე ხდება მისი გამოძახება,რაც შეცდომას
                                                        // არ გამოიტანს ჰოისტინგის გამო
 
                                                        
                                                        

// function sortedWords(str){
//     let arr = str.split(' ');
//     arr = arr.sort(function(word1, word2){
//         return word1.length - word2.length;
//     })
//     return arr;
// }

