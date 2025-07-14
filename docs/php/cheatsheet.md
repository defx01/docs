# Шпаргалка по языку PHP

Полная документация: https://www.php.net/

## Основы синтаксиса

### Комментарии

```php
// Однострочный комментарий
/* Многострочный комментарий */
```

## Переменные и типы данных

```php
$var = "Hello";        // Строка
$int = 42;             // Целое число
$float = 3.14;         // Число с плавающей точкой
$bool = true;          // Булево значение
$array = [1, 2, 3];    // Массив
$null = null;          // Null
```

## Операторы

### Арифметические

```php
$sum = $a + $b;
$diff = $a - $b;
$product = $a * $b;
$quotient = $a / $b;
$remainder = $a % $b;
```

### Сравнения

```php
$a == $b;    // Равно
$a === $b;   // Идентично
$a != $b;    // Не равно
$a !== $b;   // Не идентично
$a < $b;     // Меньше
$a > $b;     // Больше
```

### Логические

```php
$a && $b;    // И
$a || $b;    // Или
!$a;         // Не
```

## Условные операторы

### if-else

```php
if ($a > $b) {
    echo "a больше b";
} elseif ($a == $b) {
    echo "a равно b";
} else {
    echo "a меньше b";
}
```

### Тернарный оператор

`$result = ($a > $b) ? "a больше b" : "a не больше b";`

### switch-case

```php
switch ($i) {
    case 0:
        echo "i равно 0";
        break;
    case 1:
        echo "i равно 1";
        break;
    default:
        echo "i не равно 0 или 1";
}
```

## Циклы

### while

```php
$i = 1;
while ($i <= 10) {
    echo $i++;
}
```php

### do-while

```php
$i = 1;
do {
    echo $i++;
} while ($i <= 10);
```php

### for

```php
for ($i = 0; $i < 10; $i++) {
    echo $i;
}
```

### foreach
```php
foreach ($array as $value) {
    echo $value;
}

foreach ($array as $key => $value) {
    echo "$key: $value";
}
```


## Функции

### Объявление функции

```php
function greet($name = "Гость") {
    return "Привет, $name!";
}
```

### Вызов функции

`echo greet("Иван");`

### Анонимная функция

```php
$greet = function($name) {
    return "Привет, $name!";
};
echo $greet("Иван");
```

## Работа с массивами

`$array = ["a" => 1, "b" => 2];`

### Основные функции

```php
count($array);          // Количество элементов
array_keys($array);     // Ключи массива
array_values($array);   // Значения массива
in_array(2, $array);    // Проверка наличия значения
array_key_exists("a", $array); // Проверка наличия ключа
```

### Добавление/удаление элементов

```php
array_push($array, 3);  // Добавить в конец
array_pop($array);      // Удалить последний
array_unshift($array, 0); // Добавить в начало
array_shift($array);    // Удалить первый
```

## Работа со строками

`$str = "Hello World";`

### Основные функции

```php
strlen($str);           // Длина строки
strpos($str, "World");  // Поиск подстроки
substr($str, 0, 5);     // Подстрока
str_replace("World", "PHP", $str); // Замена
trim("  hello  ");      // Удаление пробелов
strtolower($str);       // Нижний регистр
strtoupper($str);       // Верхний регистр
explode(" ", $str);     // Разбиение строки
implode("-", $array);   // Соединение массива в строку
```

## Работа с файлами

### Чтение файла

`$content = file_get_contents("file.txt");`

### Запись в файл

`file_put_contents("file.txt", "New content");`

### Работа с файловым указателем

```php
$file = fopen("file.txt", "r");
while (!feof($file)) {
    echo fgets($file);
}
fclose($file);
```

## ООП в PHP

```php
class MyClass {
    // Свойства
    public $property;
    private $hidden;
    
    // Конструктор
    public function __construct($param) {
        $this->property = $param;
    }
    
    // Метод
    public function myMethod() {
        return $this->property;
    }
    
    // Статический метод
    public static function staticMethod() {
        return "Static!";
    }
}
```

### Использование класса

```php
$obj = new MyClass("value");
echo $obj->myMethod();
echo MyClass::staticMethod();
```

## Обработка ошибок

### Обычная обработка

```php
try {
    // Код, который может вызвать исключение
} catch (Exception $e) {
    echo "Ошибка: " . $e->getMessage();
}
```

### Пользовательское исключение

```php
class MyException extends Exception {}

try {
    throw new MyException("Custom error");
} catch (MyException $e) {
    echo $e->getMessage();
}
```

## Суперглобальные массивы

```php
$_GET;     // GET-параметры
$_POST;    // POST-данные
$_REQUEST; // GET + POST + COOKIE
$_SERVER;  // Информация о сервере
$_SESSION; // Данные сессии
$_COOKIE;  // Куки
$_FILES;   // Загруженные файлы
```

## Подключение файлов

```php
include "file.php";      // Подключить с предупреждением если не найден
include_once "file.php"; // Подключить один раз
require "file.php";      // Подключить с ошибкой если не найден
require_once "file.php"; // Подключить один раз с ошибкой если не найден
```