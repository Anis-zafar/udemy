const express = require("express");
const app = express();
const fs = require("fs");
const { stringify } = require("querystring");
const port = 3000;
const util = require("util");
const morgan = require("morgan");
app.use(express.json());
const router = require("./routes/route");
const prompt = require("prompt");
const { getRandomValues } = require("crypto");
const Math = require("math");

let start = Date.now();
app.use(morgan("dev"));
app.use("/", router);

app.listen(port, (req, res) => {
  console.log("listening on port", port);
});

let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");

// const arr = [1, 4, 5]
// arr.splice(1,0,2,3)
// console.log(arr)
//number examples
// const number = 12.345
//  console.log(toString(100))
//  console.log(parseInt('44'))
//  console.log(parseInt('22.222'))
//  console.log(parseInt('Banana'))
//  console.log(parseFloat(12))
//  console.log(parseFloat(13.3))
//  var num1 = 10; console.log(num1.toFixed(2))
//  var num2 = 15.456789; console.log(num2.toFixed())
//  var num3 = 15.456789; console.log(num3.toFixed(2))
//  var num4 = 15.456789; console.log(num4.toFixed(3))
// String Exercise
// console.log('java is cool')
// console.log("this is a \"test\"string");
// console.log('this is another \'test\'string');
// console.log("how about this string??");

// in-Built string fucntions

// const str1 = "this  is a javascript string function string"
// console.log(str1.length);
// console.log(str1.indexOf('string'), str1.lastIndexOf("string"));
// console.log(str1.slice(-6));
// console.log(str1.substring(22, 28));
// console.log(str1.substring(38));
// //Exercise
// var str = "This is my test string to practice the JavaScript string function concepts.This is gonna be fun."
// console.log("First string length",str.indexOf("."));
// console.log("Second string length",str.length - str.indexOf("."));
// console.log("Total string length", str.length);
// console.log("First occurance of word this is ", str.indexOf('This'));
// console.log("Last occurance of word this is ", str.lastIndexOf("This"));
// console.log(str.slice(0, 12));
// console.log(str.slice(-13,-1));

// part 2 Built-in Functions of String

// const str = "This is my string"
// const str1 = "This is my second string"
// const str2 = "   This is my third string   "
// console.log(str.toUpperCase())
// console.log(str.toLowerCase());
// console.log(str.concat(".",str1));
// console.log(str + "." + str1);
// console.log(str2.trim());
// console.log(str.charAt(5));
// console.log(str.split(" "));

// Null and Undefinded in javaScript

console.clear();

// let a = null
// let b;
// console.log(typeof a);
// console.log(typeof b);
//Exercise
// console.log(undefined == null);
// console.log(undefined === null);

// conditional statement if:else

// var length = 200;
// var breadth = 200;

// if (length == breadth)
//   console.log("square");
// else
//   console.log('rectangle');

// var num1 = 215,
//   num2 = 181,
//   num3 = 121;

// if (num1 >= num2 && num1 >= num3)
//   console.log("num1 is greater");
// else if (num2 >= num1 && num2 >= num3)
//   console.log("num2 is greater");
// else
//   console.log("num3 is greater");

// Conditional statement Switch

// var curerntday = "sat";

// if (curerntday === "mon") console.log("timings:10:00-6:00");
// else if (curerntday === "tue") console.log("timing:10:00-5:00");
// else if (curerntday === "wed") console.log("timing:10:00-4:00");
// else if (curerntday === "thr") console.log("timing:10:00-3:00");
// else if (curerntday === "fri") console.log("timing:10:00-2:00");
// else if (curerntday === "sat") console.log("timing:10:00-1:00");
// else if (curerntday === "sun") console.log("timing:10:00-12:00");

// switch (curerntday) {
//   case "mon":
//     if (curerntday === "mon") console.log("timings:10:00-6:00");
//     break;
//   case "tue":
//     if (curerntday === "mon") console.log("timings:10:00-5:00");
//     break;
//   case "wed":
//     if (curerntday === "mon") console.log("timings:10:00-4:00");
//     break;
//   case "thr":
//     if (curerntday === "mon") console.log("timings:10:00-3:00");
//     break;
//   case "fri":
//     if (curerntday === "mon") console.log("timings:10:00-2:00");
//     break;
//   case "sat":
//     if (curerntday === "mon") console.log("timings:10:00-1:00");
//     break;
//   case "sun":
//     if (curerntday === "mon") console.log("timings:10:00-12:00");
//     break;
//   default:
//     console.log("no timings available");
// }
// //Exercise
// let char = "u"
// switch (char) {
//   case "a":
//     console.log("vowel");
//     break;
//   case "e":
//     console.log("vowel");
//     break;
//   case "i":
//     console.log("vowel");
//     break;
//   case "o":
//     console.log("vowel");
//     break;
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }
// const math = require("math");
// let num1 = math.ceil((math.random() * 10) + 1);
// let num2 = math.ceil(math.random() * 10 + 1);
// let num3= math.ceil(math.random() * 10 + 1);
// console.log(num1,num2,num3);
// console.log(--num1);

//Exercise
// var num1 = 1 + 5;
// var num2 = num1 / 4;
// var num3 = 1 + 5;
// var num4 = num3 / 4;
// console.log(num2 + " " + num4);

// var a = 1;
// var b = 2;
// var c;
// var d;
// c = ++b;
// d = a++;
// c++;
// b++;
// ++a;
// console.log(a + " " + b + " " + c,d);

// var input = 7;

// var output1 = input++ + ++input `+ input++;`
// console.log(output1)

//  student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// console.log(student.name, student.sclass,student.rollno);

// let customers_data = {
//   Ben10: [22, 30, 11, 17, 15, 52, 27, 12],
//   Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
//   Zeeshan: [22, 30, 11, 5, 17, 30, 6, 57],
// };

// let sum = customers_data.Ben10.reduce(function (a, b) { return a + b })
// if (customers_data.Ben10.length >= 5&&sum>=20) {
//   console.log("premium mermbership");
// } else {
//   console.log("not much order to grant a membership");
// }
// let sum1 = customers_data.Sameer.reduce(function (a, b) {
//   return a + b;
// });
// if (customers_data.Sameer.length >= 5 && sum >= 20) {
//   console.log("premium mermbership");
// } else {
//   console.log("not much order to grant a membership");
// }
// let sum2= customers_data.Zeeshan.reduce(function (a, b) {
//   return a + b;
// });
// if (customers_data.Zeeshan.length >= 5 && sum >= 20) {
//   console.log("premium mermbership");
// } else {
//   console.log("not much order to grant a membership");
// }

// let arr = ["asdf", "sd", "something", "right", "position"];

// function findLongestString(arr) {
//   let longestString = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longestString.length) {
//       longestString = arr[i];
//     }
//   }
//   return longestString;
// }
// const arr2 = findLongestString(arr);
// console.log(arr2);

// const arr = [NaN, 0, 15, false, -22, "", undefined, 47, null, 94];
// // function checkarr(arr) {
// //     for (let index = 0; index < arr.length; index++) {
// //       if (arr[index] != Number)
// //         arr.splice(arr[index], 1)
// //       }
// //       console.log(arr);
// // }

// // checkarr(arr)
// function removeFalsyValues(arr) {
//   return arr.filter(Number);
// }
// let filteredArr = removeFalsyValues(arr);
// console.log(filteredArr);

// arr1 = [1, 2, 3];
// arr2 = [3, 4, 5];
// var arr1 = [4, 11, 12, 23, 46, 65, 73, 98];
// var arr2 = [7, 13, 25, 46, 58, 70, 84];
// function checkCommonElement(arr1, arr2) {
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] === arr2[j]) {
//       return true;
//     } else if (arr1[i] < arr2[j]) {
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return false;
// }
// const result = checkCommonElement(arr1, arr2);
// console.log(result);

var arr1 = [4, 11, 25, 23, 499, 65, 70, 73, 98];
var arr2 = [7, 13, 5, 46, 58, 80, 84];

const ex = (ar1, ar2) => {
  return ar1.some((i) => ar2.includes(i));
};
console.log(ex(arr1, arr2));

// const data = arr1.find((i) => arr2.includes(i));
// console.log(data);
