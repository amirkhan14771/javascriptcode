// Question 1
// Create Bill Calculator

// Ask below Questions

// How many french fries(60rs per piece) do you want to order ?
// How many burgers(50rs per piece) do you want to order ?
// How many plates of chowmin(100rs per plate) do you want to order ?
// How many plates of Manchurian(80rs per plate) do you want to order ?
// How many Cokes(50 per piece) do you want to order ?
// Use can enter any number of quantities.Calculate the bill based on the quantities entered and item prices.If user enteres 0 or negative value then consider item count as 0.

// Question 2
// Print below Pattern
// $##$##$
// $##$##
// $##$
// $##
// $

// Question 3
// Ask the user question "How many times do you want to print Series".Then print below series.For example below series will print if user enteres 5

// 2, 6, 30, 260, 3130 Find the pattern for above series and print accordingly.If the user enters 10 then we will print the same series numbers till 10 times.

// Question 4
// Using a switch case to do this exercise

// If number is odd then print Odd
// If number is even then print Even
// If number is 100 then print 100
// Else print 10000

// let num = +prompt("Enter Number")
// switch (num) {
//     case 100:
//         console.log(100);
//         break;
//     default:
//         if (num % 2 === 0) {
//             console.log("Yes");
//         } else {
//             console.log("No");
//         };
//         break;

// }
// if (num != 100 && num % 2 === 1) {
//     console.log(1000);
// }


// Question 5
// Ask user his / her birth year, "What is your birth year?"
// If user age is greater than 18 then ask user "Do you have valid license number?" If user click on Okay then ask for his license number and finally in the alert show message "User with license number #### is ready to drive."
// If user age is less than 18 then ask him question in confirm box "Do you have gaurdians ?"" If user says yes then ask his/her Gaurdian name and then in alert show "You are ready to drive with your ####(show gaurdian name here.)" Else show "Sorry visit again please." in alert box

// let birthYear = +(prompt("What is your birth year?"));
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;

// if (age > 18) {
//     let hasLicense = confirm("Do you have valid license number?");
//     if (hasLicense) {
//         let licenseNumber = prompt("Enter your license number:");
//         alert(`User with license number ${licenseNumber} is ready to drive.`);
//     }
// } else if (age < 18) {
//     let hasGuardian = confirm("Do you have guardians?");
//     if (hasGuardian) {
//         let guardianName = prompt("Enter your guardian's name:");
//         alert(`You are ready to drive with your ${guardianName}.`);
//     } else {
//         alert("Sorry, visit again please.");
//     }
// }


// Question 6
// Take any number and take other number as 19. Now check their difference by subtracting each other.If both numbers difference is greater than 19 then print triple their absolute difference else print double their absolute difference.

// let num1 = +(prompt("Enter a number:"));
// let num2 = 19;

// let diff = Math.abs(num1 - num2);

// if (diff > 19) {
//     console.log(diff * 3);
// } else {
//     console.log(diff * 2);
// }


// Question 7
// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

// If yes then print sum of both the numbers Else print multiplication of both numbers

// Question 8
// Write a JavaScript program to check if out of 4 numbers any two numbers are same or not.If yes then print Yes else print No.

// Question 9
// Write a program to check if a number is palindrome or not.It means 141 and 12221 both are examples of palindrome number.If number is palindrome then print yes else print no

// Question 10
// Take a String and check its length.If string length is greater than 10 then print from 1 to length of the string.else print No