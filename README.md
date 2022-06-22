![checkup workflow](https://github.com/asyncink/asyncink/actions/workflows/checkup.yml/badge.svg)

### Overview

My name is Mikhail T., you can also call me `asyncink`. I work as a software engineer at Rambler. From time to time I write notes and collect favorite longreads and videos in this blog.

### Stack

#### Core

- Next: base framework
- React: base ui library

#### Minor

- date-fns: consistent toolset for manipulating dates
- marked: light-weight markdown parser

#### Tooling

- TypeScript: bulletproof static typing
- PostCSS: css transforming
- ESLint: js and ts linting
- stylelint: css linting
- Prettier: code formatting
- Conventional Commits: meaningfull commit messages
- Standard Version: versioning using semver
- GitHub Actions: CI/CD

### Commands

- `start`: start app locally
- `build`: compile production build
- `start:prod`: start production build locally
- `lint`: lint code with ESLint and stylelint
- `format`: fix code style with prettier and eslint
- `typecheck`: run static type checking with TypeScript
- `checkup`: run `lint` and `typecheck`
- `release`: generate changelog, bump version and release tag

### Structure

- `components`: shared React-components
- `lib`: static nextjs data fetching and shared utilities
- `pages`: page components
- `styles`: global styles and css variables
- `types`: typescript type definitions
