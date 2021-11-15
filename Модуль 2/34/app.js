"use strict";

// touchstart - спрацювує при дотику на елемент
// touchmove - при зміні положення пальця
// touchend - як тільки палець відірвався від елемента, відразу команда виконається
// touchenter - спрацьовує коли палець потрапив в область цього елементу
// touchleave - коли палець продовжуючи ковзати вийшов за межі елементу
// touchcancel - виникає тоді коли точка дотику, більше не реєструється на поверхні

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('Start');
    // console.log(e.touches);
    console.log(e.targetTouches);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');
  box.addEventListener('touchmove', (e) => {
    
    console.log(e.targetTouches[0].pageX);
  });
});

/* window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');
  box.addEventListener('touchend', (e) => {
    
    console.log('End');
  });
}); */

// існує 3 головних властивості при роботі з сенсорними пристроями
// touches - видає кількість одночасно тапнутих пальців
// targetTouches - видає кількість одночасно тапнутих пальців які взаємодіють з конкретним елементом
// changedTouches - списиок пальцій які приймають участь в поточній події.
// Якщо ця подія touchEnd то список буде містити інфу про палець який був забраний