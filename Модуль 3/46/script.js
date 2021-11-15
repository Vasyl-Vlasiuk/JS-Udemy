'use strict';

// Ф може викликатися 4ма методами:


// 1) Якщо ф запускається в даний спосіб і ми в ній використовуємо контекст(this),
// то він буде посилатися на глобальний О window. Це правило вірне для строго режиму
// 1) Звичайна Ф: this = window, але якщо use strict - undefined 
// function showThis(a, b) {
//   console.log(this);
//   function sum () {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }
// showThis(4, 5);

//================================================================
// 2) Контекст у методів О - сам О
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this);
//   }
// };
// obj.sum();

//================================================================
// 3) !!! this в конструкторах і класах - це новий екземпляр О !!!
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// } 
// let ivan = new User('Ivan', 23);

//================================================================
// 4) Ручна прив'язка this: call, aplly, bind
// function sayName() {
//   console.log(this);
//   console.log(this.name);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));
// створює нову Ф і під неї вже під'язує контекст


//================================================================
// Функціонал 
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  this.style.backgroundColor = 'red';
});

// у стрілочних Ф немає свого контексту виклику, вона його завжди буде брати у батька
const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this);
      // console.log(this.num);
    };
    say();
  }
};

obj.sayNumber();

// ===============================================================
const double = a => a * 2;
console.log(double(4));

// У звичайних Ф ми маємо доступ до this, якщо використовуємо стрілочну то контекс виклику втрачається