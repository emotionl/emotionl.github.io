# 我的Prettier设置

在项目根目录中添加`.prettierrc`

```js
{
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": true,
    "printWidth": 100,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "none",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
}
```

如果想批量格式化文件，可以在`package.json`的`scripts`中添加

```json
"scripts": {
	"format": "prettier .prettierrc --write \"src/**/*.{js,jsx}\""
}
```

