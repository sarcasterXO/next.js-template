# Next.js Template

A modern Next.js + TypeScript starter template powered by Bun, built for speed, scalability, and developer happiness.
Includes shadcn/ui, ESLint, and Prettier out of the box, so you can focus on shipping features instead of setting up configs.
Perfect for rapid prototyping or kicking off your next production-grade project. 🚀

---

## 🚀 Quick Start

### 1. Prerequisites

- [Bun](https://bun.sh/) (package manager & runtime)
- [Node.js](https://nodejs.org/) (recommended for compatibility)
- [Git](https://git-scm.com/)

### 2. Installation

```pwsh
# Install dependencies
bun install
```

### 3. Environment Variables

If your frontend needs environment variables (e.g., API endpoints, keys), create a `.env` file in the project root. Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Add other required variables as needed
```

Check the codebase for required variables (look for `process.env` or `NEXT_PUBLIC_` usage).

### 4. Running the Frontend

```pwsh
# Start development server
bun run dev
```

The website will be available at `http://localhost:3000` (or your configured port).

---

## 🗂️ Project Structure

- `app/` - Main Next.js application files (pages, layouts, etc.)
- `lib/` - Utility functions
- `public/` - Static assets (images, SVGs, etc.)
- `components.json` - List of components (for documentation/reference)
- `bun.lock`, `package.json`, `tsconfig.json`, etc. - Configuration and metadata

---

## 🛠️ Development Workflow

1. **Clone the repo:**

```pwsh
git clone <repo-url>
cd Next.js Template
```

2. **Install dependencies:**

```pwsh
bun install
```

3. **Set up `.env` file** (see above)
4. **Run the dev server:**

```pwsh
bun run dev
```

5. **Make changes in `app/`, `lib/`, or other relevant files.**

---

## 📝 Contributing

1. **Fork & clone** the repo
2. **Create a new branch** for your feature/bugfix
3. **Follow code style:**

- Run linter: `bun run lint`
- Use Prettier for formatting

4. **Write tests** for new features
5. **Open a Pull Request** with a clear description
6. **Participate in code review**

---

## 🐞 Troubleshooting

- **Dependency issues:** Delete `bun.lock` and `node_modules`, then run `bun install` again
- **Environment variable issues:** Check your `.env` and variable usage
- **Port conflicts:** Change `PORT` in `.env` or use a different port
- **Type errors:** Ensure all dependencies are installed and types are up to date

---

## 📚 Resources

- [Bun Docs](https://bun.sh/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Next.js Docs](https://nextjs.org/docs)

---

## 📄 License

This project is licensed under the terms of the license found in the `LICENSE` file.

---

## 🤝 Contact & Support

For questions, open an issue or reach out via GitHub.
