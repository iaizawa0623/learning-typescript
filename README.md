# Hello, TypeScript!

## Create a project
Create a TypeScript project and set up eslint.
```
mkdir hello-typescript
cd hello-typescript
npm init
npm install --save-dev typescript eslint @types/node
npx eslint --init
```

## TypeScript configuration

### Create tsconfig
```
touch tsconfig.json
```

### Sample of tsconfig.json
```
{
    "compilerOptions": {
        "lib": ["ES2015"],
        "module": "CommonJS",
        "outDir": "dist",
        "sourceMap": true,
        "strict": true,
        "target": "ES2015",
    },
    "include": [
        "src"
    ]
}
```
For more information. (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content)

## Create src/index.ts
```
mkdir src
echo "console.log('Hello, TypeScript!')" > src/index.ts
```

## Build
```
./node_modules/.bin/tsc
```

## Run
```
node ./dist/index.js
```
