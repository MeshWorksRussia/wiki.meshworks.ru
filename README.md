# MeshWorks Wiki

MeshWorks Wiki — публичная база знаний по Meshtastic и инфраструктуре MeshWorks. Репозиторий хранит весь исходный код Docusaurus‑сайта, который развёрнут на https://wiki.meshworks.ru.

## Что внутри
- [Docusaurus 3](https://docusaurus.io/) (режим docs-only) с локальным поиском `@easyops-cn/docusaurus-search-local`.
- Тематические кастомизации (`src/css/custom.css`, `src/theme/**`) и дополнительные MDX-компоненты.
- Контент в `docs/**` + статические артефакты в `static/**` (картинки, favicons).
- Дополнительные советы и FAQ для авторов — страница `/wiki/how-to-edit` (`src/pages/contributing.mdx`).

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
| `npm run check`    | `lint` + `build`, используется в CI    |
| `npm run clear`    | удаляет кеш Docusaurus (`.docusaurus/`) |

## Как контрибьютить
Полный процесс описан в [CONTRIBUTING.md](CONTRIBUTING.md) и на https://wiki.meshworks.ru/wiki/how-to-edit.

## CI и деплой
- `.github/workflows/ci.yml` прогоняет `npm run check` на каждом Pull Request и push в `main`.
- `.github/workflows/deploy.yml` запускается вручную (`workflow_dispatch`) и импортирует изменения на прод. Все секреты лежат в GitHub → Settings → Secrets.

Рекомендации по контенту и процессам — в `docs/wiki/wiki-docusaurus.md`.
