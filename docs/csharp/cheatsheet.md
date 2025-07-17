# Шпаргалка по C#

## Комментарии

```csharp
// Однострочный комментарий
/* Многострочный комментарий */
/// используется для XML-документации
```

## Базовые типы данных

| Тип        | Пример        | Размер   | Описание                  |
|------------|---------------|----------|---------------------------|
| `int`      | `int x = 10;` | 4 байта  | Целое число               |
| `long`     | `long l = 99;`| 8 байт   | Длинное целое             |
| `float`    | `float f = 3.14f;` | 4 байта | Число с плавающей точкой |
| `double`   | `double d = 2.718;`| 8 байт | Точнее, чем `float`       |
| `decimal`  | `decimal m = 9.99m;`| 16 байт | Точные фин. вычисления    |
| `bool`     | `bool b = true;` | 1 байт  | Логический тип            |
| `char`     | `char c = 'A';` | 2 байта | Один символ               |
| `string`   | `string s = "Hi";` | -     | Строка                    |
| `var`      | `var x = 42;` | -        | Неявный тип               |
| `object`   | `object o = x;` | -       | Базовый тип для всех      |

## Условия

```csharp
if (x > 0) { ... }
else if (x == 0) { ... }
else { ... }

switch (value)
{
    case 1: Console.WriteLine("One"); break;
    default: Console.WriteLine("Other"); break;
}
```

## Циклы

```csharp
for (int i = 0; i < 10; i++) { ... }

while (condition) { ... }

do { ... } while (condition);

foreach (var item in list) { ... }
```

## Методы

```csharp
void SayHello(string name)
{
    Console.WriteLine($"Hello, {name}");
}

int Add(int a, int b) => a + b;
```

## Классы и ООП

```csharp
class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age) =>
        (Name, Age) = (name, age);

    public void SayHello() => Console.WriteLine($"Привет, я {Name}");
}

var p = new Person("Анна", 25);
p.SayHello();
```

### Наследование и интерфейсы

```csharp
interface IAnimal
{
    void Speak();
}

class Dog : IAnimal
{
    public void Speak() => Console.WriteLine("Woof!");
}
```

## Свойства (автоматически реализуемые)

```csharp
public string Name { get; set; }
public int Age { get; init; } // только при создании
```

## Массивы и списки

```csharp
int[] nums = { 1, 2, 3 };
List<string> names = new() { "Alice", "Bob" };

names.Add("Eve");
names.Remove("Bob");
```

## LINQ (требует `using System.Linq;`)

```csharp
var even = nums.Where(x => x % 2 == 0).ToList();
var namesStartingWithA = names.Where(n => n.StartsWith("A"));

var sorted = names.OrderBy(n => n).ToList();
var first = names.FirstOrDefault();
var grouped = names.GroupBy(n => n.Length);
var sum = nums.Sum();
```

## Атрибуты

```csharp
[Serializable]
class Data { }

[Obsolete("Use NewMethod instead")]
void OldMethod() { }
```

## Пространства имён и файлы

```csharp
using System;
using System.Collections.Generic;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, world!");
        }
    }
}
```

## Работа с `var`, `dynamic`, `object`

```csharp
var x = 5;         // int
object o = "text"; // любой тип
dynamic d = 10;    // определяется во время выполнения
```

## Async / Await (асинхронность)

```csharp
async Task<int> GetNumberAsync()
{
    await Task.Delay(1000);
    return 42;
}
```

## Nullable-типы

```csharp
int? x = null;
if (x.HasValue) Console.WriteLine(x.Value);
```

## Работа со строками

```csharp
string s = "Hello";
string s2 = s.ToUpper();
bool contains = s.Contains("el");
```

## Форматирование строк

```csharp
string name = "Anna";
int age = 30;
string s = $"{name} is {age} years old";
```
