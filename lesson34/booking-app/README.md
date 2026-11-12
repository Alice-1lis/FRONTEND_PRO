Booking-app: 
https://frontend-pro-eosin.vercel.app/
# Олеся · [GitHub](https://github.com/Alice-1lis)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





## Що вміє застосунок

- Пошук готелів за містом, датами заїзду й виїзду та кількістю гостей.
- Валідація форми: виїзд не може бути раніше за заїзд, дати в минулому недоступні, помилки показуються прямо під полями.
- Список готелів із картками: фото, зірки, оцінка, відгуки, відстань до центру, ціна за весь період.
- Окрема сторінка готелю з описом, зручностями й підтвердженням бронювання.
- Сторінка «Обране»: готелі можна додавати й прибирати сердечком.
- Дві мови, українська та англійська, з автовизначенням мови браузера та правильними формами множини.
- Адаптивний інтерфейс: окреме мобільне меню, компактна форма на телефоні.
- Власна тема Material UI в синьо-бурштинових кольорах, «скляні» шапка й футер, анімований декор на головній.
- Сторінка 404.

## Технології

Це односторінковий застосунок на React 19 зі збіркою на Vite.

- **Інтерфейс:** Material UI
- **Маршрутизація:** React Router
- **Форми та валідація:** React Final Form
- **Глобальний стан:** Redux
- **Асинхронні запити, стани завантаження, успіху й помилки:** Redux Saga
- **Багатомовність:** i18next та react-i18next з автовизначенням мови браузера
- **HTTP-запити:** Axios
- **Серверна частина:** Node.js та Express із CORS і dotenv
- **Якість коду:** ESLint

## Демо-дані

Дані готелів лежать у `db.json`. Результати пошуку є для **Boston** і **New York**. Інші міста у списку залишені навмисно без готелів, щоб показати, як застосунок обробляє порожній результат.

Результати пошуку й обране зберігаються в пам'яті, тому після перезавантаження сторінки вони скидаються.


## Чого я навчилася

- Розділяти логіку: компоненти відправляють дії, а запити й побічні ефекти живуть у сагах.
- Робити багатомовний інтерфейс разом з правильною множиною в українській.
- Налаштовувати єдину тему й виносити повторювані стилі в одне місце.
- Адаптувати інтерфейс під телефон, планшет і десктоп.
- Розгортати застосунок на Vercel.
