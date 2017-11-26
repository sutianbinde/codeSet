//commonjs  一般用于服务器端
//原理：直接暴露一个对象，通过require引入的就算这个完整对象。

//js1
module.exports = {
	name: "xiaoming",
	fn01: function(){
		
	}
}

//js2 
var mod1 = require("./js1.js");
mod1.fn01()


//ADM“Asynchronous Module Definition”的缩写，即”异步模块定义”  浏览器端使用  requireJS使用的就算此规范
//和angular依赖注入的感觉很像
//原理：将js中return的对象作为一个变量传给回掉函数，在函数中就可以使用这个对象了。

//先在页面中引入require.js
//js0
define(function(){
	
	return {
		name: "xiaoming"
	}
	
})

//js1
define(["js0"],function(js0){
	var sayName = function(){
		alert(js0.name);
	}
	
	return {
		sayName: sayName
	}
	
})

//js2
require(["js1"],function(js1){
	js1.sayName();
})


//CMD  淘宝的sea.js用的，逻辑和AMD类似，只是引入的位置不同，内部的写法又和commonjs很像
//原理：
//先在页面中引入sea.js
//js0
define(function(require,exports,module){
	exports.name = "xiaoming"
})

//js1
define(function(require,exports,module){
	var name = require("js0");
	var sayName = function(){
		alert(name);
	}
	
	exports.sayName = sayName
})

//js2
define(function(require,exports,module){
	var sayName = require("js1");
	sayName();
})

//ES6  需要通过一些编译中间件编译后，才能兼容浏览器（使用webpack借助babel编辑）
//原理：export 暴露接口，import引入，相对前面几个要复杂些，但更好用。 

//test.js
export var a = 1;
export var b = 2;
export var c = 3;
var d = 4;
export default d;

//引入
import {a as m, b, c} from "./components/test"; //引入变量， 使用as重命名
import * as m from "./components/test"; //引入整个模块对象，通过m可以访问所有的值，特殊值 m.default
import m from "./components/test";  //引入使用default 暴露的值 
import {a,b} from "./components/test";
console.log(a,b,m)









