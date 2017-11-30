if(module.hot){
    module.hot.accept();
}

import layer from "./components/layer/layer.js";
import "./css/common.css";

/*
 * 这里开始到  const App 前面都是测试ES6的代码
 * */
//import {a as m, b, c} from "./components/test"; //引入变量， 使用as重命名
//import * as m from "./components/test"; //引入整个模块对象，通过m可以访问所有的值，特殊值 m.default
//import m from "./components/test";  //引入使用default 暴露的值 
//import m, {a,b} from "./components/test";
//console.log(a,b,m)

import "./components/ES6test/ES6Class.js"


const App = function(){
	var dom = document.getElementById("app");
	var lay = layer();
	
	//dom.innerHTML = lay.tpl;  //引入html模板的时候用的
	
	dom.innerHTML = lay.tpl({
		name: "john",
		arr: ["xiaomi", "apple", "oppo"]
	})
}

new App();
