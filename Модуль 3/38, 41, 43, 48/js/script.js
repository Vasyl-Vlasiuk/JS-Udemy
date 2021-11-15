window.addEventListener('DOMContentLoaded', () => {

  // ==============================================================
  // ========================= ТАБИ ===============================
  // ==============================================================
  const tabs = document.querySelectorAll('.tabheader__item'), // вкладки
        tabsParent = document.querySelector('.tabheader__items'), // батько вкладок
        tabsContent = document.querySelectorAll('.tabcontent'); // слайди
  
  // ====================  Прибираємо класи =======================
  function hideTabContent() {
    // прибираємо показ слайдів
    tabsContent.forEach(item => { 
      // item.style.display = 'none';
      item.classList.add('hide'); // + клас що приховує слайди
      item.classList.remove('show', 'fade'); // - класи що показують слайди
    });
    // прибираємо активнсть вкладок
    tabs.forEach(item => { 
      item.classList.remove('tabheader__item_active'); // - клас що показує вкладки
    });
  }

  // ======================== Добавляємо класи =====================
  function showTabContent(i = 0) { // якщо ф-ія передається без аргументу то по замовчуванню можна присвоїти 0.По замовчуванню активна 1ша вкладка
    // tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('show', 'fade'); // + класи, що показують слайди
    tabsContent[i].classList.remove('hide'); // - клас що приховує слайди
    tabs[i].classList.add('tabheader__item_active'); // + клас що показує вкладки
  }

  hideTabContent();
  showTabContent();


  // ====================== Виклик ф-ії ===========================
  tabsParent.addEventListener('click', (event) => {
    const target = event.target; //поточний елемент 

    if(target && target.classList.contains('tabheader__item')) {
      //          елем. індекс
      tabs.forEach((item, i) => { 
        if (target == item) { // якщо поточний елем. як
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });



  // ==============================================================
  // ======================== Таймер ==============================
  // ==============================================================
  const deadline = '2021-01-10';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)), // к-ть діб до закінчення дати. В добі 86 400 000 мс
          hours = Math.floor((t / (1000 * 60 * 60) % 24)), // залишок годин від повних діб. 
          minutes = Math.floor((t / 1000 / 60) % 60), // залишок хвилин від повних годин
          seconds = Math.floor((t / 1000) % 60); // залишок секунд від повних хвилин

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if(num >= 0 && num <10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    function updateClock() {
      const t  = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if(t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);



  // ==============================================================
  // ====================== Модальні вікна ========================
  // ==============================================================
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
        
  function openModal () {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // стиль що, що не дозволяє прокручувати сторінку
    clearInterval(modalTimerId);
  }
  // Показуємо модальне вікно
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });


  function closeModal () {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // відновлюємо прокрутку сторінки
  }
  // Приховуємо модальне вікно
  modalCloseBtn.addEventListener('click', closeModal);


  // Приховуємо вікно по кліку на підкладку 
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Приховуємо вікно клавішею
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

  // Поява модального вікна, через певний проміжок часу (час/scroll)
  // const modalTimerId = setTimeout(openModal, 3000);

  function showModalByScroll () {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  // ==============================================================
  // ==================== Класи для карточок ======================
  // ==============================================================
  /*
   class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      element.innerHTML = `
        <div class="menu__item">
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    "Меню 'Фітнес'",
    "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    9,
    ".menu .container"

  ).render(); */
});


