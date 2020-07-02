 // 点击game start ，box开始运动 并创建方块
 var _box = document.getElementById('_box');
 var _wrapper = document.getElementById('_wrapper');
 var timer = null;
 var score = 0;
 var speed = 5;
 var flag = true;
 click();// 点击初始化函数
 function click(){
     var _play = document.getElementById('play');
     _play.addEventListener('click',function(){
         _play.style.display = 'none';
         boxPlay();
     })
 }
 // _box移动
 function boxPlay(){
     timer = setInterval(function(){
         _box.style.top = _box.offsetTop + speed + 'px';
         if(_box.offsetTop >= 0)
         {
             // 如果_box的到达可视区域就创建一行 并且top值立即到-150px
             create();
             _box.style.top = -130 + 'px';
         }
         // 如果_box的children.length > 6 ,移除最后一个盒子。既_box做多有6个孩子 
         if(_box.children.length == 6)
         {
             for(var i = 0;i < 4;i++)
              {
                  // 如果最后一行 里面有没有被点击 游戏结束
                 if(_box.lastChild.children[i].className == "odiv i")
                  {
                     clearInterval(timer);
                     flag = false;
                     alert('游戏结束'+'得分是：'+ score);                       
                 }       
              }               
             _box.removeChild(_box.children[_box.children.length -1]);
         } 
         
         
     },30) 
     // 绑定点击事件
     bindEvent();
 }
 function bindEvent(){
     // 在大wrapper中点击
     _wrapper.addEventListener('click',function(event){
         var target = event.target;// 点击的目标
         if(target.className == 'odiv i' && flag == true)
         {
             target.style.backgroundColor = "#ccc";
             target.className = 'odiv';
             score ++;
         }
         else{
             clearInterval(timer);
             flag = false;
             alert('游戏结束! '+'得分是：'+ score);
         }
         if(score % 10 == 0)
         {
             speed += 2;
         }
     })
 }
 // 创建盒子
 function create(){
     // 创建一行
     var rdiv = document.createElement('div');
     var random = Math.floor(Math.random()*4);// 随机出0-3的整数
     rdiv.setAttribute('class','rdiv');
     // 创建4列
     for(var i = 0 ; i < 4; i++)
     {
         var odiv = document.createElement('div');
         odiv.setAttribute('class','odiv');
         rdiv.appendChild(odiv);           
     }      
     if(_box.children.length == 0)
     {
         _box.appendChild(rdiv);
     }
     else{
         _box.insertBefore(rdiv,_box.children[0]);
     }
     var clickBox = _box.children[0].children[random];// 随机产生带颜色的小方块
     clickBox.className = 'odiv i';
     clickBox.style.backgroundColor = '#000';

 }