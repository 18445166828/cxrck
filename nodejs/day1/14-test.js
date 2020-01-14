var http=require("http");
var urls=["www.qq.com","www.baidu.com","www.sohu.com"];

//1、记录时间  var time=new Date()
//2、发送数据包http  get---发送http请求的方法并使用的是get  http.get(url,callback) 

function fetchPage(url){
	var start=new Date();
	http.get({"host":url},function(){
		console.log("Got respone from :"+url);
		console.log("Request took:",new Date()-start,'ms');
	});
}

for(var i=0;i<urls.length;i++){
	fetchPage(urls[i]);
}