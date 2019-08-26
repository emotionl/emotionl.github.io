# axios中POST请求与qs.stringify

## 原因
因为设置的`headers`格式是 `application/x-www-form-urlencoded`
这种格式是`Form Data`提交的格式形如 `name=Jack&age=17`
所以要通过`qs.stringify`将 JSON 转化成 Form Data

```
{ name:'Jack',age:17 } ==> name=Jack&age=17
```



## 参考
> [做VUE项目 ，看到axios传参序列化，没怎么看懂，为什么要序列化，怎样序列化？](https://segmentfault.com/q/1010000010909311)

> [axios 文档](https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format)

