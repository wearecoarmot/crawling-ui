# Front-End CONTRIBUTING Rules

## .eslintrc.js

```js
module.exports = {
  "extends": [
    "react-app",
    "prettier"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", {
      "objects": "always"
    }],
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0
  }
};
```

## .prettierrc

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always"
}
```

## .babelrc

```json
{
  "presets": [
    "react-app"
  ],
  "plugins": [
    "babel-plugin-styled-components",
    [
      "babel-plugin-root-import",
      {
        "rootPathSuffix": "./src",
        "rootPathPrefix": "~/"
      }
    ]
  ]
}
```

## css convention
> Mozilla 방식 채택

```markdown
1. display `--객체의 노출여부/표현방식--`
2. list-style
3. position `--위치/좌표--`
4. float
5. clear
6. width / height `--크기/여백--`
7. padding / margin
8. border / background `--윤곽/배경--`
9. color / font `--글자/정렬--`
10. text-decoration
11. text-align / vertical-align
12. white-space
13. other text
14. content `--내용--`

`위치 선정` > `윤곽` > `외곽 디테일링` > `채색` > `타이포그래피` 와 같이 밖에서부터 안쪽으로의 흐름이다.
```

## Component Rules

1. Multiline 
```javascript
// 1 ~ 2 lines
const Foo = () => {
  return (
    <div foo={()=>{}}>

    </div>
  )
}

// 3 ~ lines
const Foo = () => {
  return (
    <div
      foo={()=>{}}
      bar={()=>{}}
      baz={()=>{}}
    >

    </div>
  )
}
```

2. ternary operator
```javascript
// 1. 
const func1 = function() {
  return condition ? value1 : value2
}

const func2 = function() {
  return condition1 ? (
    let foo = 'foo';
    return foo;
  ):(
    let bar = 'bar';
    return bar;
  )
}

const func3 = function() {
  return condition1 ? value1
       : condition2 ? value2
       : condition3
}
```

3. Array, Object Method
[lodash](https://lodash.com/docs/4.17.15)

4. variable name

```js
// 1. variable camelCase, snake_case
// 2. Component PascalCase
// 3. Function camelCase
```

5. const, let, var
> const 위주로 만들기
> var는 지양

## typescript rules
[참조사이트](https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680)

6. Folder 구조

```js
// components 콤포넌트 분리
// => components 여러개로 하나의 container 를 이룬다.

// containers 콤포넌트 상위 콤포넌트
// => containers 여러개로 하나의 page component 를 이룬다.

// pages router 내에서 보여지는 콤포넌트
```

----

# git commit lint

```shell script
type(scope?): subject

body?
footer?
```

## type-enum
```text
[
  'build',
  'ci',
  'chore',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
]
```
