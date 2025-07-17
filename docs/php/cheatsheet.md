# Шпаргалка по языку PHP

## Комментарии

```php
// Однострочный
# Альтернативный однострочный
/* Многострочный */
```

## Типы данных и определение типа

```php
$int = 42;              // integer
$float = 3.14;          // float
$string = "text";       // string
$bool = true;           // boolean
$array = [1, 2, 3];     // array
$object = new StdClass; // object
$null = null;           // null
$callable = fn() => 1;  // callable
$resource = fopen(...); // resource

gettype($var);          // узнать тип
```

## Интерполяция

```php
$name = "John";
echo "Hello, $name!";        // Hello, John!
echo "Hello, {$name}!";      // Hello, John!
echo 'Hello, $name!';        // Hello, $name!
```

## Операторы

- Сравнения: `== != === !== < > <= >= <=>`  
- Логические: `&& || ! and or xor`  
- Присваивания: `= += -= *= /= .=`  
- Массивы: `+` (объединение)  
- Тернарный: `$a = $b ?: 'default';`  
- Null coalescing: `$a = $b ?? 'default';`


## Управляющие конструкции

```php
if ($a > $b) { ... } 
elseif (...) { ... } 
else { ... }

switch ($var) {
 case 1: break;
 default: break;
}

match($var) {
 1 => 'one',
 2 => 'two',
};
```

## Циклы

```php
for ($i = 0; $i < 10; $i++) { ... }
while ($cond) { ... }
do { ... } while ($cond);
foreach ($arr as $key => $value) { ... }
```

## Функции

```php
function add(int $a, int $b): int {
   return $a + $b;
}
$sum = fn($a, $b) => $a + $b; // стрелочная
```

## Массивы и объекты

```php
$arr = [1, 2, "key" => "val"];
echo $arr["key"];

$obj = (object) $arr;
echo $obj->key;

$arr2 = (array) $obj;
```

## ООП

```php
class User {
   public string $name;
   private int $age;

   public function __construct($name, $age) {
       $this->name = $name;
       $this->age = $age;
   }

   public function greet(): string {
       return "Hi, I'm $this->name";
   }
}

interface Greetable { public function greet(): string; }

trait Logger {
   public function log($msg) { echo $msg; }
}

class Admin extends User implements Greetable {
   use Logger;
}
```

## Обработка ошибок

```php
try {
   // Код
} catch (Exception $e) {
   echo $e->getMessage();
} finally {
   // Всегда выполняется
}

// Генерация ошибки
throw new Exception("Ошибка");
```

## Дата и время

```php
$date = new DateTime();
echo $date->format('Y-m-d H:i:s');

$timestamp = time();
$date = date('Y-m-d', $timestamp);
```

## Регулярные выражения

```php
preg_match('/\d+/', 'abc123', $matches);
preg_replace('/[a-z]/', '', 'abc123');
preg_match_all('/\w+/', 'One two three', $all);
```

## Хранение данных

```php
// Сессии
session_start();
$_SESSION['key'] = 'value';

// Cookies
setcookie('name', 'value', time() + 3600);

// Файлы
file_put_contents('file.txt', 'Hello');
$data = file_get_contents('file.txt');
```

## Асинхронный код

- PHP не нативно асинхронный, но можно использовать:
   - `pcntl_fork()` (CLI)
   - `curl_multi_*`
   ### Swoole**, **ReactPHP**, **Amp**
   - `proc_open()` для запуска процессов

## Современные возможности (PHP 7.4+ / 8+)

- Стрелочные функции: `fn($x) => $x * 2;`
- Типы свойств и возврата
- Nullsafe: `$user?->profile?->email`
- Match: `match($x) { 1 => 'a', 2 => 'b' }`
- Named arguments: `func(a: 1, b: 2)`
- Attributes (аннотации): `#[MyAttr]`
- readonly, enum, promoted properties

## Code Style

- Отступы: 4 пробела (PSR-12)
- Имена:
   - Классы: `PascalCase`
   - Методы/переменные: `camelCase`
   - Константы: `UPPER_CASE`
- Фигурные скобки на новой строке (PSR-12)
- Файлы заканчиваются пустой строкой

```php
class MyClass {
   public function myMethod(): void
   {
       // ...
   }
}
```

Рекомендуемый стиль: [PSR-12](https://www.php-fig.org/psr/psr-12/)

## Особенности PHP

### Смешанная парадигма  

Поддерживает процедурный, объектно-ориентированный и функциональный стили.

### Тесная интеграция с вебом

Переменные `$_GET`, `$_POST`, `$_SESSION`, `$_COOKIE`, `$_SERVER`, `$_FILES` и др. позволяют легко обрабатывать HTTP-запросы.

### Встроенные суперглобальные массивы

```php
$_GET, $_POST, $_REQUEST, $_FILES, $_ENV, $_SERVER, $_SESSION, $_COOKIE
```

### Легкость подключения файлов

 ```php
 include 'file.php';
 require 'file.php';
 include_once 'file.php';
 require_once 'file.php';
 ```

### Автозагрузка классов (autoload)

 ```php
 spl_autoload_register(function ($class) {
     include $class . '.php';
 });
 ```

### Composer — менеджер зависимостей

 ```bash
 composer init
 composer require vendor/package
 require 'vendor/autoload.php';
 ```

### Поддержка шаблонов прямо в коде

 ```php
 <html>
 <body>
     <h1>Hello, <?= $name ?></h1>
 </body>
 </html>
 ```

### Фильтрация и безопасность

 ```php
 htmlspecialchars($str); // экранирование HTML
 filter_var($email, FILTER_VALIDATE_EMAIL);
 password_hash($pass, PASSWORD_DEFAULT);
 ```

### Мультиязычность и локализация

PHP поддерживает `gettext()`, `setlocale()`, и `intl` (включая форматирование дат, валют, чисел).

### Расширения C и подключаемые модули

Многие функции доступны через расширения: `mysqli`, `gd`, `curl`, `mbstring`, `intl`, `openssl` и т.п.

### Встроенный сервер для разработки

 ```bash
 php -S localhost:8000
 ```

## PDO Шпаргалка

### Подключение к БД

```php
$dsn = 'mysql:host=localhost;dbname=test;charset=utf8mb4';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    die("Ошибка подключения: " . $e->getMessage());
}
```

### Выборка данных

#### Простой запрос

```php
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll();
```

#### С параметрами

```php
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);
$user = $stmt->fetch();
```

#### Именованные параметры

```php
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch();
```

### Вставка/Обновление/Удаление

```php
$stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->execute(['Иван', 'ivan@example.com']);
$newId = $pdo->lastInsertId();
```

### Пакетная вставка

```php
$data = [
    ['Иван', 'ivan@example.com'],
    ['Мария', 'maria@example.com']
];

$stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
foreach ($data as $row) {
    $stmt->execute($row);
}
```

### Обновление

```php
$stmt = $pdo->prepare("UPDATE users SET name = ? WHERE id = ?");
$stmt->execute(['Новое имя', $id]);
$affectedRows = $stmt->rowCount();
```

### Удаление

```php
$stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
$stmt->execute([$id]);
```

### Транзакции

```php
try {
    $pdo->beginTransaction();
    $pdo->exec("UPDATE accounts SET balance = balance - 100 WHERE id = 1");
    $pdo->exec("UPDATE accounts SET balance = balance + 100 WHERE id = 2");
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    echo "Ошибка: " . $e->getMessage();
}
```

### Режимы выборки

```php
// Если запрашивается одна колонка, можно получить массив значений
$stmt->fetchAll(PDO::FETCH_COLUMN);

// Ассоциативный массив (по умолчанию)
$stmt->fetch(PDO::FETCH_ASSOC);

// Объект
$stmt->fetch(PDO::FETCH_OBJ);

// Конкретный класс
$stmt->fetchObject('User');

// Все строки
$stmt->fetchAll(PDO::FETCH_GROUP | PDO::FETCH_UNIQUE);
```

### Полезные методы

```php
// Количество затронутых строк
$stmt->rowCount();

// ID последней вставленной записи
$pdo->lastInsertId();

// Получить все ошибки
$pdo->errorInfo();
```