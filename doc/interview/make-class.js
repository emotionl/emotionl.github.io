// 原型链继承
;(function(arguments) {
    function A() {
        this.value = [1, 2, 3, 4, 5]
    }
    A.prototype.getValue = function() {
        return this.value
    }
    function B(name) {
        this.name = name
    }
    B.prototype = new A()
    B.prototype.getName = function() {
        return this.name
    }
    let b1 = new B('b1')
    let b2 = new B('b2')
    b1.value[0] = null
    console.log(b1.getValue()) // [null, 2, 3, 4, 5]
    console.log(b2.getValue()) // [null, 2, 3, 4, 5]
    /* 
    缺点:多个子类实例会共享父类的属性
*/
})()
// 构造函数继承
;(function(arguments) {
    function A() {
        this.value = [1, 2, 3, 4, 5]
    }
    A.prototype.getValue = function() {
        return this.value
    }
    function B(name) {
        A.call(this)
        this.name = name
    }
    B.prototype.getName = function() {
        return this.name
    }
    let b1 = new B('b1')
    let b2 = new B('b2')
    b1.value[0] = null
    console.log(b1.getValue()) // b1.getValue is not a function
    console.log(b2.getValue()) // b2.getValue is not a function
    /* 
        缺点:不能使用父类原型链的上的方法
    */
})()
// 组合继承
;(function(arguments) {
    function A() {
        this.value = [1, 2, 3, 4, 5]
    }
    A.prototype.getValue = function() {
        return this.value
    }
    function B(name) {
        A.call(this)
        this.name = name
    }
    B.prototype = new A()
    B.prototype.getName = function() {
        return this.name
    }
    let b1 = new B('b1')
    let b2 = new B('b2')
    b1.value[0] = null
    console.log(b1.getValue()) // [null, 2, 3, 4, 5]
    console.log(b2.getValue()) // [1, 2, 3, 4, 5]
    /* 
        缺点:原型中会存在两份相同的属性/方法
    */
})()
// 寄生组合继承
;(function(arguments) {
    function A() {
        this.value = [1, 2, 3, 4, 5]
    }
    A.prototype.getValue = function() {
        return this.value
    }
    function B(name) {
        A.call(this)
        this.name = name
    }
    // 以下两个操作类似
    B.prototype = Object.create(A.prototype)
    // B.prototype.__proto__ = A.prototype
    B.prototype.getName = function() {
        return this.name
    }
    let b1 = new B('b1')
    let b2 = new B('b2')
    b1.value[0] = null
    console.log(b1.getValue()) // [null, 2, 3, 4, 5]
    console.log(b2.getValue()) // [1, 2, 3, 4, 5]
    /* 
        比较完美了
    */
})()
// ES6 extends
;(function(arguments) {
    class A {
        value = [1, 2, 3, 4, 5]
        getValue() {
            return this.value
        }
    }
    class B extends A {
        constructor(name) {
            super()
            this.name = name
        }
        getName() {
            return this.name
        }
    }
    let b1 = new B('b1')
    let b2 = new B('b2')
    b1.value[0] = null
    console.log(b1.getValue()) // [null, 2, 3, 4, 5]
    console.log(b2.getValue()) // [1, 2, 3, 4, 5]
    /* 
        简单易用
    */
})()
