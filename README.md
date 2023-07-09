# job-vu

This template should help get you started developing with Vue 3 in Vite.

## Tests

to make vitest imports available globally, add
test: {
globals: true
}
in vite.config.js

then install eslint-plugin-vitest-globals

npm install --save-dev eslint-plugin-vitest-globals

then inside eslint config file add
"plugin:vitest-globals/recommended"

and

env: {
"vitest-globals/env": true
}

## Customize configuration

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
