# 正则 + match 提取字符串

## 需求

提取字符串中的指定片段

处理前

```javascript
const text = `1234@Chesh我ire我 f我（qegqg3(2604)  @Cheshire fqegqg3(2604)@(111)(111)(123)Asdasdasdasdasd@1asd(111)@1asd(111)@1asd(111)@张=阿萨德-阿1(111)(111)(123)Asdasdasdasdasd@1asd(111)@1asd(111)@张=阿萨德(0)1111@张=阿萨德-阿1(111)(111)(123)Asdasdasdasdasd@1asd(111)@1asd(111)@1asd(111)@张=阿萨德-阿1(111)(111)(123)Asdasdasdasdasd@1asd(111)@1asd(111)   @辉煌（……！&（*……*（！……（&）（E(111)`
```

处理后

```javascript
[
  '@Chesh我ire我 f我（qegqg3(2604)',
  '@Cheshire fqegqg3(2604)',
  '@(111)(111)(123)',
  '@1asd(111)',
  '@1asd(111)',
  '@1asd(111)',
  '@张=阿萨德-阿1(111)(111)(123)',
  '@1asd(111)',
  '@1asd(111)',
  '@张=阿萨德(0)',
  '@张=阿萨德-阿1(111)(111)(123)',
  '@1asd(111)',
  '@1asd(111)',
  '@1asd(111)',
  '@张=阿萨德-阿1(111)(111)(123)',
  '@1asd(111)',
  '@1asd(111)',
  '@辉煌（……！&（*……*（！……（&）（E(111)'
]
```

## 解决

```javascript
// 确定处理函数
const getFormatText = text => {
  const regex = /\@[^(]*(?=\()((\(\d*\)))+/gm
  return text.match(regex)
}

// 准备数据
const text = `1234@Chesh我ire我 f我（qegqg3(2604)  @Cheshire fqegqg3(2604)@(111)(111)(123)Asdasdasdasdasd@1asd(111)@1asd(111)@1asd(111)@张=阿萨德-阿1(111)(111)(123)Asdasdasdasdasd@1asd(111)@1asd(111)@张=阿萨德(0)1111@张=阿萨德-阿1(111)(111)(123)Asdasdasdasdasd@1asd(111)@1asd(111)@1asd(111)@张=阿萨德-阿1(111)(111)(123)Asdasdasdasdasd@1asd(111)@1asd(111)   @辉煌（……！&（*……*（！……（&）（E(111)`

// 处理
const formatText = getFormatText(text)

// 打印结果
console.log(formatText)
```

