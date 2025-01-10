# Vue Task Manager

A simple task management application built with Vue 3 and Supabase. This project demonstrates basic CRUD operations and real-time updates using modern web technologies.

## Features

- Create new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Real-time updates using Supabase
- Clean and responsive UI with Tailwind CSS

## Tech Stack

- Vue 3 (Composition API)
- TypeScript
- Pinia for state management
- Supabase for backend
- Tailwind CSS for styling
- Vite for build tooling

## Project Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and add your Supabase credentials:
```sh
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Install dependencies:
```sh
npm install
```

4. Run development server:
```sh
npm run dev
```

## Development

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Compile and Minify for Production
```sh
npm run build
```

### Lint with ESLint
```sh
npm run lint
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Structure

- `/src/components` - Vue components
- `/src/stores` - Pinia store for task management
- `/src/lib` - Supabase client configuration
- `/src/types` - TypeScript interfaces
