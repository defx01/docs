# Основные концепции JavaScript (ES6+)

## Типы данных

### Примитивные типы

```js
const str = "Hello";          // string
const num = 42;               // number
const bool = true;            // boolean
const nothing = null;         // null
const notDefined = undefined; // undefined
const sym = Symbol("id");     // symbol (ES6)
const bigInt = 9007199254740991n; // bigint (ES2020)
```

### Объектные типы

```js
const obj = { name: "Alex" }; // object
const arr = [1, 2, 3];        // array (частный случай объекта)
const func = () => {};        // function (частный случай объекта)
const date = new Date();      // date
const regex = /pattern/;      // regular expression
```

### Проверка типов

```js
typeof "Hello"         // "string"
typeof 42              // "number"
typeof true            // "boolean"
typeof {}              // "object"
typeof []              // "object" (осторожно!)
typeof null            // "object" (историческая особенность)
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof 10n             // "bigint"

Array.isArray([])      // true (правильная проверка массива)
```

## Переменные и область видимости

### Объявление переменных

```js
var oldVar = 1;    // Функциональная область видимости (устарело)
let variable = 2;  // Блочная область видимости (ES6)
const PI = 3.14;   // Блочная область видимости, нельзя переопределить (ES6)
```

### Примеры областей видимости

```js
// Блочная область видимости
{
    let x = 10;
    const y = 20;
    var z = 30;
}
console.log(z); // 30 (var "вытекает")
console.log(x); // ReferenceError
console.log(y); // ReferenceError

// Функциональная область видимости
function test() {
    var inner = 42;
}
console.log(inner); // ReferenceError
```

## Операторы

### Арифметические операторы

```js
let x = 10;
x + 5;   // 15 (сложение)
x - 3;   // 7 (вычитание)
x * 2;   // 20 (умножение)
x / 4;   // 2.5 (деление)
x % 3;   // 1 (остаток от деления)
x ** 2;  // 100 (возведение в степень, ES6)
x++;     // Постфиксный инкремент
++x;     // Префиксный инкремент
```

### Операторы сравнения

```js
10 == "10"    // true (нестрогое сравнение)
10 === "10"   // false (строгое сравнение)
10 != "10"    // false
10 !== "10"   // true
5 > 3         // true
5 <= 5        // true
NaN === NaN   // false (особенность NaN)
```

### Логические операторы

```js
true && false   // false (И)
true || false   // true (ИЛИ)
!true           // false (НЕ)

// Использование для значений по умолчанию
const name = username || "Гость";

// Опциональная цепочка (ES2020)
const street = user?.address?.street;

// Нулевое слияние (ES2020)
const value = input ?? "default";
```

## Управляющие конструкции

### Условные операторы

```js
// if-else-if
if (age > 18) {
    console.log("Взрослый");
} else if (age > 12) {
    console.log("Подросток");
} else {
    console.log("Ребенок");
}
```

### Тернарный оператор

`const status = age >= 18 ? "Взрослый" : "Ребенок";`

### switch-case

```js
switch (day) {
    case 1:
        console.log("Пн");
        break;
    case 2:
        console.log("Вт");
        break;
    default:
        console.log("Выходной");
}
```

## Циклы

### for

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### for...of (ES6) для итерируемых объектов

```js
for (const item of [1, 2, 3]) {
    console.log(item);
}
```

### for...in для перечисления свойств
```js
for (const key in {a: 1, b: 2}) {
    console.log(key); // 'a', 'b'
}
```

### while

```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### do-while

```js
do {
    console.log(i);
} while (i < 5);
```

## Функции (ES6+)

### Синтаксис функций

### Функциональное выражение

```js
const sum = function(a, b) {
    return a + b;
};
```

### Стрелочные функции (ES6)

`const sum = (a, b) => a + b;`

### Многострочное тело

```js
const sum = (a, b) => {
    const result = a + b;
    return result;
};
```

### Параметры по умолчанию

```js
function greet(name = "Гость") {
    console.log(`Привет, ${name}!`);
}
```

### Rest-параметры ???

```js
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
```

## Работа с массивами (ES6+)

### Основные методы

`const nums = [1, 2, 3];`

### Мутирующие методы

```js
nums.push(4);        // [1, 2, 3, 4]
nums.pop();          // [1, 2, 3]
nums.unshift(0);     // [0, 1, 2, 3]
nums.shift();        // [1, 2, 3]
nums.splice(1, 1);   // [1, 3] (удаляет элементы)
```

### Не мутирующие методы

```js
nums.includes(2);    // true
nums.indexOf(2);     // 1
nums.slice(0, 2);    // [1, 2] (подмассив)
```

### Функциональные методы
```js
const doubled = nums.map(x => x * 2);      // [2, 4, 6]
const evens = nums.filter(x => x % 2 === 0); // [2]
const sum = nums.reduce((acc, x) => acc + x, 0); // 6
nums.forEach(x => console.log(x));         // 1, 2, 3
```

### Деструктуризация массива (ES6)

```js
const [first, second] = [1, 2, 3];
const [,, third] = [1, 2, 3];  // Пропуск элементов
const [head, ...tail] = [1, 2, 3]; // rest-элемент
```

## Работа с объектами (ES6+)

### Синтаксис объектов
    
```js
const person = {
    name: "Alex",
    age: 30,
    greet() {
        console.log(`Привет, я ${this.name}`);
    }
};
```

### Динамические свойства
```js
const key = "name";
person[key]; // "Alex"
```

### Деструктуризация объекта (ES6)
```js
const { name, age } = person;
const { name: firstName } = person; // С переименованием
const { city = "Москва" } = person; // Значение по умолчанию
```

### Spread-оператор (ES6)
```js
const newPerson = { ...person, age: 31 };
```

### Короткие свойства (ES6)
```js
const name = "Alex";
const age = 30;
const person = { name, age }; // { name: "Alex", age: 30 }
```

## Классы (ES6)

### Базовый синтаксис
```js
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Привет, я ${this.name}`);
    }
    
    // Статический метод
    static createAnonymous() {
        return new Person("Аноним");
    }
}
```

### Наследование

```js
class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }
}
```


## Асинхронный код

### Promise

```js
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```
### async/await (ES2017)

```js
async function loadData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

## Модули (ES6)

### Экспорт/импорт
    
```js
// math.js
export const sum = (a, b) => a + b;
export const PI = 3.14;

// app.js
import { sum, PI } from './math.js';
import * as math from './math.js';
```

### Экспорт по умолчанию

 ```js
// math.js
export default function multiply(a, b) {
    return a * b;
}

// app.js
import multiply from './math.js';
```

## Работа с DOM

### Поиск элементов
```js
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('div');
```

### События
    
```js
element.addEventListener('click', handler);
element.removeEventListener('click', handler);

// Делегирование событий
parent.addEventListener('click', (e) => {
    if (e.target.matches('.child')) {
        // Обработка
    }
});
```

## Современные возможности

### Optional Chaining (ES2020)

```js
const street = user?.address?.street;
Nullish Coalescing (ES2020)

const value = input ?? "default";
BigInt (ES2020)

const big = 1234567890123456789012345678901234567890n;
```

### Dynamic Import

```js
import('./module.js')
    .then(module => {
        module.doSomething();
    });
```

## Обработка ошибок

###  try/catch
```js
try {
    // Код, который может выбросить исключение
} catch (error) {
    console.error(error);
} finally {
    // Код, который выполнится в любом случае
}
```

### Пользовательские ошибки
    
```js
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

throw new ValidationError("Неверный формат");
```

## Дата и время

### Работа с Date

```js
const now = new Date();
const specificDate = new Date(2023, 0, 31); // 31 января 2023

// Форматирование
now.toLocaleDateString(); // "31.01.2023"
now.toISOString();       // "2023-01-31T12:00:00.000Z"
```

### Преобразование
```js
const json = JSON.stringify(obj);
const obj = JSON.parse(json);
```

## Регулярные выражения

### Создание и использование
```js
const regex = /pattern/flags;
const regex = new RegExp('pattern', 'flags');

regex.test('string'); // true/false
'string'.match(regex); // Результат совпадения
```

## Хранение данных

### Web Storage
```js
localStorage.setItem('key', 'value');
const data = localStorage.getItem('key');
```

### IndexedDB
```js
// Сложное API, обычно используют обёртки типа Dexie.js
```

### Работа с асинхронностью

```js
// Promise.all
Promise.all([promise1, promise2])
    .then(results => {
        const [result1, result2] = results;
    });
```

```js
// Promise.race
Promise.race([promise1, promise2])
    .then(firstResult => {});
```

## Прочие полезные методы

### Работа с числами

```js
Math.floor(3.7);    // 3
Math.ceil(3.2);     // 4
Math.round(3.5);    // 4
Math.random();      // Случайное число 0-1
Number.EPSILON;     // Минимальное число между 1 и следующим числом
```

### Работа со строками

```js
'hello'.includes('ell');   // true
'hello'.startsWith('he');  // true
'hello'.endsWith('lo');    // true
'hello'.repeat(3);         // 'hellohellohello'
' hello '.trim();          // 'hello'
```

## Лучшие практики

- Используйте const по умолчанию, let когда нужно переопределять
- Избегайте var
- Используйте строгое сравнение (=== и !==)
- Применяйте деструктуризацию для упрощения кода
- Используйте стрелочные функции для сохранения контекста
- Разбивайте код на модули
- Обрабатывайте ошибки
- Используйте современные возможности языка (опциональные цепочки, нулевое слияние)