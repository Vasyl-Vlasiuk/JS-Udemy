// Синтаксис, який дозволяє запистити будь-яку ф-ію через певний час
// const timerId = setTimeout(function(text) {
//   console.log(text);
// }, 2000, 'Hello'); // функція передається, але не викликається. //
// Викличеться лише через певний час який зааний 2им параметром. 
// У 3 параметрі задане значення яке передасться у функцію

// ============================================================
// можемо відразу передавати готову функцію (без дужок, лише назву)
// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId); // зупиняємо наш таймер

// function logger () {
//   console.log('text');
// }

// ============================================================
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//   // const timerId = setTimeout(logger, 2000);
//       timerId = setInterval(logger, 500);
// });
// // функція logger по часу може тривати довше я 500 мс, а наш таймер не буде чекати довше.
// // Він буде запускати функцію через заданих пів хв.

// function logger () {
//   if (i === 4) {
//     clearInterval(timerId);
//   }
//   console.log('text');
//   i++;
// }

// коли таймер з інтервалом працює, він не враховує як довго буде працювати функція в середині нього (logger).
// Тому для таких випадків використовують рекусивний setTimeout




// Сперш спрацьовує, Ф log, далі виконується дія (не важливо як довго), за тим Ф id із затримкою в 500мс знову викликає log
// let id = setTimeout(function log(){
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);

// ===========================================================
// ПРАКТИКА
const btn = document.querySelector('.btn'); 

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if ( pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);