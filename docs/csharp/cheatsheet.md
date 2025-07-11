# Шпаргалка по языку С#

## Основы синтаксиса

### Комментарии:

```csharp
// Однострочный комментарий  
/* Многострочный комментарий */  
/// Документирующий комментарий (для XML-документации)
```

### Вывод в консоль:

```csharp
Console.WriteLine("Hello, World!");  // С переводом строки  
Console.Write("Hello");             // Без перевода строки
```

### Ввод с консоли:

```csharp
string input = Console.ReadLine();  
int number = int.Parse(Console.ReadLine());
```

## Типы данных

### Примитивные типы:

```csharp
int number = 10;            // Целое число  
double pi = 3.14;           // Число с плавающей точкой  
char symbol = 'A';          // Символ  
string text = "Hello";      // Строка  
bool isTrue = true;         // Логический тип
```

### Объявление переменных:

```csharp
var name = "Alex";          // Неявная типизация (определяется компилятором)  
const double PI = 3.14;     // Константа
```

## Условные конструкции

### if-else:

```csharp
if (age >= 18)  
{  
    Console.WriteLine("Взрослый");  
}  
else if (age > 12)  
{  
    Console.WriteLine("Подросток");  
}  
else  
{  
    Console.WriteLine("Ребёнок");  
}
```

### switch-case:

```csharp
switch (day)  
{  
case 1:  
    Console.WriteLine("Понедельник");  
    break;  
case 2:  
    Console.WriteLine("Вторник");  
    break;  
default:  
    Console.WriteLine("Другой день");  
    break;  
}
```

## Циклы

###  for:

```csharp
for (int i = 0; i < 10; i++)  
{  
    Console.WriteLine(i);  
}
```

### while / do-while:

```csharp
while (x < 100)  
{  
    x *= 2;  
}

do  
{  
    Console.WriteLine("Выполнится хотя бы 1 раз");  
} while (false);
```

### foreach:

```csharp
foreach (var item in collection)  
{  
    Console.WriteLine(item);  
}
```

## Массивы и коллекции

### Массивы:

```csharp
int[] numbers = new int[5] { 1, 2, 3, 4, 5 };  
Console.WriteLine(numbers[0]);  // Доступ по индексу
```

### Списки (List):

```csharp
List<string> names = new List<string>() { "Alice", "Bob" };  
names.Add("Charlie");  
names.Remove("Bob");
```

## Функции (методы)

### Объявление метода:

```csharp
int Add(int a, int b)  
{  
    return a + b;  
}
```

### Опциональные параметры:

```csharp
void Greet(string name = "Гость")  
{  
    Console.WriteLine($"Привет, {name}!");  
}
```

### Лямбда-выражения:

`Func<int, int, int> multiply = (x, y) => x * y;`

## ООП в C#

### Класс и объект:

```csharp
class Person  
{  
    public string Name { get; set; }  // Свойство  
    public int Age { get; set; }

    public void SayHello()  
    {  
        Console.WriteLine($"Меня зовут {Name}");  
    }  
}

var person = new Person { Name = "Иван", Age = 30 };  
person.SayHello();
```

### Наследование:

```csharp
class Student : Person  
{  
    public string University { get; set; }  
}
```

## Обработка исключений

```csharp
try  
{  
    int result = 10 / int.Parse(Console.ReadLine());  
}  
catch (DivideByZeroException)  
{  
    Console.WriteLine("Деление на ноль!");  
}  
catch (Exception ex)  
{  
    Console.WriteLine($"Ошибка: {ex.Message}");  
}  
finally  
{  
    Console.WriteLine("Выполнится в любом случае");  
}
```

## Работа с файлами

```csharp
using System.IO;

// Чтение из файла  
string text = File.ReadAllText("file.txt");

// Запись в файл  
File.WriteAllText("output.txt", "Hello, File!");
```

## Дополнительно

### LINQ (Language Integrated Query):

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };  
var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
```

### Асинхронность (async/await):

```csharp
async Task DownloadDataAsync()  
{  
    await Task.Delay(2000);  // Имитация загрузки  
    Console.WriteLine("Данные загружены!");  
}
```