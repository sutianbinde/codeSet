var express = require('express'), //引入express模块
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
	users = []; //用于保存所有的昵称 
app.use('/', express.static(__dirname + '/www')); //指定静态HTML文件的位置
server.listen(3003);

//socket部分
io.on('connection', function(socket) {
    //接收并处理客户端发送的login事件
    socket.on('login', function(nickname) {
        //将消息输出到控制台
        //console.log(nickname);
		if( users.indexOf(nickname) > -1){
			socket.emit("nameExisted");
		}else{
			//保存名称
			socket.userIndex = users.length;
			socket.nickname = nickname;
			users.push(nickname);
			socket.emit("loginSucess"); //向客户端发送登录成功 （只发送给当前链接）
			io.sockets.emit("system", nickname, users.length, "login"); //向所有链接的客户端发送 用户昵称
			
		}
		
		
    });
	/*socket.on("disconnect",function(){
		users.splice(socket.userIndex,1);
		socket.broadcast.emit("system", socket.nickname, users.length, "logout");//向除当前链接以外的所有客户端发送
	});*/
	
	socket.on("postMsg",function(msg){
		
		socket.broadcast.emit("newMsg", socket.nickname, msg);//向除当前链接以外的所有客户端发送
	});
});