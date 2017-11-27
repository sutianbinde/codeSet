
//es6总结

//① let const  作用类似 var  
//但let以大括号为作用域,常用于循环中的变量控制, const声明的值不能改变,常用于声明引入的第三方插件/库
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

//const monent = require('moment')


//② class, extends, super  类的声明和 继承
class Animal {
	constructor(){
		this.type = "animal"
	}
	
	says(say){
		console.log(this.type + " says " + say)
	}
}

let animal = new Animal()
animal.says("hello")

class Cat extends Animal {
	constructor(){
		super()
		this.type = "cat"
	}
}

let cat = new Cat()
cat.says("yes")


//③ 箭头函数  不需要再写 function
//一般在回掉函数中使用(如ajax请求、定时器调用等等)，代码简单，且不会将this指向全局
class Dog extends Animal {
	constructor(){
		super()
		this.type = "dog"
	}
	wangwang(){
		setTimeout( () => {
			console.log(this.type + " says wangwang ")
		},1000)
		
	}
}
let dog = new Dog()
dog.wangwang()

//如果只有一行返回值的执行，可以不写 {}
//如   (x)=>x*x   等同于  function(x){return x*x}

//④ 模板字符串  template string   
//再也不用拼接字符串啦 ,变量和换行都不需要添加引号，只需要使用 ${变量名}即可添加变量
var str01 = "this is" + dog.type +"; it's lovely"
var str02 = `
	this is
	${dog.type}
	; it's lovely
`

console.log(str01,str02)

//⑤ 结构赋值  destructing
// 不在需要写对象的 属性：值 的形式了
let cat2 = "cat2"
let dog2 = "dog2"
let zoo = {cat2,dog2}
console.log(zoo);

//反之
let zoo3 = {cat3:"cat3",dog3:"dog3"}
let {cat3,dog3} = zoo3  //对象解构
let [cat4,dog4] = ["cat4","dog4"]  //数组解构
console.log("结构的:",cat3,dog3,cat4,dog4);

//交换变量值
[cat2,dog2] = [dog2,cat2];
console.log("交换的:",cat2,dog2);


//⑥ rest参数与添加默认值   可以通过形参=值 的方式为参数添加默认值，...name  可以把剩下的参数放到name数组中，替代了arguments的使用。
function testFn(user="tony",...animals){
	console.log(user,animals);
}
testFn('xiaoming','cat', 'dog', 'fish');

//⑦ import export ES6模块化实现
//参见模块对比解析那篇

//⑧ 其他

//数组去重
let allArr = [1,5,2,3,1,2,3,4,5];
let newArr = Array.from( new Set(allArr) ) ;
console.log(newArr)

//最大值（这个不是ES6的）
console.log ( Math.max.apply(Math,allArr) );
//最小值
console.log ( Math.min.apply(Math,allArr) );

//合并数组
var allArr2 = [5,8,2,0,-1];
var newAllArr = [...allArr,...allArr2];
console.log ( newAllArr );







