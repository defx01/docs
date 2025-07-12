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

## Интерполяция

```js
const name = 'Анна';
console.log(`Привет, ${name}!`); // "Привет, Анна!"
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

```js
const sum = (a, b) => a + b;`

// Многострочное тело
const sum = (a, b) => {
    const result = a + b;
    return result;
}
```

### Параметры по умолчанию

```js
function greet(name = "Гость") {
    console.log(`Привет, ${name}!`);
}
```

### Rest-параметры

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

## Современные возможности

### Optional Chaining (ES2020)

`const street = user?.address?.street;`

### Nullish Coalescing (ES2020)

`const value = input ?? "default";`

### BigInt (ES2020)

`const big = 1234567890123456789012345678901234567890n;`

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

### Создание даты

```js
// Текущая дата и время
const now = new Date();

// Конкретная дата
const date1 = new Date('2023-12-31'); // ISO формат
const date2 = new Date(2023, 11, 31); // год, месяц (0-11), день
const date3 = new Date(2023, 11, 31, 23, 59, 59); // + часы, минуты, секунды
```

### Получение компонентов даты

```js
const date = new Date();

date.getFullYear();    // 2023 (год)
date.getMonth();       // 0-11 (январь = 0)
date.getDate();        // 1-31 (день месяца)
date.getDay();         // 0-6 (день недели, воскресенье = 0)
date.getHours();       // 0-23
date.getMinutes();     // 0-59
date.getSeconds();     // 0-59
date.getMilliseconds();// 0-999
date.getTime();        // timestamp (миллисекунды с 1.1.1970)
```

### Установка компонентов даты

```js
const date = new Date();

date.setFullYear(2024);
date.setMonth(5);      // июнь (0-11)
date.setDate(15);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(0);
```

### Форматирование даты

```js
const date = new Date();

// Локализованные строки
date.toLocaleDateString();      // "31.12.2023"
date.toLocaleTimeString();      // "23:59:59"
date.toLocaleString();          // "31.12.2023, 23:59:59"

// ISO и UTC формат
date.toISOString();             // "2023-12-31T23:59:59.000Z"
date.toUTCString();             // "Sun, 31 Dec 2023 23:59:59 GMT"

// Кастомное форматирование
`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`; // "31.12.2023"
```

### Арифметика с датами

```js
const date1 = new Date(2023, 0, 1);
const date2 = new Date(2023, 11, 31);

// Разница в миллисекундах
const diff = date2 - date1;

// Конвертация в дни
const daysDiff = diff / (1000 * 60 * 60 * 24);

// Добавление дней
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
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
// аналог куки
localStorage.setItem('key', 'value');
const localKey = localStorage.getItem('key');

// сессия
sessionStorage.setItem('key', 'value');
const sessionKey = sessionStorage.getItem('key');
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