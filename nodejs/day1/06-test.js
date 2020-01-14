//读demo.txt然后停2S再结束
var fs=require("fs");

fs.readFile("./demo.txt","utf-8",function(err,data){
	if(err){
		return err;
	}else{
		getData(data);
	}

});

function getData(data){
	setTimeout(function(){
		console.log(data);
	},2000);
}


//函数 有return  没return过程
