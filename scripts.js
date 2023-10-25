//***************************** Exercise 1 - Formatting Names ****************************/

let userName1 = "John L James";
let userName2 = "corina SMITH";
let userName3 = "Miss Sunny sunshine";
let userName4 = "Ms. Emily Dworetz";
let userName5 = "micah caine";
let userName6 = "WILLIAM Montgomery";
let userName7 = "Dorothy Chou LLP";
let userName8 = "   Lisette Rivera";
let userName9 = "Edward chistopher Olmos";
let userName10 = "Dr. Violet Smith";

// Modify the strings here

let firstName1 = userName1.slice(0, 4) 
let lastName1= userName1.slice(7, 12);

let firstName2 = userName2[0].toUpperCase() + userName2.slice(1, 6);
let lastName2 = userName2[7] + userName2.slice(8).toLowerCase();

let firstName3 = userName3.slice(5, 10);
let lastName3 = userName3[11].toUpperCase() + userName3.slice(12);

let firstName4 = userName4.slice(4, 9);
let lastName4 = userName4.slice(10, 17);

let firstName5 = userName5[0].toUpperCase() + userName5.slice(1, 5);
let lastName5 = userName5[6].toUpperCase() + userName5.slice(7, 11);

let firstName6 = userName6[0] + userName6.slice(1, 7).toLowerCase();
let lastName6 = userName6.slice(8, 18);

let firstName7 = userName7.slice(0, 7);
let lastName7 = userName7.slice(8, 12);

let firstName8 = userName8.trim().slice(0, 7);
let lastName8 = userName8.slice(11, 17);

let firstName9 = userName9.slice(0, 6);
let lastName9 = userName9.slice(18);

let firstName10 = userName10.slice(4, 10);
let lastName10 = userName10.slice(11);

/**************************** Exercise 2  - Formatting Dates ****************************/

// Run the following code in the browser.
let todaysDate = new Date();
console.log(todaysDate);

// Change the string above to only show the date.
let dateOnly = new Date().toISOString().split('T')[0];
console.log(dateOnly);

// // Change the string to be MM/DD/YYYY.
let dateType = new Date ('08-15-2023');
console.log(dateType)

// Run the following code in the browser.
let futureDate = ('2025-10-31');
let futureDateFormatted = new Date(futureDate);
console.log(futureDateFormatted);

//Manipulate the above string to display it in the MM/DD/YEAR format.
let newFutureDate = ('10-31-2025');
console.log(newFutureDate);


/**************************** Exercise 3 - Formatting Emails ****************************/
let email1 = "INFO@airbnb.com";
let email2 = "lukeDanes@thediner.com";
let email3 = "testingAccount@gmail.com";
let email4 = "gracehopper@academy.COM";
let email5 = "roslinaccounting  @gmail.com";

// Modify the strings here
let correctEmail1 = (email1.toLowerCase());
let correctEmail2 = (email2.toLowerCase());
let correctEmail3 = (email3.toLowerCase());
let correctEmail4 = (email4.toLowerCase());
let correctEmail5 = (email5.trim().slice(0,16) + email5.slice(18));

/**************************** Exercise 4 - Formatting Passwords  ****************************/
// For the following password, check to see if contains more than 12 characters. Display an alert that says, "Password is [NUMBER] characters long."
let password = "mypass123";
console.log(password.length);

//if (strongPasswordAlert > 12) {
 // alert(`Your password is ${password.length} characters long.`);
 // }else {alert("Please follow the password instructions");
 // };

// What is the following code doing?
//Its checking inside a string for special characters.

// Resource here: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let string = "Hello World!";
console.log(specialChars.test(string));
//Its checking for special characters in string

// How would you run the above test on the password given above?
console.log(specialChars.test(password));

// How would you check to see if a string contains numbers? 
let stringContainNumbers = /\d/;
console.log(stringContainNumbers.test(string));
let strongPassword = "!AnnTech2023!";
let strongPasswordAlert = password.length;

if (strongPasswordAlert >= 1-12 && /[A-Z]/.test(strongPassword) && /\d/.test(strongPassword) && /[!@#$%^&*=+]/.test(strongPassword)) {
  alert(`Your current password is ${strongPasswordAlert} characters long!`);
} else {
  alert(`Please change your password according to the 'Password Security Policy'.`);
}
console.log(/\d/.test(password));


//(https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters)



/**************************** Exercise 5 - Concatenation  ****************************/

// Declare two variables and concatenate them to form a new string. Print the result to the console.
let statuss = "almost done";
let exercise = "js-working-with-strings";
let assignment = statuss + " " + exercise;
console.log (assignment);//almost done js-working-with-strings

// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.
let work = "almost done";
let pending = "js-working-with-strings";
console.log(`anchal is ${work} with ${pending}!`);
//anchal is almost done with js-working-with-strings!

/**************************** Exercise 6 - Research  ****************************/
// Add your methods and examples of each method here.
const worldString = "Hello, world";

console.log(worldString.toUpperCase(2)); 
console.log(worldString.trim(2)); 
console.log(worldString.length); 
console.log(worldString.toLowerCase(3));
console.log(worldString.slice(3)); 