//import tpl from "./layer.html";//html模板暴露出来是文档全部
import tpl from "./layer.tpl"; //ejs模板暴露出来是一个方法
import "./layer.less";

function layer(){
	return {
		name: "layer",
		tpl: tpl
	}
}


export default layer;
