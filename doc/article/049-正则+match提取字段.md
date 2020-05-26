# 正则+replace提取字符串

## 需求

提取字符串中的指定片段

处理前

```javascript
const text1 = '@张=阿萨德-阿1(111)(111)(123)Asdasdasdasdasd@1asd(111)'
const text2 = '@9-090-9-09-(111)(111)(123)Asdasdasdasdasd@1asd(111)'
const text3 = '@wadsf=dfsd-(111)(111)(123)Asdasdasdasdasd@1asd(111)'
```

处理后

```javascript
["@张=阿萨德-阿1(111)(111)(123)", "@1asd(111)"]
["@9-090-9-09-(111)(111)(123)", "@1asd(111)"]
["@wadsf=dfsd-(111)(111)(123)", "@1asd(111)"]
```

## 解决

```javascript
// 确定处理函数
const getFormatText = text => {
  const regex = /(\@[\u4e00-\u9fa5=-\d\w]+(\(\d+\))+)\w+(\@.+)/
  const matchList = text.match(regex)
  return [matchList[1], matchList[3]]
}
// 准备数据
const text1 = '@张=阿萨德-阿1(111)(111)(123)Asdasdasdasdasd@1asd(111)'
const text2 = '@9-090-9-09-(111)(111)(123)Asdasdasdasdasd@1asd(111)'
const text3 = '@wadsf=dfsd-(111)(111)(123)Asdasdasdasdasd@1asd(111)'

// 处理
const formatText1 = getFormatText(text1)
const formatText2 = getFormatText(text2)
const formatText3 = getFormatText(text3)

// 打印结果
console.log(formatText1)
console.log(formatText2)
console.log(formatText3)
```

