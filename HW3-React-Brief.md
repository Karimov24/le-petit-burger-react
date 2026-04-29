# 🍔 Le Petit Burger — Homework 3: React Rebuild Brief

## Project Overview

**Le Petit Burger** is a fully functional restaurant website originally built with vanilla HTML, CSS, and JavaScript (Homeworks 1 & 2). The goal of **Homework 3** is to **completely rebuild this website using React**, styled with a CSS framework, while preserving the exact same look, feel, content, and all features from the previous homeworks.

The rebuilt site must be:
- Hosted online (e.g., Netlify, Vercel)
- Source code published on a GitHub repository
- Fully responsive (mobile-friendly)
- Visually consistent with the original design

---

## Visual Design System

All styling must match the original exactly. Below are the core design tokens from `style.css`:

| Token | Value |
|-------|-------|
| `--gold` | `#FFC244` |
| `--dark` | `#0d0d0d` |
| `--card` | `#1a1a1a` |
| `--border` | `#2a2a2a` |
| `--text` | `#ccc` |
| `--radius` | `14px` |
| `--transition` | `0.3s ease` |

- **Font:** `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **Background:** `#0d0d0d` (near black)
- **Accent/Brand Color:** Gold (`#FFC244`) — used on logo, buttons, prices, icons, hover states
- **Button style:** Pill-shaped (`border-radius: 50px`), gold background, dark text
- **Card style:** Dark background `#1a1a1a`, subtle border `#2a2a2a`, `14px` border radius, hover lifts with gold border glow

---

## Original File Structure

```
/project-root
├── index.html         ← Single-page HTML (all sections)
├── style.css          ← All CSS styling
├── script.js          ← All JavaScript (cart, tabs, slider, form)
├── hero-bg.jpg        ← Hero section background image
├── gallery1.jpg       ← Gallery slider image 1
├── gallery2.jpg       ← Gallery slider image 2
├── gallery3.jpg       ← Gallery slider image 3
├── gallery4.jpg       ← Gallery slider image 4
├── fries.jpg          ← Menu item image
├── onion-rings.jpg    ← Menu item image
├── salad.jpg          ← Menu item image
├── soda.jpg           ← Menu item image
├── fresh-lemonade.jpg ← Menu item image
├── iced-coffee.jpg    ← Menu item image
├── vanilla-soft-serve.jpg ← Menu item image
└── cheesecake-slice.jpg   ← Menu item image
```

> **Note:** In React, move all images to `public/` or `src/assets/` and import/reference them accordingly.

---

## Website Sections & Content

### 1. Header / Navigation
- **Logo:** `Le Petit Burger` — italic, gold (`#FFC244`), bold
- **Nav links:** Home · Menu · About · Gallery · Contact
- **CTA Button:** `Order Online` — gold pill button, scrolls to menu section
- **Cart Icon:** Shopping cart icon with item count badge (top-right)
- **Behavior:**
  - Fixed position, transparent on top, dark (`rgba(13,13,13,0.95)`) with blur when scrolled
  - Active link gets gold color + underline animation
  - **Hamburger menu** on mobile (≤768px) — animated 3-line → X transition, dropdown nav

---

### 2. Hero Section
- Full-viewport height (`min-height: 100vh`)
- Background: `hero-bg.jpg` (food spread photo), dark gradient overlay left-to-right
- **Headline:**
  ```
  Fast Food
  Restaurant   ← this word is in gold
  ```
- **Subtext:** `Fresh ingredients, bold flavours, and a whole lot of love — crafted just for you. Dine in, take out, or order online.`
- **CTA:** `Explore Menu` button (gold, pill, links to menu section)

---

### 3. Features / Why Us Section
Three cards side by side (stacked on mobile):

| Icon | Title | Description |
|------|-------|-------------|
| 🍴 (cutlery) | Fresh Ingredients | We source locally every morning to keep your meal as fresh as it gets. |
| 🚚 (delivery truck) | Fast Delivery | Hot food at your door in 30 minutes or your next order is free. |
| ⭐ (star) | Top Rated | 4.9 ⭐ on Google with over 2,000 happy customers and counting. |

- Background: `#111`
- Cards: dark `#1a1a1a`, border, hover lifts and border turns gold

---

### 4. Menu Section
- Section tag: `OUR MENU` (gold, uppercase, spaced)
- Heading: `Pick Your Favourite`
- **Category Filter Tabs:** All · Burgers · Sides · Drinks · Desserts
  - Active/hover: gold border + gold text + faint gold background
- **Menu Items** (displayed as cards in a responsive grid):

#### 🍔 Burgers
| Name | Description | Price | Image |
|------|-------------|-------|-------|
| Classic Smash Burger | Juicy beef patty, cheddar, pickles & special sauce | $9.99 | `gallery1.jpg` |
| BBQ Bacon Burger | Smoky BBQ, crispy bacon, caramelised onion | $12.49 | `gallery2.jpg` |
| Veggie Delight | Black bean patty, avocado, fresh lettuce & tomato | $10.49 | `gallery3.jpg` |
| Spicy Habanero | Double beef, habanero sauce, jalapeños & pepper jack | $13.99 | `gallery4.jpg` |

#### 🍟 Sides
| Name | Description | Price | Image |
|------|-------------|-------|-------|
| Crispy Fries | Golden shoestring fries with sea salt | $3.99 | `fries.jpg` |
| Onion Rings | Beer-battered onion rings, served with dip | $4.49 | `onion-rings.jpg` |
| Garden Salad | Mixed greens, cherry tomatoes, vinaigrette | $5.99 | `salad.jpg` |

#### 🥤 Drinks
| Name | Description | Price | Image |
|------|-------------|-------|-------|
| Fountain Soda | Coke, Diet Coke, Sprite, Fanta (large) | $2.49 | `soda.jpg` |
| Fresh Lemonade | Hand-squeezed lemon, honey & mint | $3.99 | `fresh-lemonade.jpg` |
| Iced Coffee | Cold-brew espresso over ice with oat milk | $4.49 | `iced-coffee.jpg` |

#### 🍦 Desserts
| Name | Description | Price | Image |
|------|-------------|-------|-------|
| Vanilla Soft Serve | Classic creamy cone or cup | $2.99 | `vanilla-soft-serve.jpg` |
| Cheesecake Slice | New York style with strawberry coulis | $5.49 | `cheesecake-slice.jpg` |

- Each card has: food image, name, description, price (gold), `Add +` button
- `Add +` button adds item to cart

---

### 5. About Section
- Section tag: `OUR STORY` (gold)
- Heading: `Passion on a Bun`
- **Left:** Image of a burger with a gold badge overlay: `Since 2010`
- **Right:** 3 paragraphs of story text:
  > Le Petit Burger was born in 2012 from a small street food stand tucked along a lively corner in New York. Inspired by the charm of French bistros, our founder, Antoine Laurent, had a simple vision: bring together the elegance of French flavors with the comfort of classic burgers.
  >
  > What began as a humble weekend stand quickly became a local favorite, growing into several cozy spots across the city. Every burger is carefully crafted with fresh ingredients, every bun is baked daily, and every sauce is prepared from Antoine's original recipes — first written in a small notebook that still sits proudly in our kitchen today.
  >
  > At Le Petit Burger, we believe great food doesn't need to be complicated — just honest ingredients, thoughtful preparation, and a touch of French passion in every bite.
- **Bullet list with checkmark icons (gold):**
  - ✔ 100% Halal certified meat
  - ✔ No artificial preservatives
  - ✔ Locally sourced produce
  - ✔ Family-friendly environment
- Layout: 2 columns (stacked on mobile)

---

### 6. Gallery Section
- Section tag: `GALLERY` (gold)
- Heading: `A Feast for the Eyes`
- **Image Slider** showing 3 images at a time (1 on mobile)
- Images: `gallery1.jpg`, `gallery2.jpg`, `gallery3.jpg`, `gallery4.jpg` + food item images
- Total slides: 12–13 images cycling
- **Prev / Next arrow buttons** (gold, circular)
- **Dot indicators** below (active dot is gold, enlarged)
- Slide transition: smooth CSS transform

---

### 7. Contact Section
- Section tag: `CONTACT US` (gold)
- Heading: `Get In Touch`
- **Left: Contact Form**
  - Full Name (text input)
  - Email Address (email input)
  - Message (textarea)
  - `Send Message ✈` button (gold, full width)
  - Success message on submit: green text
- **Right: Contact Info**
  - 📍 Address: `123 Burger Lane, Inwood, NY 10034`
  - 📞 Phone: `+1 (212) 555-0199`
  - ✉ Email: `hello@LePetitBurger.com`
  - **Google Maps iframe** embedded below info (location: Inwood, NY)
- Layout: 2 columns (stacked on mobile)

---

### 8. Footer
- **Left column:** Logo + tagline + social icons
  - Tagline: `Good food, good mood. Visit us at any of our four New York locations.`
  - Social icons: Facebook, Instagram, Twitter/X, TikTok
  - Icons are circular, dark background, hover → gold
- **Middle column:** Quick Links
  - Home · Menu · About · Gallery · Contact
- **Right column:** Business Hours
  - Mon–Thu: 10:00 AM – 10:00 PM
  - Fri–Sat: 10:00 AM – 12:00 AM
  - Sunday: 11:00 AM – 9:00 PM
- **Bottom bar:** `© 2026 Le Petit Burger Restaurant. All rights reserved. | Designed with ❤️ in New York`

---

## Shopping Cart Feature (Homework 2 — Must Carry Over)

The cart is a **slide-in drawer panel** from the right side of the screen.

### Cart State (manage with React `useState` or Context):
```js
cartItems = [
  { id, name, price, quantity }
]
```

### Cart Functionality:
| Feature | Behavior |
|---------|----------|
| **Add item** | Clicking `Add +` on any menu card adds it to cart; if item exists, increments quantity |
| **Cart icon badge** | Shows total item count; updates dynamically |
| **Open cart** | Click cart icon in navbar → drawer slides in from right |
| **Close cart** | Click X button or dark overlay backdrop |
| **View items** | Each cart item shows: name, price × quantity, subtotal |
| **Increase qty** | `+` button per item |
| **Decrease qty** | `−` button per item (removes item if qty reaches 0) |
| **Remove item** | Red "Remove" button per item |
| **Cart total** | Dynamically calculated sum of all items |
| **Clear cart** | Button to empty all items at once |
| **Checkout button** | Can be a placeholder (alert or toast) |

### Cart UI Details:
- Panel width: `360px` (full width on mobile)
- Background: `#111`, left border: `#2a2a2a`
- Cart item cards: `#181818` background
- Total price: gold, bold
- Two action buttons at bottom: `Clear Cart` (dark) + `Checkout` (gold)

---

## Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| ≤1024px | Footer becomes 2-column, About gap reduces |
| ≤768px | Hamburger menu appears, nav becomes full-width dropdown, features/about/contact stack to 1 column, gallery shows 1 slide at a time |
| ≤480px | Menu grid becomes 1 column, smaller font sizes, tab buttons shrink |

---

## Suggested React Component Structure

```
src/
├── App.jsx
├── main.jsx
├── assets/
│   └── [all images]
├── components/
│   ├── Header/
│   │   ├── Header.jsx        ← logo, nav, cart icon, hamburger
│   │   └── Header.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── Features/
│   │   ├── Features.jsx
│   │   └── Features.css
│   ├── Menu/
│   │   ├── Menu.jsx          ← tabs + grid
│   │   ├── MenuCard.jsx      ← individual food card
│   │   └── Menu.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Gallery/
│   │   ├── Gallery.jsx       ← slider logic
│   │   └── Gallery.css
│   ├── Contact/
│   │   ├── Contact.jsx       ← form + map + info
│   │   └── Contact.css
│   ├── Cart/
│   │   ├── CartDrawer.jsx    ← slide-in panel
│   │   ├── CartItem.jsx      ← individual item row
│   │   └── Cart.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── context/
│   └── CartContext.jsx       ← global cart state (useContext + useReducer)
└── data/
    └── menuData.js           ← all menu items as JS array
```

---

## Menu Data (for `menuData.js`)

```js
export const menuItems = [
  // Burgers
  { id: 1, category: "burgers", name: "Classic Smash Burger", desc: "Juicy beef patty, cheddar, pickles & special sauce", price: 9.99, image: "gallery1.jpg" },
  { id: 2, category: "burgers", name: "BBQ Bacon Burger", desc: "Smoky BBQ, crispy bacon, caramelised onion", price: 12.49, image: "gallery2.jpg" },
  { id: 3, category: "burgers", name: "Veggie Delight", desc: "Black bean patty, avocado, fresh lettuce & tomato", price: 10.49, image: "gallery3.jpg" },
  { id: 4, category: "burgers", name: "Spicy Habanero", desc: "Double beef, habanero sauce, jalapeños & pepper jack", price: 13.99, image: "gallery4.jpg" },
  // Sides
  { id: 5, category: "sides", name: "Crispy Fries", desc: "Golden shoestring fries with sea salt", price: 3.99, image: "fries.jpg" },
  { id: 6, category: "sides", name: "Onion Rings", desc: "Beer-battered onion rings, served with dip", price: 4.49, image: "onion-rings.jpg" },
  { id: 7, category: "sides", name: "Garden Salad", desc: "Mixed greens, cherry tomatoes, vinaigrette", price: 5.99, image: "salad.jpg" },
  // Drinks
  { id: 8, category: "drinks", name: "Fountain Soda", desc: "Coke, Diet Coke, Sprite, Fanta (large)", price: 2.49, image: "soda.jpg" },
  { id: 9, category: "drinks", name: "Fresh Lemonade", desc: "Hand-squeezed lemon, honey & mint", price: 3.99, image: "fresh-lemonade.jpg" },
  { id: 10, category: "drinks", name: "Iced Coffee", desc: "Cold-brew espresso over ice with oat milk", price: 4.49, image: "iced-coffee.jpg" },
  // Desserts
  { id: 11, category: "desserts", name: "Vanilla Soft Serve", desc: "Classic creamy cone or cup", price: 2.99, image: "vanilla-soft-serve.jpg" },
  { id: 12, category: "desserts", name: "Cheesecake Slice", desc: "New York style with strawberry coulis", price: 5.49, image: "cheesecake-slice.jpg" },
];
```

---

## Tech Stack for Homework 3

- **Framework:** React (Vite recommended: `npm create vite@latest`)
- **CSS Framework:** Tailwind CSS **or** plain CSS Modules (match original tokens exactly)
- **Icons:** Font Awesome (`@fortawesome/react-fontawesome`) or Lucide React
- **Routing:** React Router DOM v6 (optional — single page with `#` hash links is fine)
- **State:** React Context API + `useReducer` for cart
- **Hosting:** Netlify or Vercel (free tier)
- **Version Control:** GitHub (public repo)

---

## Key Implementation Notes for Claude

1. **Cart must use React Context** so any component can add to cart and the Header can read the count
2. **Menu tabs** should filter `menuItems` array using `useState` for active category
3. **Gallery slider** needs `useState` for current slide index + `useEffect` for optional auto-play
4. **Hamburger menu** needs `useState` for open/closed + close on nav link click
5. **Header scroll effect** — use `useEffect` with `window.addEventListener('scroll', ...)` to add `.scrolled` class
6. **Google Maps** — embed via `<iframe>` pointing to the Inwood, NY location
7. **Contact form** — use `useState` for field values + `onSubmit` handler with success state
8. **Image paths** — place all `.jpg` files from original project into `public/` folder and reference as `/hero-bg.jpg` etc., OR import them in `src/assets/`
9. **CSS variables** — define `:root` variables in a global `index.css` so all components can use them
10. **`hero-bg.jpg`** is the hero background — reference it in CSS `background-image` via a module import or public URL

---

## Deployment Checklist

- [ ] `npm run build` runs without errors
- [ ] All images load correctly in production build
- [ ] Cart works end-to-end (add, remove, clear, total)
- [ ] Mobile hamburger menu works
- [ ] Gallery slider works on mobile
- [ ] Google Map iframe visible on contact section
- [ ] Deployed to Netlify/Vercel — live URL obtained
- [ ] GitHub repo is public — URL obtained
- [ ] Both URLs submitted to professor
