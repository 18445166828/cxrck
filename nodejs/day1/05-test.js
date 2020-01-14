//原生模块  http  fs  buffer dns i/o(磁盘  网络)
var fs=require("fs");

/*
var data=fs.readFileSync("./demo.txt","utf-8");
console.log(data);
console.log("end");*/


fs.readFile("./demo.txt","utf-8",function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});

console.log("end");



