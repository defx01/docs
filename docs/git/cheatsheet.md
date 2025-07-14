# Шпаргалка по работе с Git

::: tip
Работать с git проще через визуальный интерфейс IDE, например от JetBrains
:::

## Справка

`git <command> --help` -  справка по любой команде

## Основные команды

### Инициализация
```bash
git init                        # Создать новый репозиторий
git clone <url>                 # Клонировать репозиторий
```

## Ветки

```bash
git branch                         # Показать все ветки
git branch <name>                  # Создать новую ветку
git checkout <branch>              # Переключиться на ветку
git checkout -b <new-branch>       # Создать и переключиться
git branch -d <branch>             # Удалить ветку (локально)
git push origin --delete <branch>  # Удалить ветку (на сервере)
```

## Коммиты

```bash
git status                      # Показать изменения
git add <file>                  # Добавить файл в staged
git add .                       # Добавить все изменения
git commit -m "message"         # Закоммитить изменения
git commit --amend              # Исправить последний коммит
```

## Синхронизация

```bash
git pull                        # Получить изменения (fetch + merge)
git pull --rebase               # Получить изменения с rebase
git fetch                       # Проверить изменения (без слияния)
git push                        # Отправить изменения
git push -u origin <branch>     # Отправить и установить связь
```

## Работа с историей

```bash
git log                         # Показать историю
git log --oneline --graph       # Краткая история с графиком
git diff                        # Показать недобавленные изменения
git reset HEAD~1                # Отменить последний коммит (оставить изменения)
git reset --hard HEAD~1         # Отменить последний коммит (удалить изменения)
git revert <commit-hash>        # Отменить коммит (создаст новый коммит)
```

## Полезные фишки

```bash
git stash                       # Временно сохранить изменения
git stash pop                   # Вернуть сохраненные изменения
git cherry-pick <commit-hash>   # Перенести коммит в текущую ветку
git rebase -i HEAD~3            # Изменить/объединить несколько коммитов
git clean -fd                  # Удалить неотслеживаемые файлы
```

## Работа с удаленным репозиторием

```bash
git remote -v                   # Показать удаленные репозитории
git remote add origin <url>     # Добавить удаленный репозиторий
git fetch --prune               # Удалить ссылки на удаленные ветки
git push origin --force         # Принудительная отправка (осторожно!)
```