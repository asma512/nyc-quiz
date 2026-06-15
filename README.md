# Interactive Task Tracker (Vite + TypeScript)

This project is an individual assessment demonstrating competence with modern JavaScript fundamentals, TypeScript's static type system, and the Vite build toolchain. It features a fully interactive task management application built with a focus on type safety, clean architecture, and developer experience.

## 🚀 Features

* **Task Management:** Create, toggle, and filter tasks seamlessly.
* **Type Safety:** Zero `any` types; full compile-time safety for state management and DOM events.
* **Modern JS Patterns:** Extensively utilizes ES modules, array methods, destructuring, and closures.
* **Fast Development:** Powered by Vite's Hot Module Replacement (HMR) and optimized build pipeline.
* **Persistent Storage:** LocalStorage integration for seamless session preservation.

## 🛠️ Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) (v16+) installed, then follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/asma512/nyc-quiz.git
cd nyc-quiz
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the local development server:**
```bash
npm run dev
```

4. **Build the project for production:**
```bash
npm run build
```

## 📁 Project Structure

```
nyc-quiz/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.ts              # Application entry point
    ├── style.css            # Global styles
    ├── types/
    │   └── index.ts         # TypeScript interfaces (Task, FilterStatus)
    ├── data/
    │   └── api.ts           # API calls and data fetching logic
    └── utils/
        └── dom.ts           # DOM manipulation and event handling
```

## 📝 Rationale: Technical Explanation

### TypeScript & Code Quality

TypeScript's static type system proved invaluable for catching errors at compile-time rather than runtime. By defining strict interfaces for `Task` objects and union types for `FilterStatus` (`'all' | 'completed' | 'pending'`), I eliminated entire categories of bugs—such as attempting to access undefined properties or passing invalid filter values. During refactoring, TypeScript's compiler immediately flagged any breaking changes across the codebase, providing confidence that rename operations and API modifications wouldn't silently fail at runtime. The `strict` mode in `tsconfig.json` additionally prevented common pitfalls like implicit `any` types and uninitialized variables, making the codebase self-documenting and significantly easier to maintain.

### Project Structure & ES Modules

I organized the project into a modular architecture that separates concerns cleanly: `types/` holds all TypeScript interfaces and union types, `data/` contains API calls and business logic, and `utils/` houses DOM utilities and event handlers. This separation enabled me to import only what each module needs, keeping dependencies explicit and circular imports impossible. ES modules made it straightforward to reason about data flow—when `dom.ts` imports a `Task` type from `types/index.ts`, the relationship is immediately clear. This structure also scales well; adding new features (like task deletion or priority levels) required minimal changes to existing modules and reduced the cognitive load of understanding the codebase.

### Vite Toolchain Workflow

Vite's development server transformed the iteration cycle from seconds to milliseconds through Hot Module Replacement (HMR). Editing a CSS style or DOM rendering function reflected instantly in the browser without a full page reload, preserving application state and dramatically accelerating debugging. The production build process, powered by Rollup, delivered optimized bundles with tree-shaking and minification—ensuring the application remained lightweight and performant. Vite's zero-config approach meant I could focus on code rather than build configuration, and the preview server made testing production builds locally trivial.

### Most Useful JavaScript Patterns

**Array methods** (`.filter()`, `.map()`, `.reduce()`) proved most impactful for clean, declarative state transformations. Filtering tasks by status became a single `.filter(t => t.status === filterValue)` rather than imperative loops, making intent obvious at a glance. **Destructuring** simplified object and parameter handling—extracting `{ id, title, completed }` from a task object at function boundaries made function signatures self-explanatory and reduced intermediate variable noise. **Closures** enabled encapsulation in utility functions; wrapping localStorage operations in a factory function kept internal state private while exposing a clean public API. **Spread operators** made immutable updates trivial: `{ ...task, completed: true }` ensured original objects remained unchanged, preventing subtle state bugs. Together, these patterns reduced boilerplate, improved readability, and made the code more resilient to future changes.

## 📦 Technologies Used

- **TypeScript 5.x** – Static typing for robust, self-documenting code
- **Vite 4.x** – Lightning-fast build tool and dev server with HMR
- **ES6+ Modules** – Clean, explicit dependency management
- **DOM API** – Vanilla JavaScript for direct, performant DOM manipulation
