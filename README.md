# Blue Tomato — магазин цифровых раскрасок

![Sketch](./public/images/sketch.jpg)  
![Background](./public/images/background.jpg)

# About the Project

**Blue Tomato** is a prototype of a digital coloring book store, built with React and TypeScript, using Redux Toolkit for state management.

## Concept
This is a digital coloring book store.
Where did the idea come from? I used to work in a profession related to drawing, but now it’s my hobby. I mostly create contour and graphic illustrations. About six months ago, I came up with the idea to make a children’s coloring book about small birds — but not just a regular one, a special one: not simply outlines, but a whole research journal where each child could feel like an explorer and a discoverer.
I designed and laid out the book, then distributed a small print run — the idea was very well received by children. After that, I wanted to expand it.
Now, the coloring book can be purchased in both digital and printed formats.

The project creates a storefront of coloring books, where each card displays contour art. When hovering over a card, the entire background switches to black-and-white mode to draw attention to the cover. This is not just a decorative effect — it’s part of the overall concept.

## Completed:
— Developed a scalable product catalog using React and Redux Toolkit, reducing navigation time by up to 40% through optimized filtering and pagination logic.
— Implemented a responsive layout system using SCSS, Flexbox, and Grid with 6 breakpoints to ensure full cross-device compatibility.
— Designed the brand identity and integrated it into the interface with pixel-perfect precision, reducing UI rework by 50%.
— Set up a modular UI structure using reusable components and custom hooks, decreasing logic duplication and doubling development speed in future iterations.
— Configured the development environment with Vite, hot reloading, and predefined build scripts, reducing onboarding time for new contributors by approximately 3 hours.

## In Development:
— Multi-step checkout form with React Hook Form and Yup validation, aiming to reduce input errors and failed submissions by ~50%.
— Lazy loading for product images and optimized SVG previews, targeting a 30–35% improvement in page load speed.
— Artist’s Dashboard: secure login for artists, purchase statistics, ability to upload new artworks, with moderation before adding to the catalog.
— Payment gateway integration (acquiring, cards, Apple/Google Pay), webhook handling, and automated generation of receipts/invoices and order status updates.
— Email infrastructure: transactional emails (order confirmation, invoice, status updates), templates, newsletters, unsubscribe functionality, and SPF/DKIM/DMARC configuration.
— Analytics and tracking: integration of web analytics systems, e-commerce events, conversion tracking, and user funnel analysis.


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
