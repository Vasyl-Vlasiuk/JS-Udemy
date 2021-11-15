"use strict";

// Нам доступно створювати нові елементи на сторінці. Тому створимо тег скріпт і помістимо його туди динамічно

/* const script = document.createElement('script');
script.src = 'js/test.js';
document.body.append(script); // поміщає елемент в кінець себе (body). */




// Будуть виконуватися почергово
function loadScript(src) {
  const script = document.createElement('script');
  script.src = 'src';
  script.async = false;
  document.body.append(script); // поміщає елемент в кінець себе (body).
}

loadScript('js/test.js');
loadScript("js/some.js");