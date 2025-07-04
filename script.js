// // =======================
// // What is an Array?
// // =======================
// // An array is a variable that can store multiple values.
// // JavaScript arrays are objects. You can access items using index numbers starting from 0.

// let arr = ["arr1", "arr2", "arr3"];
// console.log(arr[0]); // Output: arr1
// console.log(arr[1]); // Output: arr2
// console.log(arr[2]); // Output: arr3

// // Array Methods
// arr.push("arr4"); // Adds value to the end
// arr.pop(); // Removes the last item
// arr.unshift("first"); // Adds to the start
// arr.shift(); // Removes the first item
// console.log(arr); // Check updated array

// // ================================
// //  What is the map() method?
// // ================================
// // map() loops through an array and creates a new array by modifying each element.

// const dates = ["2024-1-10", "2024-2-15", "2024-3-20"];
// const formattedDates = dates.map(formatDate);

// function formatDate(dateString) {
//   const parts = dateString.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`; // MM/DD/YYYY
// }

// console.log(formattedDates); // Output: ["1/10/2024", "2/15/2024", "3/20/2024"]

// // ================================
// //  What is the filter() method?
// // ================================
// // filter() creates a new array with elements that pass a condition.

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// function isEven(num) {
//   return num % 2 === 0;
// }

// function isOdd(num) {
//   return num % 2 !== 0;
// }

// console.log("Even numbers:", evenNums);
// console.log("Odd numbers:", oddNums);

// // ==================================
// //  What is the reduce() method?
// // ==================================
// // reduce() combines all array elements into a single value.

// const prices = [5, 10, 15, 20];
// const total = prices.reduce(sum);

// function sum(accumulator, value) {
//   return accumulator + value;
// }

// console.log("Total:", total); // Output: 50

// // ============================
// //  What is an Object?
// // ============================
// // An object is a collection of key-value pairs.

// const person = {
//   firstName: "Fakhir",
//   lastName: "Ahmed",
//   age: 18,
//   isEmployed: false,
//   sayHello: function () {
//     console.log(`Hi, I am ${this.firstName}`);
//   },
// };

// person.sayHello(); // Output: Hi, I am Fakhir

// // ============================
// //  What is 'this' keyword?
// // ============================
// // 'this' refers to the current object that is calling the function.

// // Example above: this.firstName refers to person.firstName

// // ==============================
// //  What is setTimeout()?
// // ==============================
// // setTimeout() delays the execution of a function.

// // Regular function:
// function greet() {
//   alert("Hello after 3 seconds!");
// }

// // Using setTimeout with regular function:
// setTimeout(greet, 3000);

// // Using setTimeout with anonymous function:
// setTimeout(function () {
//   alert("Hello (anonymous function)");
// }, 3000);

// // Using setTimeout with arrow function:
// setTimeout(() => alert("Hello (arrow function)"), 3000);

// // ======================================
// //  What is JSON and localStorage?
// // ======================================
// // JSON = JavaScript Object Notation. It is used to send and receive data in a structured way.
// // locakStorage = is use to store value in browser first we change into string then we use

// // JSON methods:
// // JSON.stringify() → Convert JS object to JSON string
// // JSON.parse() → Convert JSON string back to JS object

// const user = {
//   name: "Fakhir",
//   age: 18,
// };

// const userJSON = JSON.stringify(user);
// console.log("Stringified JSON:", userJSON);

// const userParsed = JSON.parse(userJSON);
// console.log("Parsed Object:", userParsed);

// // localStorage allows you to store data in the browser (key-value pair)
// localStorage.setItem("user", userJSON);
// console.log("User from localStorage:", localStorage.getItem("user"));

// // ========================================
// //  What is an Arrow Function?
// // ========================================
// // Arrow function is a shorter way to write a function.
// // Good for short and one-time use functions.

// const add = (a, b) => a + b;
// console.log("Sum using arrow function:", add(2, 3)); // Output: 5
const form = document.getElementById("userForm");
const errorMsg = document.getElementById("errorMsg");
const output = document.getElementById("output");

// Form Submit Handler
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    // Simple Validation
    if (name === "" || email === "" || age === "") {
        errorMsg.textContent = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
    }

    errorMsg.textContent = ""; // Clear errors if everything is fine

    const user = {
        name: name,
        email: email,
        age: Number(age),
    };

    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(user));

    // Display Output
    displayUserData();
});

// Email Format Validator
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Load Data from localStorage (if exists)
function displayUserData() {
    const data = localStorage.getItem("userData");
    if (data) {
        const user = JSON.parse(data);
        output.innerHTML = `
          <h3>📋 Saved User Info</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Age:</strong> ${user.age}</p>
        `;
    }
}

//  Show saved data on page load
window.onload = displayUserData;
