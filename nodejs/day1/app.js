/*var name="laoshan";
console.log(name); */

//1、先执行同步  再执行异步
//2、触发异步的条件  （1）当前线程空闲  （2）满足触犯条件（时间、I/O）
// I input  O  output  
//3、判断异步  先把异步处理方法 发送到消息队列去排队

for(var i=1;i<=3;i++){
	setTimeout(function(){
		console.log(i);
	},0);
}   

console.log("end");

//网页当前访问量
/*
（1）全局变量存在内存  var num = 0  node单进程

web  A---1 process
     B---2 process

（2）文件存储  num.dr  process dr文件写1  file lock
（3）数据库*/