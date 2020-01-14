var http=require("http");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	res.end("<h1>hello world</h1>");
}).listen(3000);


console.log("server start port 3000");

//status code  200 301/302 307 404 500 501 502 503  
//http四大关键字  get post put delete

//1、如何识别html  MIME头 409种
//2、node如何解决热更新问题  supervisor  nodemon(开发环境)  pm2（生产环境）
//npm install -g supervisor
//数据包（包头 包体）