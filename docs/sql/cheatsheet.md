# Шпаргалка по языку SQL

## Комментарии

```sql
-- Однострочный комментарий
/* Многострочный комментарий */
```

## Работа с базами данных

```sql
-- Создать БД
CREATE DATABASE `example_db`
CHARACTER SET utf8mb4          -- 4-байтная кодировка UTF-8 (поддержка emoji)
COLLATE utf8mb4_unicode_ci    -- Сравнение без учета регистра (case insensitive)
DEFAULT ENCRYPTION='N'         -- Шифрование (MySQL 8.0.16+)
COMMENT='Пример базы с Unicode'
CONNECTION LIMIT 100;          -- Макс. соединений (не все СУБД поддерживают)

-- Удалить БД
DROP DATABASE db_name;

-- Выбрать БД для работы
USE db_name;

-- Показать все БД
SHOW DATABASES;
```

## Работа с таблицами

### Создание таблицы

```sql
CREATE TABLE IF NOT EXISTS `employees` (
    -- Основной идентификатор
   `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Уникальный ID сотрудника',

    -- Персональные данные
    `first_name` VARCHAR(50) NOT NULL COMMENT 'Имя сотрудника',
    `last_name` VARCHAR(50) NOT NULL COMMENT 'Фамилия сотрудника',
    `birth_date` DATE NULL COMMENT 'Дата рождения (ГГГГ-ММ-ДД)',

    -- Контактная информация
    `email` VARCHAR(100) NOT NULL COMMENT 'Рабочий email',
    `phone` VARCHAR(20) NULL COMMENT 'Номер телефона с кодом страны',

    -- Рабочие данные
    `department_id` INT UNSIGNED NOT NULL COMMENT 'Ссылка на отдел',
    `position` VARCHAR(100) NOT NULL DEFAULT 'Junior Specialist' COMMENT 'Должность',
    `salary` DECIMAL(10,2) UNSIGNED NOT NULL COMMENT 'Оклад',
    `hire_date` DATE NOT NULL COMMENT 'Дата приема на работу',
    `is_active` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '1 - активен, 0 - уволен',

    -- Дополнительные данные
    `skills` JSON NULL COMMENT 'Навыки в формате JSON',
    `metadata` TEXT NULL COMMENT 'Дополнительная метаинформация',
    `profile_image` BLOB NULL COMMENT 'Фото профиля',

    -- Системные поля
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
        COMMENT 'Дата создания записи',
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP COMMENT 'Дата последнего обновления',
    `deleted_at` TIMESTAMP NULL COMMENT 'Дата удаления (soft delete)',

    -- Ограничения и индексы
    PRIMARY KEY (`id`),
    UNIQUE INDEX `email_unique` (`email`),
    INDEX `department_idx` (`department_id`),
    INDEX `name_idx` (`last_name`, `first_name`),
    FULLTEXT INDEX `position_ft_idx` (`position`),

    -- Внешние ключи (если нужны)
    CONSTRAINT `fk_employee_department`
    FOREIGN KEY (`department_id`)
    REFERENCES `departments` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    -- Проверки значений
    CONSTRAINT `chk_salary` CHECK (`salary` >= 0),
    CONSTRAINT `chk_email` CHECK (`email` LIKE '%@%')
)  
ENGINE=InnoDB  -- Поддержка транзакций и внешних ключей 
DEFAULT CHARSET=utf8mb4  -- Поддержка emoji и всех Unicode-символов
COLLATE=utf8mb4_unicode_ci  -- Сравнение строк с учетом Unicode
COMMENT='Таблица сотрудников компании'
AUTO_INCREMENT=1001  -- Начальное значение для автоинкремента
ROW_FORMAT=DYNAMIC  -- Оптимальный формат хранения
PARTITION BY RANGE (YEAR(hire_date)) (  -- Опциональное партиционирование
    PARTITION p2020 VALUES LESS THAN (2021),
    PARTITION p2021 VALUES LESS THAN (2022),
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION pmax VALUES LESS THAN MAXVALUE
);
```

### Другие действия с таблицами

```sql
-- Удалить таблицу
DROP TABLE table_name;

-- Показать все таблицы
SHOW TABLES;

-- Показать структуру таблицы
DESCRIBE table_name;

-- Добавить столбец
ALTER TABLE table_name ADD COLUMN new_column INT;

-- Удалить столбец
ALTER TABLE table_name DROP COLUMN column_name;

-- Переименовать таблицу
ALTER TABLE old_name RENAME TO new_name;
```

## Основные запросы

```sql
SELECT 
    -- Выборка полей (включая агрегатные функции)
    t1.column1,
    t2.column2,
    COUNT(t3.id) AS item_count,
    AVG(t1.price) AS avg_price,
    MAX(t2.created_at) AS last_date
    
FROM 
    table1 t1
    -- Соединение таблиц
    INNER JOIN table2 t2 ON t1.id = t2.table1_id
    LEFT JOIN table3 t3 ON t2.id = t3.table2_id
    
WHERE 
    -- Условия фильтрации
    t1.status = 'active'
    AND t2.value > 100
    AND t3.deleted_at IS NULL
    
GROUP BY 
    -- Группировка данных
    t1.column1,
    t2.column2
    
HAVING 
    -- Фильтрация после группировки
    COUNT(t3.id) > 5
    AND AVG(t1.price) < 500
    
ORDER BY 
    -- Сортировка результатов
    last_date DESC,
    avg_price ASC
    
LIMIT 
    -- Ограничение количества результатов
    10 OFFSET 20;
```

## Вставка, обновление, удаление

```sql
-- Добавить запись
INSERT INTO table_name (column1, column2) VALUES ('value1', 123);

-- Обновить запись
UPDATE table_name SET column1 = 'new_value' WHERE id = 1;

-- Удалить запись
DELETE FROM table_name WHERE id = 1;
```

## Соединения таблиц (JOIN)

### INNER JOIN (Внутреннее соединение)

Возвращает только совпадающие записи из обеих таблиц

```sql
SELECT A.*, B.*
FROM table_a A
INNER JOIN table_b B ON A.key = B.key;
```

- Когда нужны только данные, присутствующие в обеих таблицах
- Особенность: Не включает NULL-значения в ключах соединения

### LEFT JOIN (Левое соединение)

Возвращает все записи из левой таблицы и совпадающие из правой

```sql
SELECT A.*, B.*
FROM table_a A
LEFT JOIN table_b B ON A.key = B.key;
```

- Когда нужно сохранить все записи из основной таблицы, даже если нет соответствий
- NULL-значения: Если соответствий нет, поля из правой таблицы будут NULL

### RIGHT JOIN (Правое соединение)

Возвращает все записи из правой таблицы и совпадающие из левой

```sql
SELECT A.*, B.*
FROM table_a A
RIGHT JOIN table_b B ON A.key = B.key;
```

- На практике: Используется редко, обычно заменяется LEFT JOIN

## Индексы

```sql
-- 1. Обычный индекс (B-tree)
CREATE INDEX idx_table_column ON table_name (column_name);

-- 2. Уникальный индекс
CREATE UNIQUE INDEX idx_unique_table_column ON table_name (column_name);

-- 3. Составной индекс (многоколоночный)
CREATE INDEX idx_composite_table_col1_col2 ON table_name (column1, column2);

-- 4. Частичный индекс (фильтруемый)
CREATE INDEX idx_partial_table_column ON table_name (column_name)
    WHERE condition; -- Для MySQL: не поддерживается, используйте вычисляемые колонки

-- 5. Индекс по выражению/функции
CREATE INDEX idx_func_table_column ON table_name (LOWER(column_name)); -- MySQL 8.0+, PostgreSQL

-- 6. Полнотекстовый индекс
CREATE FULLTEXT INDEX idx_ft_table_textcolumn ON table_name (text_column);

-- 7. Пространственный индекс (GIS)
CREATE SPATIAL INDEX idx_spatial_table_geom ON table_name (geom_column);

-- 8. Индекс с включенными колонками (covering index)
CREATE INDEX idx_covering_table_col1 ON table_name (column1)
    INCLUDE (column2, column3); -- MySQL: не поддерживает INCLUDE, используйте составной индекс

-- 9. Хэш-индекс (только для MEMORY таблиц в MySQL)
CREATE INDEX idx_hash_table_column USING HASH ON table_name (column_name);

-- 10. Индекс для JSON-поля (MySQL 5.7+)
CREATE INDEX idx_json_table_properties ON table_name ((JSON_EXTRACT(properties, '$.key')));
```


## Транзакции

```sql
-- Начать транзакцию
START TRANSACTION;

-- Подтвердить изменения
COMMIT;

-- Отменить изменения
ROLLBACK;
```

## Управление пользователями

```sql
-- Создать пользователя
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

-- Дать права
GRANT ALL PRIVILEGES ON db_name.* TO 'username'@'localhost';

-- Отозвать права
REVOKE ALL PRIVILEGES ON db_name.* FROM 'username'@'localhost';

-- Удалить пользователя
DROP USER 'username'@'localhost';
```
