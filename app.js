const upBtn = document.querySelector('.up-btn')

const anchors = document.querySelectorAll('a[href*="#"]') // здесь будут собраны все элементы a, у которых в атрибуте href указана решётка. Нам это нужно чтобы сделать к каждой из них плавную анимацию скрола

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault() // сначала выключаем стандартное поведение при клике на ссылку-якорь, иначе это будет происходить как по умолчанию, без плавности

    // Далее получаем строковое значение атрибута href у якоря и вешаем на него метод scrollIntoView
    // behavior - это анимация прокрутки. Принимает значения "auto" или "smooth". По умолчанию "auto".
    // block - вертикальное выравнивание
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}
/* 
Это скрипт для появления и исчезновения кнопки Наверх(или любого другого блока, который должен появляться или исчезать при прокрутке страницы на определенное расстояние)
Если мы прокрутим сайт на 30px, то кнопка станет видимой, если же сайт выше чем на 30 px,
то кнопка станет прозрачной

Также нам нужно получить саму кнопку в js и добавить ей в css свойство opacity: 0, чтобы при старте она
была прозрачной

const upBtn = document.querySelector('.up-btn') получаем кнопку по классу из index.html
*/
function showOrHideUpBtn() {
  if (window.scrollY > 30) {
    upBtn.style.opacity = '1'
  } else {
    upBtn.style.opacity = '0'
  }
}

// When scrolling, we run the function
window.onscroll = showOrHideUpBtn
