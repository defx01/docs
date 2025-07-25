# История развития PHP

Все изменения: https://www.php.net/manual/ru/migration70.php

## 5.6.0

В этой версии уже есть: 
- сессии, замыкания
- пространства имен, классы, трейты, интерфейсы
- генераторы, итераторы
- `function(...$params)`

## 7.0

Строгая типизация `declare(strict_types=1)`

Объявления скалярных типов `function sumOfInts(int ...$ints)`

Объявления возвращаемых типов `function arraysSum(array ...$arrays): array`

Константа как массив `define('ANIMAL', ['cat','dog','bird'])`

Оператор `??` - проверка на то что значение существует и не является null

Оператор `<=>` - возвращает целое число (int) меньше, больше или равное нулю, когда значение переменной $a меньше, больше или равно значению переменной $b.

Анонимные классы

Синтаксис экранирования кодовых точек юникода `"\u{aa}"`

`intdiv` - целочисленное деление

Генераторы получили `return` и `yield from`

`preg_replace_callback_array()`

`random_bytes() и random_int()`

`(clone $foo)->bar()`

Конструкция ожидания `assert(false, new CustomError('Сообщение об ошибке'))`

`unserialize()` с фильтрацией

## 7.1

Обнуляемые возвращаемые типы `: ?string`

`: void`

Деструктуризация массива, конструкция `list()`

Константы классов теперь поддерживают определение области видимости `private const PRIVATE_CONST = 4;`

Псевдотип iterable `function iterator(iterable $iter)`

Обработка набора исключений в одном блоке catch `catch (FirstException | SecondException $e)`

Поддержка отрицательных смещений в строках

Асинхронная обработка сигналов

## 7.2

Был введён новый тип, object, который может использоваться в передаваемых параметрах (контравариантность) и возвращаемых значениях (ковариантность) для любых объектов.

Разрешено переопределение абстрактных методов

## 7.3

https://www.php.net/manual/ru/migration73.new-features.php

## 7.4

Типизированные свойства `public string $name;`

Стрелочные функции с автоматическим use (охватывает область видимости родителя) `array_map(fn($n) => $n * $factor, $array);`

Ограниченная ковариация возвращаемого типа и контравариантность типа аргумента

Присваивающий оператор объединения с null `$array['key'] ??= computeDefault();`

Распаковка внутри массивов `$fruits = ['banana', 'orange', ...$parts, 'watermelon'];`

Разделитель в числовых литералах `299_792_458;`

Слабые ссылки https://www.php.net/manual/ru/class.weakreference.php

Можно выбрасывать исключения в магическом методе `__toString()`

Модуль FFI (доступ к функциям языка Си)

`mb_str_split()`

В SQL-запросах PDO разрешили экранировать вопросительные знаки

Функция `strip_tags()` теперь также принимает массив разрешённых тегов

`__serialize() и __unserialize()`

`array_merge(...$arrays)`

`proc_open()`

## 8.0

Именованные аргументы `(paramName: $value)`

Attributes https://www.php.net/manual/ru/language.attributes.overview.php

Объявление свойств в конструкторе `public function __construct(protected int $x, protected int $y = 0) {}`

Union types (Объединение типов) `: array|string`

Альтернатива switch → `match()`

Null-безопасные методы и свойства `$result = $repository?->getUser(5)?->name;`

Добавлен класс WeakMap, Добавлен класс ValueError

`: static, : mixed`

`$object::class` аналогично `get_class($object)`

`new и instanceof теперь можно использовать с произвольными выражениями, используя new (expression)(...$args) и $obj instanceof (expression)`

throw теперь можно использовать как выражение `$fn = fn() => throw new Exception('Исключение в стрелочной функции');`

`str_contains(), str_starts_with() и str_ends_with()`

## 8.1

Распаковка массива со строковыми ключами `$arr1 = [1, 'a' => 'b']; $arr2 = [...$arr1, 'c' => 'd'];`

Теперь можно указать именованные аргументы после распаковки аргументов. например: `foo(...$args, named: $arg)`

При загрузке файлов появился новый ключ full_path

Enums

Файберы

Пересечение типов `func(Traversable&Countable $param)`

`: never` - функция либо вызывает exit(), либо выбрасывает исключение, либо не завершается

Теперь объекты также можно передавать в define()

Readonly-свойства `public readonly string $prop;`

final для констант класса `final public const X = "foo";`  а сами константы стали переопределяемыми (WTF?)

## 8.2

`#[\SensitiveParameter]`

Добавлена INI-директива error_log_mode, которая позволяет установить разрешения для файла журнала ошибок

Теперь можно использовать null и false как самостоятельные типы. Добавлен тип true.

Константы в трейтах

Readonly-классы

## 8.3

Анонимные классы теперь могут быть помечены как доступные только для чтения

Свойства с доступом только для чтения теперь можно повторно инициализировать при клонировании.

Классы, интерфейсы, трейты и константы перечислений теперь поддерживают объявления типов

Замыкания, которые создали в магических методах, теперь принимают именованные аргументы

Модификатор final теперь разрешается указывать при импорте метода трейта

Добавили атрибут #[\Override], который проверяет существование метода в родительском классе или в реализуемом интерфейсе

Теперь можно получить доступ к константам классов через переменные: C::`{$name}`



S - Single Responsibility - Принцип единственной ответственности. Класс отвечает только за одну область, например логика авторизация может быть только в классе Auth
O - Open-Closed - Принцип открытости-закрытости. Классы должны быть открыты для расширения, но закрыты для изменения (что практически невозможно). Например: класс оплаты реализует интерфейс PaymentInterface и его методы, не переписывая сам интерфейс
L - Liskob Substitution - Принцип подстановки. Если мы заменим дочерний класс на родительский, поведение программы не должно измениться
I - interface segregation principle - Принцип разделения интерфейса. Лучше много точечных интерфейсов, чем один общий. В классах использующих интерфейс не должно оставаться нереализуемых методов
D - Dependency Injection - Принцип инверсии зависимостей. Зависьте от абстракций, а не от конкретных классов (???)