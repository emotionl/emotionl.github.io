# Mongoose 入门

## 连接 Mongoose

```javascript
const mongoose = require('mongoose')

mongoose.connect('mongodb://user:pwd@ip:port/dbs', { useNewUrlParser: true })
mongoose.connection.once('open', function() {
    console.log('数据库连接成功！')
})
```

## 定义 Schema

```javascript
const Schema = mongoose.Schema
let StudentSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: Boolean,
        default: true
    }
})
```

## 生成 Model 并关联集合

````javascript
let Student = mongoose.model('Student', StudentSchema)
````

> `mongoose.model` 里面可以传入两个参数也可以传入三个参数
> `mongoose.model`（参数 1:模型名称（首字母大写），参数 2:Schema）
> `mongoose.model`（参数 1:模型名称（首字母大写），参数 2:Schema，参数 3:数据库集合名称）
>
> 如果传入 2 个参数的话：这个模型会和模型名称相同的**复数的集合**建立连接（你的模型名叫 Student 那么就会关联 students 这个集合）

## CRUD

### 查找数据

```javascript
Student.find({})
    .then(console.log)
    .catch(console.log)
```

### 增加数据

```javascript
let student = new Student({
    name: 'Frank',
    age: 24
})
student
    .save()
    .then(console.log)
    .catch(console.log)
```

### 修改数据

```javascript
Student.updateOne({ name: 'Frank' }, { name: 'Adam' })
    .then(console.log)
    .catch(console.log)
```

### 删除数据

```javascript
Student.deleteOne({ name: 'Adam' })
    .then(console.log)
    .catch(console.log)
```

## 模块化

1. 在`src/model`下创建`db.js`

   ```javascript
   // 连接数据库 并导出
   const mongoose = require('mongoose')
   mongoose.connect('mongodb://user:pwd@ip:port/dbs', { useNewUrlParser: true })
   module.exports = mongoose
   ```

2. 在`src/model`下创建`student.js`

   ```javascript
   // 引入已经连接好数据库 mongoose
   const mongoose = require('./db')
   // 定义 Schema
   const Schema = mongoose.Schema
   let StudentSchema = new Schema({
       name: String,
       age: Number,
       gender: {
           type: Boolean,
           default: true
       }
   })
   // 创建 Model
   let StudentModel = mongoose.model('Student', StudentSchema)
   // 导出 StudentModel 供 Controller 使用
   module.exports = StudentModel
   ```
