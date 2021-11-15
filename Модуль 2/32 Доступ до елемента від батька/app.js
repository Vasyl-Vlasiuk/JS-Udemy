"use strict";

// ==========================================================
// ============= Доступ до елемента через батька ============
// ==========================================================
// console.log(document.body); // доступ до body
// console.log(document.documentElement); // Звернемося до HTML з усім вмістом
// console.log(document.body.childNodes); // NodeList(4) [text, div.wrapper, text, script] - отримуємо всі ноди та вузли в середі батька body
// Метот за допомогою якого можна подорожувати по нашому DOM дереву (Вузли які є дітьми  body);
// ==========================================================
// console.log(document.body.firstChild); // перша дитина батька (може бути у вигляді ноди #text)

// console.log(document.body.firstElementChild); // перший елемент батька (wrapper)


console.log(document.body.lastChild); // остання дитина батька (js - підключення)
console.log(document.body.lastElementChild); // останній елемент батька (js - підключення)
// в обох варіантах видало js-підключення яке належить до елемента

// ==========================================================
// ============ Доступ від будь-якого елемента ==============
// ==========================================================
// Команди що дозволяють отримати: батька, сусідів, дітей

// console.log(document.querySelector('#current').parentNode); // current має батька .first - отримуємо ноду батька. 
// console.log(document.querySelector('#current').parentElement); // current має батька .first - отримуємо елемнт батька. 

// console.log(document.querySelector('#current').parentNode.parentNode); // отримаєм елемент батька батька

// ==========================================================
console.log(document.querySelector('[data-current="3"]')); // звернення до атрибуту з data

// console.log(document.querySelector('[data-current="3"]').nextSibling); // звернення до наступного елементу від data 
// В даному випадку отримаємо text ноду (перенос строки)

// console.log(document.querySelector('[data-current="3"]').previousSibling);

// Аби не попастися на пусту ноду у вигляді переносу використаємо: nextElementSibling і тоді отримаємо елемент
console.log(document.querySelector('[data-current="3"]').nextElementSibling);


// =======================================================
// Для того аби отримати дітей childNodes необхідно перебрати псевдо колекцію for ... of і позбавитися від усіх текстових нод

// Перебираємо childNodes і позбавляємося від усіх текстових нод
// for (let node of document.body.chilNodes) {
//   if(node.nodeName == '#text') { 
//     continue;
//   }
//   console.log(node);
// }
// якщо назва ноди == '#text' ми скажемо шоб ітерація зупинилася (continue) і починала нове коло циклу

// for of залишив нам тільки елементи, текстові ноди пропустив

