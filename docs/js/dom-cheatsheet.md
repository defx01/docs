# Шпаргалка по работе с DOM в JavaScript

## Поиск элементов

```js
// Одиночные элементы
document.getElementById('id')        // По ID
document.querySelector('.class')     // Первый по CSS-селектору

// Коллекции элементов
document.getElementsByClassName('class')   // Live-коллекция по классу
document.getElementsByTagName('div')       // Live-коллекция по тегу  
document.querySelectorAll('.class')        // Статическая коллекция по селектору
```

## Навигация по DOM

```js
// Иерархия
element.parentElement           // Родитель
element.children                // Дочерние элементы
element.firstElementChild       // Первый потомок
element.lastElementChild        // Последний потомок

// Соседи
element.nextElementSibling      // Следующий элемент
element.previousElementSibling  // Предыдущий элемент

// Поиск
element.closest('.selector')    // Ближайший родитель по селектору
element.matches('.selector')    // Проверка соответствия селектору
```

## Создание и изменение DOM

```js
// Создание
document.createElement('div')   // Новый элемент
document.createTextNode('text') // Текстовый узел

// Добавление
parent.appendChild(element)     // В конец
parent.prepend(element)        // В начало
parent.insertBefore(new, ref)  // Перед элементом

// Удаление
element.remove()               // Удалить элемент
parent.removeChild(element)    // Альтернативное удаление

// Клонирование
element.cloneNode(true)        // Глубокое клонирование
```

## Работа с атрибутами и классами

```js
// Атрибуты
element.getAttribute('name')   // Получить значение
element.setAttribute('name', 'value') // Установить
element.removeAttribute('name')       // Удалить

// Data-атрибуты
element.dataset.key            // Доступ к data-key
element.dataset.userName       // Доступ к data-user-name

// Классы
element.classList.add('class')      // Добавить
element.classList.remove('class')   // Удалить
element.classList.toggle('class')   // Переключить
```

## Работа со стилями

```js
// Инлайн-стили
element.style.color = 'red'         // Установить
element.style.backgroundColor      // camelCase для CSS
element.style.removeProperty('color') // Удалить

// Вычисленные стили
window.getComputedStyle(element)    // Все текущие стили
```

## Работа с событиями

```js
// Обработчики
element.addEventListener('click', handler)  // Добавить
element.removeEventListener('click', handler) // Удалить

// Объект события
function handler(event) {
  event.target        // Исходный элемент
  event.preventDefault() // Отменить действие
  event.stopPropagation() // Остановить всплытие
}

// Делегирование
parent.addEventListener('click', e => {
  if (e.target.matches('.child')) {
    // Обработка клика
  }
})
```

## Работа с содержимым

```js
// Текст и HTML
element.textContent = 'text'   // Безопасный текст
element.innerHTML = '<b>text</b>' // HTML (опасно)

// Формы
input.value                   // Значение поля
input.checked                 // Состояние чекбокса
select.selectedIndex          // Выбранный option
```

## Размеры и позиционирование

```js
// Размеры
element.offsetWidth       // Ширина с padding и border
element.clientWidth       // Ширина только с padding

// Позиция
element.getBoundingClientRect()  // Размеры и позиция
window.scrollY            // Вертикальный скролл страницы

// Прокрутка
element.scrollIntoView()  // Прокрутить к элементу
```