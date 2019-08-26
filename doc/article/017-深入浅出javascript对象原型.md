# 深入浅出javascript对象原型

1. 任何对象都拥有 __proto__(隐式原型) 属性，

   一般指向他们的构造函数的原型 (prototype) 

   ```javascript
   function People(name) {
       this.name = name;
   }
   People.prototype.outputName = function () {
       console.log("My name is " + this.name);
   }
   var Jack = new People("Jack");
   Jack.outputName();
   console.log(Jack.__proto__ === People.prototype); // My name is Jack
   console.log(Array.prototype.__proto__ === Object.prototype); // true
   ```

2. 原型链的顶端是Object.prototype，其 __proto__为 null，

   也就是说Object.prototype在想沿着原型链进行查找是不中的，

   因为Object.prototype已经是原型链的尽头了

   ```javascript
   console.log(Object.prototype.proto === null); // true
   ```

3. 所有函数都拥有prototype（显式原型）属性

   ```javascript
   function Music(musicType) {
       this.musicType = musicType;
   }
   console.log(Music.prototype);
   console.log(Array.prototype);
   ```

4. 所有函数都是Function的实例

   ```javascript
   function foo() {}
   console.log(foo instanceof Function); // true
   console.log(foo.proto === Function.prototype); // true
   ```

   类似的 就十分容易就能理解

   ```javascript
   var obj = {};
   var arr = [];
   console.log(obj.proto === Object.prototype); // true
   console.log(arr.proto === Array.prototype); // true
   ```

5. Object Function Array

   本身也都是一个函数，由于是最常用的，所以JavaScript帮我们实现了

   内置对象的__proto__ === Function的peototype

   ```javascript
   console.log(Function.__proto__ === Function.prototype);	// true
   console.log(Array.__proto__ === Function.prototype);	// true
   console.log(Object.__proto__ === Function.prototype);	// true
   console.log(Date.__proto__ === Function.prototype);		// true
   console.log(String.__proto__ === Function.prototype);	// true
   console.log(Boolean.__proto__ === Function.prototype);	// true
   console.log(Number.__proto__ === Function.prototype);	// true
   console.log(RegExp.__proto__ === Function.prototype);	// true
   console.log(Error.__proto__ === Function.prototype);	// true
   ```

6. 原型对象中拥有constructor属性, 该属性指向函数本身

   ```javascript
   console.log(Object.prototype.constructor === Object);	// true
   console.log(Array.prototype.constructor === Array);		// true
   console.log(Number.prototype.constructor === Number);	// true
   ```

7. 原型链 概念

   如果想要找到一个对象的属性,首先会先在自身查找,如果没有,就会通过__proto__属性一层层的向上查找,

   直到原型链的顶端 Object.prototype(__proto__: null)

   这种通过某种纽带(__proto__)将对象之间形成一种继承关系 

   这种关系呈现出一种链条的形状 将这种链条称之为原型链

8. 由于构造函数Fun本身没有constructor属性

   所以构造函数Fun通过__proto__属性，沿着原型链向上找到了Fun.__proto__

   而Fucntion又是一切函数的构造函数所以Funciton.prototype ===Fun.__proto__ 

   于是可以得出Fun.__proto__.constructor === Function

   ```javascript
   function Fun() {}
   console.log(Fun.constructor === Function);
   console.log(Array.constructor === Function);
   console.log(String.constructor === Function);
   ```

9. 由于Function也会是自己本身的构造函数

   所以Function.prototype === Function.__proto__

   ```javascript
   console.log(Function.proto.proto === Object.prototype);
   console.log(Function.prototype.proto === Object.prototype);
   ```

   ​