# 基础知识 React API 一览

## JSX 到 JavaScript 的转化

```js
React.createElement(
    type, // 类型：可能是 div h1 p 这样的html标签，也可能是组件
    [props], // 传入的属性
    [...children] // 子元素
)
```

### EX1 - 简单使用

```jsx
<h1>Hello, world!</h1>
```

```javascript
'use strict'

React.createElement('h1', null, 'Hello, world!')
```

### EX2 - JSX 嵌套

```jsx
<div className="app">
    <h1>Hello, world!</h1>
</div>
```

```js
'use strict'

React.createElement(
    'div',
    {
        className: 'app'
    },
    React.createElement('h1', null, 'Hello, world!')
)
```

### EX3 - 使用组件

```jsx
const Title = ({ text }) => <h1>{text}</h1>

const App = () => {
    return (
        <div className="app">
            <Title text="Hello, world!" />
        </div>
    )
}
```

```js
'use strict'

var Title = function Title(_ref) {
    var text = _ref.text
    return React.createElement('h1', null, text)
}

var App = function App() {
    return React.createElement(
        'div',
        {
            className: 'app'
        },
        React.createElement(Title, {
            text: 'Hello, world!'
        })
    )
}
```

> [深入 JSX](https://zh-hans.reactjs.org/docs/jsx-in-depth.html)
>
> [不使用 JSX 的 React](https://zh-hans.reactjs.org/docs/react-without-jsx.html)
>
> [Babel Try it out](https://www.babeljs.cn/repl)

## ReactElement

核心代码

```js
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };

  return element;
};

export function createElement(type, config, children) {
  /* 
    处理参数 balabala
  */
  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}
```



## react-component
## react-ref
## forward-ref
## context
## concurrent-mode
## suspense-and-lazy
## hooks
## children
## others