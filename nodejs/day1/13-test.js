//common.js  require 把文件变成模块  
var Demo=require("./12-test.js");

//console.log(xx);

var demo=new Demo;
console.log(demo.a);
demo.bb();
// console.log(demo.b);

// console.log(Demo);