# Interactive Task Tracker (Vite + TypeScript)

This project is an individual assessment demonstrating competence with modern JavaScript fundamentals, TypeScript’s static type system, and the Vite build toolchain. It features a fully interactive, type-safe Task Tracker application.

## 🚀 Features

* **Task Management:** Create, toggle, and filter tasks seamlessly.
* **Type Safety:** Zero `any` types; full compile-time safety for state management and DOM events.
* **Modern JS Patterns:** Extensively utilizes ES modules, array methods, destructuring, and closures.
* **Fast Development:** Powered by Vite's Hot Module Replacement (HMR) and optimized build pipeline.

## 🛠️ Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

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

```text
├── src/
│   ├── types/
│   │   └── task.ts          # TypeScript interfaces and union types
│   ├── utils/
│   │   └── storage.ts       # LocalStorage helper functions (Closures/Generics)
│   ├── dom/
│   │   └── render.ts        # DOM manipulation and event handling logic
│   ├── main.ts              # Application entry point
│   └── style.css            # Application styling
├── index.html
├── package.json
├── tsconfig.json            # Strict-mode TypeScript configuration
└── README.md

```

## 📝 Rationale: Technical Explanation

### TypeScript & Code Quality

TypeScript’s static type system drastically improved code reliability during development. By strictly defining a `Task` interface and a `FilterStatus` union type (`'all' | 'completed' | 'pending'`), the compiler instantly caught mismatched object properties and invalid filter states before the code ever ran in the browser. Enabling `strict: true` in `tsconfig.json` forced intentional handling of potentially null DOM elements returned by `document.querySelector`, converting unpredictable runtime crashes into easy-to-fix compile-time checks.

### Project Structure & ES Modules

The project utilizes a modular architecture within the `src/` directory to separate concerns cleanly. Type definitions live in `types/`, state utilities in `utils/`, and UI presentation logic in `dom/`. By using explicit ES module `import` and `export` statements, the global scope remains completely clean. This encapsulation makes individual modules self-contained, highly testable, and straightforward to navigate.

### Vite Toolchain Workflow

Vite’s development server completely transformed the developer experience through its lightning-fast Hot Module Replacement (HMR). Changes made to UI rendering logic or stylesheets reflected instantly in the browser without losing the application's current state. For production, Vite’s Rollup-powered build pipeline automatically bundled, minified, and optimized the TypeScript code into highly efficient static assets, validating that the codebase compiled flawlessly without type errors.

### Most Useful JavaScript Patterns

Among modern JavaScript features, array methods (`.filter()`, `.map()`) and destructuring were the most impactful. Array methods allowed for clean, declarative state transitions when updating or filtering tasks without mutating the original state array. Object and array destructuring significantly reduced boilerplate code, making it simple to extract properties from task objects directly inside rendering loops. Additionally, template literals made dynamic DOM generation clean and highly readable.