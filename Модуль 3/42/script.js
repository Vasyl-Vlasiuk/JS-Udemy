'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth; // Контент з без врахуванням бокового скролу(15px)
// const height = box.clientHeight; 
// const width = box.offsetWidth; // Контент з врахуванням полоси прокрутики + бордер + марджин
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight; // уся висота тексту прокрутки

// console.log(width, height);

// btn.addEventListener('click', () => {
//    box.style.height = box.scrollHeight + 'px'; // для box присвоюємо значення висоти усього контенту
//    console.log(box.scrollTop);
// });


// Дані дві властивості можуть бути модивікованні навідмінну від інших 
console.log(box.getBoundingClientRect().top);

btn.addEventListener('click', () => {
   console.log(box.scrollTop);
}); // дізнаємося висоту прокрутки контенту 

console.log(box.getBoundingClientRect().top); // дізнаємося висоту від початку контента до початку екрана девайсу

// ==============================================================
// ======== Дізнаємося чи застосований до елемента стиль ========
// ==============================================================
// const style = window.getComputedStyle(box); // Отримаємо перегляд усіх стилів які належать елементу
// console.log(style); 
// console.log(style.display); // отримаємо значення конкретного стилю
// комплітет стилі записуються в css і ми можемо їх лише переглянти і перевірити на відповідність
// інлайн стилі які з'являються в середині версти і прописуються відразу в тег. Вони є більш пріорітетні тому перебивають комплітет стилі 

console.log(document.documentElement.clientWidth); // ширина вікна браузера 
console.log(document.documentElement.scrollTop); // висота прокрутки

// Можна присвоїти значення для scrollTop і при кліку буде вертатися на почачок сторінки
document.documentElement.scrollTop = 500;


window.scrollBy(0, 400); 
window.scrollTo(0, 400); 