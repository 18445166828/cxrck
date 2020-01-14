var firecount=0;
var start= new Date();
var timer=setInterval(function(){
	if(new Date()-start>1000){
		clearInterval(timer);
		console.log(firecount);
	}
	firecount++;
},0);


/*
$.post("/login",{"name":"laoshan"},function(data){
	console.log(data);
},"json");*/