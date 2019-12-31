# React Hooks

> [React Hooks完全上手指南](https://zhuanlan.zhihu.com/p/92211533?utm_source=com.yinxiang&utm_medium=social&utm_oi=55977860661248)
>
> [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

## EX1 - 模拟 Class 组件生命周期清除定时器

```jsx
import React, { useEffect, useState } from 'react'

function EffectTime() {
  const [sec, setSec] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSec(sec => sec + 1)
    }, 1000)
    return () => {
      console.log('清除定时器')
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h1>{sec}</h1>
    </div>
  )
}

export default EffectTime
```

> 要点：通过将 `useEffect`的第二个参数设置为 `[]`，使`useEffect`只执行一次。因为`[]`意味着不依赖任何值去触发`useEffect`
>
> 总结：`useEffect` 第二个参数是他的依赖值数组，可以根据依赖变动执行响应 `useEffect`。有三种情况：
>
> 1. 不传
>
>    表示每轮组件渲染完成后执行，也就是渲染一次执行一次。有点像 `componentDidUpdate`
>
> 2. 传空数组 `[]`
>
>    表示没有任何依赖，永远都只执行一次。有点像 `componentDidMount`
>
> 3. 传入一个依赖数组
>
>    表示依赖发生变化，渲染后执行。还是像 `componentDidUpdate` 只是设置了门槛
>

 