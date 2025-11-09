# MeshWorks Wiki

MeshWorks Wiki — публичная база знаний по Meshtastic и инфраструктуре MeshWorks. Репозиторий хранит весь исходный код Docusaurus‑сайта, который развёрнут на https://wiki.meshworks.ru.

## Что внутри
- [Docusaurus 3](https://docusaurus.io/) (режим docs-only) с локальным поиском `@easyops-cn/docusaurus-search-local`.
- Тематические кастомизации (`src/css/custom.css`, `src/theme/**`) и дополнительные MDX-компоненты.
- Контент в `docs/**` + статические артефакты в `static/**` (картинки, favicons).
- Дополнительные советы и FAQ для авторов — в `docs/wiki/wiki-docusaurus.md`.

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
1. Нажмите кнопку **Edit this page** на странице wiki или отредактируйте нужный файл прямо в GitHub → создайте Pull Request.
2. Для локальной разработки создайте ветку, выполните `npm ci`, затем `npm start`.
3. Перед отправкой PR убедитесь, что `npm run check` проходит без ошибок.
4. Соблюдайте требования к front matter (минимум `title`, `slug`, `sidebar_label`, `sidebar_position`) и храните изображения в `static/img/` (подкаталог по смыслу, например `static/img/wiki/<slug>.png`).

Подробные правила, чеклист и FAQ — в [CONTRIBUTING.md](CONTRIBUTING.md).

## CI и деплой
- `.github/workflows/ci.yml` прогоняет `npm run check` на каждом Pull Request и push в `main`.
- `.github/workflows/deploy.yml` запускается вручную (`workflow_dispatch`) и импортирует изменения на прод. Все секреты лежат в GitHub → Settings → Secrets.

Рекомендации по контенту и процессам — в `docs/wiki/wiki-docusaurus.md`.
