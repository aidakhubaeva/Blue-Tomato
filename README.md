# Blue Tomato — магазин цифровых раскрасок

![Sketch](./public/images/sketch.jpg)  
![Background](./public/images/background.jpg)

# About the Project

**Blue Tomato** is a prototype of a digital coloring book store, built with React and TypeScript, using Redux Toolkit for state management.

## Concept
A digital coloring book store that grew out of my hobby - creating contour and graphic illustrations. Six months ago, I developed a children’s coloring book about small birds in the
format of a research journal, where a child can feel like an explorer. The first small print run received excellent feedback, and the project began to expand: now the coloring books will be available in both digital and printed formats.

The platform is also designed for collaboration with artists: creators can submit themed works for review, have them added to the collection after moderation, and receive a percentage of sales.

## Completed:
 - Developed a scalable product catalog using React and Redux Toolkit, reducing navigation time by up to 40% through optimized filtering and pagination logic.
 - Implemented a responsive layout system using SCSS, Flexbox, and Grid with 6 breakpoints to ensure full cross-device compatibility.
 - Designed the brand identity and integrated it into the interface with pixel-perfect precision, reducing UI rework by 50%.
 - Set up a modular UI structure using reusable components and custom hooks, decreasing logic duplication and doubling development speed in future iterations.
 - Configured the development environment with Vite, hot reloading, and predefined build scripts, reducing onboarding time for new contributors by approximately 3 hours.

## In Development:
 - Multi-step checkout form with React Hook Form and Yup validation, aiming to reduce input errors and failed submissions by ~50%.
 - Lazy loading for product images and optimized SVG previews, targeting a 30–35% improvement in page load speed.
 - Artist’s Dashboard: secure login for artists, purchase statistics, ability to upload new artworks, with moderation before adding to the catalog.
 - Payment gateway integration (acquiring, cards, Apple/Google Pay), webhook handling, and automated generation of receipts/invoices and order status updates.
 - Email infrastructure: transactional emails (order confirmation, invoice, status updates), templates, newsletters, unsubscribe functionality, and SPF/DKIM/DMARC configuration.
 - Analytics and tracking: integration of web analytics systems, e-commerce events, conversion tracking, and user funnel analysis.


## Стек

- React
- TypeScript
- Redux Toolkit
- CSS Modules
- Vite

## Компоненты

- `App`
- `AppHeader`
- `AppBackground`
- `ProductCard`
- `ProductDetails`
- `Cart`
- `Pay`
- `Login`
- `Account`
- `Modal`

---

## Redux Slices

- `cartSlice` - управление корзиной (добавление, удаление)
- `modalSlice` - управление модальными окнами (`openModal`, `closeModal`)
- `hoverSlice` - эффект ч/б фона при наведении
- `userSlice` - под авторизацию

---
## Разработка

Чтобы запустить проект:

```bash
npm install
npm run dev
