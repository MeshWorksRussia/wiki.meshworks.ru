# MeshWorks Wiki

MeshWorks Wiki — публичная база знаний по Meshtastic и инфраструктуре MeshWorks.  
Репозиторий хранит весь исходный код Docusaurus‑сайта, который развёрнут на https://wiki.meshworks.ru


## Как контрибьютить
Полный процесс описан в [CONTRIBUTING.md](CONTRIBUTING.md) и на https://wiki.meshworks.ru/wiki/how-to-edit.

## Быстрый старт
Требования: Node.js ≥ 20, npm 10.

```bash
npm ci           # устанавливаем зависимости один раз
npm start        # dev-сервер на http://localhost:3000/
```

Полезные скрипты:

| Команда            | Назначение                             |
|--------------------|----------------------------------------|
| `npm start`        | dev-сервер с hot reload                |
| `npm run build`    | production-сборка в `build/`           |
| `npm run serve`    | локальный просмотр собранного билда    |
| `npm run lint`     | `tsc --noEmit`, проверка TypeScript    |
| `npm run lint:mdx` | Проверка Markdown/MDX через ESLint     |
| `npm run check`    | `lint` + `build`, используется в CI    |
| `npm run clear`    | удаляет кеш Docusaurus (`.docusaurus/`) |

## CI и деплой
- `.github/workflows/ci.yml` гоняет `npm run check` на каждом Pull Request и push в `main`.
- `.github/workflows/deploy.yml` после каждого push в `main` (и при ручном запуске `workflow_dispatch`) собирает проект на runner’е и синхронизирует `/opt/compose/external/wiki/app`.

## Лицензия
- Весь контент MeshWorks Wiki распространяется под [Creative Commons Attribution-ShareAlike 4.0 International](LICENSE).
- Для удобства доступно краткое описание на русском — [LICENSE.ru.md](LICENSE.ru.md) (приоритет за оригинальным английским текстом).
- Лицензия распространяется на весь исторический контент репозитория. Отправляя вклад, вы подтверждаете согласие на публикацию под CC BY-SA 4.0.
- Если считаете, что материалы нарушают чьи-то права, напишите на `contact@meshworks.ru`.
