[TOC]

## 原型

### 一切皆对象

__typeof输出的几种类型__

值类型：undefined、number、string、boolean

引用类型：函数(function)、Symbol(function)、数组(object)、对象(object)、null(object)、new xxx(object)

值类型的类型判断用typeof，引用类型的类型判断用instanceof。

### 函数和对象的关系

__对象都是通过函数创建的__

包括：`var obj={name:'slw',age:21}`和`var arr=['slw','男',21]`这种语法糖。

他的本质是：

```js
var obj=new Object();
obj.name='slw';
obj.age=21;
```

和

```js
var arr=new Array();
arr[0]='slw';
arr[1]='男';
arr[2]=21;
```

### prototype原型

```js
function Fn(){};
Fn.prototype.name='slw';
Fn.prototype.getAge=function(){return 21;};

var fn=new Fn();
console.log(fn.name); //'slw'
console.log(fn.getAge()); //21
```

`Fn`是一个函数，`fn对象`是从`Fn函数`中new出来的，这样fn对象就可以调用`Fn.prototype`中的属性。

每个对象都有一个隐藏属性`__proto__`，这个属性引用了创建这个对象的函数的`prototype`。

即`fn.__proto__===Fn.prototype`。

> `__proto__`称为“隐式原型”，`prototype`称为原型，`Fn`称为`fn`的构造函数

### `_proto_`隐式原型

```js
//当我们创建一个对象
var a={};
//a的__proto__指向Object.prototype(构造函数的原型);
//Object.prototype也是一个对象，它的__proto__指向null;
```

函数也是对象，函数也有`__proto__`。如下代码。

```js
//第一种
function fn(x,y){
	retrun x+y;
};
console.log(fn(10,20));
//第二种
var fn=new Function('x','y','return x+y');
console.log(fn(10,20));

```

由第二种可知，函数是被Function创建的。

Function也是一个函数，函数也是一种对象，也有`__proto__`属性。既然是函数那么一定是被Function创建，所以Function是被自身创建的。所以它的`__proto__`指向了自身的`prototype`。

因为Function.prototype指向的对象也是一个普通的被Object创建的对象，所以的Function.prototype的`__proto__`也指向Object.protoype

### instanceof

