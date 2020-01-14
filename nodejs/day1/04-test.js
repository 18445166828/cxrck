function Demo(){
	var c=234;
	this.a=10;
	this.bb=function(){
		console.log(c);
	}
}

Demo.prototype.write=function(){
	console.log("I am writing");
}

var demo=new Demo();  //__proto__
demo.bb();
//console.log(demo.a);
//console.log(demo.c);
demo.write();

console.log(Demo.prototype==demo.__proto__);


//Object.prototype {}
//Function.prototype function(){}

//面向对象 继承(extends\构造函数) 封装（private public protect）  多态
/*
class Demo{
	private c=234;
	public a=10;
	public function __construct(){
		this.s="123";
	}

	public function bb(){

	}
class A extends Demo{
	
}


}*/

