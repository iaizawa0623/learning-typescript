# learning-typescript

# init
```
npm init
npm install --save-dev typescript eslint @types/node
touch tsconfig.json
npx eslint --init
```

## tsconfig.json
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

## add scripts to package.json
```
"build": "./node_modules/.bin/tsc",
"lint:eslint": "eslint",
"fix:eslint": "eslint --fix",
```

# src
```
mkdir src
cat "console.log('Hello, TypeScript!')" > src/index.ts
```

# build
```
npm run build
```

# run
```
node ./dist/index.js
```
