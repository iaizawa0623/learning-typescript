# learning-typescript

# Setup

## init
```
npm init
npm install --save-dev typescript eslint @types/node
touch tsconfig.json
```

### tsconfig.json
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

### add scripts to package.json
```
"build": "./node_modules/.bin/tsc",
"run": "node ./dist/index.js",
```

## lint
```
npx eslint --init
```

### add scripts to package.json
```
"lint:eslint": "eslint",
"fix:eslint": "eslint --fix",
```

## src
```
mkdir src
touch src/index.ts
```
