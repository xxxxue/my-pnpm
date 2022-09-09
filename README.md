# 😁 my-pnpm

Quickly enter commands for pnpm/nub/...

❌ `pnpm install -D @types/lodash-es @types/node`

✅ `nt lodash-es node`

## 📦 Install

```bash
npm install -g my-pnpm
```

## 🚀 Usage

### n

n = pnpm

```bash
n
// pnpm install

n i react
// pnpm i react

n -h
// pnpm -h
```

### nd

devDependencies

```bash
nd webpack
// pnpm i -D webpack

nd eslint typescript
// pnpm i -D eslint typescript
```

### nt

`@types` devDependencies

```bash
nt react
// pnpm i -D @types/react

nt lodash-es node
// pnpm i -D @types/lodash-es @types/node

```

### nx

local bin runner `node_modules/.bin`

```bash
nx tsc -v
// pnpm exec tsc -v
```

### nr

scripts runner

```bash
nr dev
// pnpm run dev / pnpm dev
// nub run dev
```

### switch bin name

default `pnpm`

```bash
n -use nub
n -use pnpm
```

### help

```bash
n -h
```

### other

use `n`
