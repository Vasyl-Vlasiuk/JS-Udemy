'use stricts';

// Дати використовуються для вирахування часу якоїсь функції і порівняти з тривалістю роботи іншої
// Дати які зберігаються в JS зберігаються в мілісікундах

// Виведення поточної дати/годин/таймерів
// Для зберігання часу створення або редагування файлів (бекенд)

// ===============================================
// покажемо поточний час якийсь взятий із системи
/* const now = new Date(); 
console.log(now); */


// ===============================================
// Отримання компонентів дати
// const now = new Date();
// new Date.parse('2020-05-01'); // поверне дату у вигляді строки
// console.log(now.getFullYear());
// console.log(now.getMonth()); // отримуємо індекс місяця ( січень 0)
// console.log(now.getDate());
// console.log(now.getDay()); // отримує порядковий номер дня неділі
// console.log(now.getHours());
// console.log(now.getUTCHours()); // відрізняється від місцевого часу 
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log(now.getTimezoneOffset()); // різниця між часовим поясом і UTC
// console.log(now.getTime()); // к-сть мілісік. минувших з 1 січня 1970р


// ===============================================
// Установити дату
const now = new Date();

// console.log(now.setFullYear());
// console.log(now.setMonth()); 
// console.log(now.setDate());
// console.log(now.setDay()); 
// console.log(now.setHours(18)); // якщо встановити час то у консолі розробника він може вивестися у форматі UTC і відрізнятеметься від локального 
// console.log(now.setUTCHours())
// console.log(now.setMinutes());
// console.log(now.setSeconds());



// Таймштампи для вирахування часу роботи ф-ції
let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Цикл відпрацював за ${end - start} мілісікунд`);

