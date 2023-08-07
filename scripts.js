/***************************** Exercise 1 - Formatting Names ****************************/

let userName1 = "John L James";
let userName2 = "corina SMITH";
let userName3 = "Miss Sunny sunshine";
let userName4 = "Ms. Emily Dworetz";
let userName5 = "micah caine";>
let userName6 = "WILLIAM Montgomery";
let userName7 = "Dorothy Chou LLP";
let userName8 = "   Lisette Rivera";
let userName9 = "Edward chistopher Olmos";
let userName10 = "Dr. Violet Smith";

// Modify the strings here

let firstName1 = userName1.slice(0, 4);
let lastName1 = userName1.slice(7);

let firstName2 = userName2.slice(0, 5);
let lastName2 = userName2.slice(7);
firstName2 = userName2[0].toUpperCase();

/**************************** Exercise 2  - Formatting Dates ****************************/

// Run the following code in the browser.
let todaysDate = new Date().toISOString();
console.log(todaysDate);

// Change the string above to only show the date.
let futureDateFormatted = new Date(futureDate)
console.log(futureDateFormatted);


// Change the string to be MM/DD/YYYY.
futureDate = "10-31-2025";
console.log(futureDate);

// Run the following code in the browser.
let futureDate = "2025-10-31";
let futureDateFormatted = new Date(futureDate);
console.log(futureDateFormatted);

//Manipulate the above string to display it in the MM/DD/YEAR format.

/**************************** Exercise 3 - Formatting Emails ****************************/
let email1 = "INFO@airbnb.com";
let email2 = "lukeDanes@thediner.com";
let email3 = "testingAccount@gmail.com";
let email4 = "gracehopper@academy.COM";
let email5 = "roslinaccounting  @gmail.com";

// Modify the strings here
email1 = email1.toLowerCase();
email2 = email2.toLowerCase();
email2 = email3.toLowerCase();
email2 = email4.toLowerCase();
email2 = email5.trim(16).toLowerCase();

console.log(email1,email2,email3,email4,email5);

/**************************** Exercise 4 - Formatting Passwords  ****************************/
// For the following password, check to see if contains more than 12 characters. Display an alert that says, "Password is [NUMBER] characters long."
let password = "mypass";

// What is the following code doing?
// Resource here: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let string = "Hello World!";
console.log(specialChars.test(string));

// How would you run the above test on the password given above?

// How would you check to see if a string contains numbers?

/**************************** Exercise 5 - Concatenation  ****************************/

// Declare two variables and concatenate them to form a new string. Print the result to the console.

// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.

/**************************** Exercise 6 - Research  ****************************/
// Add your methods and examples of each method here.
