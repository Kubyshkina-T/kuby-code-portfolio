# KUBY CODE Portfolio

Первая рабочая версия персонального сайта-портфолио full stack разработчика Tanya под брендом **KUBY CODE**. Это адаптивный одностраничный сайт с секциями About, Projects, Tech Stack, Why Work With Me и Contact.

## Стек

- Next.js
- React
- TypeScript
- современный CSS
- vinext / Vite для локальной разработки и production-сборки

## Установка

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

После запуска откройте `http://localhost:3000`.

## Production build

```bash
npm run build
```

Локальный production-сервер:

```bash
npm run start
```

## Основная структура

```text
app/
  globals.css       # глобальные стили и адаптивность
  layout.tsx        # метаданные и общий layout
  page.tsx          # сборка главной страницы
components/         # компоненты секций сайта
data/
  projects.ts       # данные карточек проектов
public/
  hero-image.png    # портрет в Hero
```

## Где менять контент

- Тексты секций находятся в соответствующих файлах внутри `components/`.
- Проекты, технологии и ссылки на Live Demo/GitHub находятся в `data/projects.ts`.
- Контактные ссылки находятся в `components/Contact.tsx`.
- Цвета, отступы, анимации и адаптивность находятся в `app/globals.css`.

Для добавления нового проекта достаточно добавить новый объект в массив `projects` в `data/projects.ts`.
