"use strict";
// ==============================================
// To String ====================================
// ==============================================
// 1
console.log(typeof(String(null))); // string
console.log(typeof(String(4))); // string

// 2 конкатенація
console.log(typeof(5 + ' ')); // string
const num = 5;
console.log('https://vk.com/catalog/' + num); // string
const fontSize = 26 + 'px'; // string


// ==============================================
// To Number ====================================
// ==============================================
// 1
console.log(typeof(Number('6'))); // number
// 2
console.log(typeof(+'6')); // number
// 3
console.log(typeof(parseInt('15px', 10))); // number
let answ = +prompt('Hello, enter of number', ''); // number, все що отримуємо від користувача буде строка



// ===============================================
// To Boolean ====================================
// ===============================================
// 0, '', null, undefined, NaN - false

// 1
let switcher = null; // false 
if (switcher) { // умова виконуватися не буде
  console.log('Working...');
}

switcher = 1;
if (switcher) {
  console.log('Working...');
}

// 2
console.log(typeof(Boolean('4')));

// 3
console.log(typeof(('4444'))); //string 
console.log(typeof((!!'4444'))); //boolean
