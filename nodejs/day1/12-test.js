//exports 和 module.exports的区别
//exports是module.exports的引用  require---module.exports

//直接赋值 和  引用赋值的区别吗
/*
var a=123;  //0x1a3b4c ---123
var a=567;  //0x4a5d3a 


var obj={
	'a':123,
}

obj.a=567;*/

/*
exports.bb=function(){
	console.log("789");
}*/

/*
exports={
	'bb':function(){
		console.log(890);
	}
}*/


function Demo(){
	var b=789;
	this.a=123;
	this.bb=function(){
		console.log(b);
	}
}

//module.exports=['laoshan','laoxie'];

/*
module.exports={
	'a':123,
	'bb':function(){
		console.log(567);
	}
}*/

module.exports=Demo;

//public private

/*
Demo.prototype.write=function(){
	console.log("writing");
}*/

/*
var demo=new Demo();
console.log(demo);*/
//demo.bb();