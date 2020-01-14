//人答卷  think()  answer()
function Person(){
	this.think=function(callback){
		//thinking ~~~~~~
		console.log("thinking ~~~~~~");
		setTimeout(function(){
			
			callback();
		},5000);

	};

	this.answer=function(){
		console.log("I am answering other questions");
	}
}

var person=new Person();
person.think(function(){
	console.log("thinking 5 seconds get the right answer");
});

person.answer();

/*
I am answering other questions"
thinking ~~~~~~
thinking 5 seconds get the right answer*/
