// 1. Write a program to increment age by 1 if birthday.

const isBirthday = true;
let age = 24;
// your code here
if (isBirthday) {
  age = age + 1;
}

console.log('Program 1:');
console.log(`Current Age: ${age}`);
console.log('\n');

// 2. The condition has been written to print the message. Declare all the necessary variables needed and calculate ticket price based on age. Use appropriate declarations. If the passenger age is greater than 60, then there is a 15% discount on the ticket price.

// your code here
const passengerAge = 61;
const ticketPrice = 2500;
const discount = (ticketPrice * 15) / 100;
const discountedPrice = ticketPrice - discount;
if (passengerAge > 60) {
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log('\n');

// 3. Declare three variables, num1, num2 and num3 and write a program to find out if third number the largest. Print appropriate message as per the values taken.
const num1 = 10;
const num2 = 19;
const num3 = 15;
if (num3 > num1 && num3 > num2) {
  console.log(`The third number ${num3} is  the largest.`);
} else {
  console.log(`The third number ${num3} is not  the largest.`);
}

// . Define four items (Saree, Kurta, Jeans, Shoes) and their respective prices in a shopping cart. Use appropriate variable declarations. Calculate the total cart price by summing up the individual prices of all items.

// Determine the delivery charge status based on the total cart price. If the total cart price is less than 1999, set an optional delivery charge of 99 and update the total cart price accordingly. If the total cart price is 1999 or more, indicate "No Delivery Charge" in the delivery charge status. Finally print the Shopping Cart with Optional Delivery Charge.

const Saree = 1000;
const Kurta = 300;
const Jeans = 900;
const Shoes = 100;
const cartPrice = Saree + Kurta + Jeans + Shoes;
console.log(`Shopping Cart:`);
console.log(`-----------------------`);
console.log(`Item: Saree,Price:${Saree}`);
console.log(`Item: Kurta,Price:${Kurta}`);
console.log(`Item: Jeans,Price:${Jeans}`);
console.log(`Item: Shoes,Price:${Shoes}`);
console.log(`-----------------------`);
if (cartPrice > 1999) {
  console.log(`Delivery Charges:No delivery Charge`);
  console.log(`Total Cart Price:${cartPrice}`);
} else {
  console.log(`Total Cart Price:${cartPrice + 99}`);
  console.log(`Delivery Charges:Rs 99`);
}

// 5. Declare appropriate variable and write code to check if a number is positive or negative.

// If the number is greater than zero, print a message indicating that the number is positive.
// If the number is less than zero, print a message indicating that the number is negative.
// If the number is exactly zero, print a message indicating that the number is zero.

let number = 10;
if (number > 0) {
  console.log(`the number is positive`);
} else if (number == 0) {
  console.log(`the number is zero`);
} else {
  onsole.log(`the number is negative`);
}

// 6. Find the students with highest marks. Declare three variables marks1, marks2 and marks3 to represent the marks of three students. Assign them the values 85, 90, and 78, respectively. Declare three variables for student names student1, student2 and student3. Assign them the values Rahul, Priya, and Tina, respectively.

// If student1 has the highest marks, print a message to the console indicating that student 1 has the highest marks, in the following format: "Rahul has the highest marks: {marks1}". Print similar message if any other student has highest marks.
const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = `Rahul`;
const student2 = `Priya`;
const student3 = `Tina`;
if (marks1 > marks2 && marks1 > marks3) {
  console.log(`${student1} has the highest marks: ${marks1}`);
} else if (marks2 > marks1 && marks2 > marks3) {
  console.log(`${student2} has the highest marks: ${marks2}`);
} else {
  console.log(`${student3} has the highest marks: ${marks3}`);
}
