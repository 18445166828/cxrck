var dns=require("dns");

dns.resolve4("www.baidu.com",function(err,addresses){
	if(err){
		console.log(err);
	}else{
		console.log(addresses);
	}
})