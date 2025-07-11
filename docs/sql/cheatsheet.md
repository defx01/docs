# Шпаргалка по языку SQL

## Работа с базами данных

### Создать БД

`CREATE DATABASE db_name;`

### Удалить БД

`DROP DATABASE db_name;`

### Выбрать БД для работы

`USE db_name;`

### Показать все БД

`SHOW DATABASES;`

## Работа с таблицами

### Создать таблицу

```sql
CREATE TABLE table_name (
    id INT AUTO_INCREMENT PRIMARY KEY,
    column1 VARCHAR(50) NOT NULL,
    column2 INT DEFAULT 0,
    FOREIGN KEY (column2) REFERENCES other_table(id)
);
```

### Удалить таблицу

`DROP TABLE table_name;`

### Показать все таблицы

`SHOW TABLES;`

### Показать структуру таблицы

`DESCRIBE table_name;`

### Добавить столбец

`ALTER TABLE table_name ADD COLUMN new_column INT;`

### Удалить столбец

`ALTER TABLE table_name DROP COLUMN column_name;`

### Переименовать таблицу

`ALTER TABLE old_name RENAME TO new_name;###

## Основные запросы

### Выбрать данные

```sql
SELECT * FROM table_name;
SELECT column1, column2 FROM table_name;
```

### Выбрать с условием

`SELECT * FROM table_name WHERE column1 = 'value';###

### Сортировка

`SELECT * FROM table_name ORDER BY column1 DESC;`

### Ограничение выборки

`SELECT * FROM table_name LIMIT 10;`

### Группировка

`SELECT column1, COUNT(*) FROM table_name GROUP BY column1;`

## Вставка, обновление, удаление

### Добавить запись

`INSERT INTO table_name (column1, column2) VALUES ('value1', 123);`

### Обновить запись

`UPDATE table_name SET column1 = 'new_value' WHERE id = 1;`

### Удалить запись

`DELETE FROM table_name WHERE id = 1;`

## Соединения таблиц (JOIN)

### INNER JOIN

```sql
SELECT * FROM table1
INNER JOIN table2 ON table1.id = table2.table1_id;
```

### LEFT JOIN

```sql
SELECT * FROM table1
LEFT JOIN table2 ON table1.id = table2.table1_id;
```

### RIGHT JOIN

```sql
SELECT * FROM table1
RIGHT JOIN table2 ON table1.id = table2.table1_id;
```

### FULL JOIN (в MySQL нет, используется UNION)

```sql
SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.table1_id
UNION
SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.table1_id;
Агрегатные функции
SELECT COUNT(*) FROM table_name;
SELECT SUM(column1) FROM table_name;
SELECT AVG(column1) FROM table_name;
SELECT MAX(column1) FROM table_name;
SELECT MIN(column1) FROM table_name;
```

## Индексы

### Создать индекс

`CREATE INDEX index_name ON table_name (column1);`

### Удалить индекс

`DROP INDEX index_name ON table_name;`

## Транзакции

### Начать транзакцию

`START TRANSACTION;`

### Подтвердить изменения

`COMMIT;`

### Отменить изменения

`ROLLBACK;`

## Представления (VIEW)

### Создать представление

`CREATE VIEW view_name AS SELECT column1, column2 FROM table_name;`

### Удалить представление

`DROP VIEW view_name;`

## Управление пользователями

### Создать пользователя

`CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';`

### Дать права

`GRANT ALL PRIVILEGES ON db_name.* TO 'username'@'localhost';`

### Отозвать права

`REVOKE ALL PRIVILEGES ON db_name.* FROM 'username'@'localhost';`

### Удалить пользователя

`DROP USER 'username'@'localhost';`