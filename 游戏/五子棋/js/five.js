window.onload = function () {
    /*定义赢法数组*/
    var wins = [];
    for(var i = 0;i<15;i++){
        wins[i] = [];
        for (var j=0;j<15;j++){
            wins[i][j]=[];
        }
    }

    var count = 0;
    //横向赢法
    for(var i = 0;i<15;i++){
        for(var j=0;j<11;j++){
            for(var k=0;k<5;k++){
                wins[i][j+k][count]=true;
            }
            count++;
        }
    }
    //竖向赢法
    for(var i = 0;i<15;i++){
        for(var j=0;j<11;j++){
            for(var k=0;k<5;k++){
                wins[j+k][i][count]=true;
            }
            count++;
        }
    }
    //斜线赢法
    for(var i = 0;i<11;i++){
        for(var j=0;j<11;j++){
            for(var k=0;k<5;k++){
                wins[i+k][j+k][count]=true;
            }
            count++;
        }
    }
    //反斜线赢法
    for(var i = 0;i<11;i++){
        for(var j=14;j>3;j--){
            for(var k=0;k<5;k++){
                wins[i+k][j-k][count]=true;
            }
            count++;
        }
    }
    console.log(count);
    //定义赢法的统计数组
    var myWin = [];
    var computerWin = [];
    for(var i=0;i<count;i++){
        myWin[i]=0;
        computerWin[i]=0;
    }
    var over = false;



    var chess = document.getElementById("chess");
    var context = chess.getContext("2d");
    var me = true;//定义该谁走
    var chessBoard = [];//存储是否有棋子
    /*初始化chessBoard*/
    for(var i=0;i<15;i++){
        chessBoard[i]=[];
        for(var j=0;j<15;j++){
            chessBoard[i][j]=0;//没有棋子
        }
    }


    /*画棋盘方法*/

    for(var i = 0;i < 15;i++){
        /*画竖线*/
        context.moveTo(15+i*30,15);
        context.lineTo(15+i*30,435);
        context.stroke();

        /*画横线*/
        context.moveTo(15,15+i*30);
        context.lineTo(435,15+i*30);
        context.stroke();

        context.strokeStyle = "#dda0dd";//定义颜色
    }
    
    chess.onclick = function (event) {
        if(over){
            return;
        }
        if(!me){
            return;
        }
        var x = event.offsetX;
        var y = event.clientY;
        var i = Math.floor(x/30);
        var j = Math.floor((y-50)/30);
        if (chessBoard[i][j]==0){//判断落子地方是否有棋
            oneStep(i,j,me);
            chessBoard[i][j]=1;
            //赢法统计
            for(var k=0;k<count;k++){
                if(wins[i][j][k]){
                    myWin[k]++;
                    computerWin[k]=6;
                    if(myWin[k]==5){
                        alert("你赢了");
                        over = true;
                    }
                }
            }

            //电脑走
            if(!over){
                me = !me;
                computerAI();
            }
        }
        // alert(x+","+y);
        // alert(i+","+j);

    }

    //电脑走
    var computerAI = function () {
        var myScore = [];
        var computerScore = [];
        var max = 0;
        var u = 0;
        var v = 0;
        for (var i = 0;i<15;i++){
            myScore[i]=[];
            computerScore[i]=[];
            for(var j=0;j<15;j++ ){
                myScore[i][j]=0;
                computerScore[i][j]=0;
            }
        }

        for(var i=0;i<15;i++){
            for(var j=0;j<15;j++){
                if(chessBoard[i][j]==0){
                    for(var k=0;k<count;k++){
                        if(wins[i][j][k]){
                            //对方获胜
                            if(myWin[k]==1){
                                myScore[i][j]+=200;
                            }else if(myWin[k]==2){
                                myScore[i][j]+=400;
                            }else if(myWin[k]==3){
                                myScore[i][j]+=2000;
                            }else if(myWin[k]==4){
                                myScore[i][j]+=10000;
                            }

                            if(computerWin[k]==1){
                                computerScore[i][j]+=220;
                            }else if(computerWin[k]==2){
                                computerScore[i][j]+=420;
                            }else if(computerWin[k]==3){
                                computerScore[i][j]+=2100;
                            }else if(computerWin[k]==4){
                                computerScore[i][j]+=20000;
                            }
                        }
                    }
                    if(myScore[i][j]>max){
                        max = myScore[i][j];
                        u=i;
                        v=j;
                    }else if(myScore[i][j]==max){
                        if(computerScore[i][j]>computerScore[u][v]){
                            u=i;
                            v=j;
                        }
                    }
                    if(computerScore[i][j]>max){
                        max = computerScore[i][j];
                        u=i;
                        v=j;
                    }else if(computerScore[i][j]==max){
                        if(myScore[i][j]>myScore[u][v]){
                            u=i;
                            v=j;
                        }
                    }
                }
            }
        }
        oneStep(u,v,false);
        chessBoard[u][v] = 2;

        //赢法统计
        for(var k=0;k<count;k++){
            if (wins[u][v][k]){
                computerWin[k]++;
                myWin[k]=6;
                if(computerWin[k]==5){
                    alert("你输了，电脑获胜");
                    over = true;
                }
            }
        }

        //人走
        if(!over){
            me = !me;
        }

    }

    /*画棋子*/
    var oneStep = function (i,j,me) {
        context.beginPath();
        context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
        var grd = context.createRadialGradient(15+i*30,15+j*30,13,15+i*30,15+j*30,0);
        if(me){
            grd.addColorStop(0,"#0A0A0A");
            grd.addColorStop(1,"#636766");
        }else{
            grd.addColorStop(0,"#D1D1D1");
            grd.addColorStop(1,"#F9F9F9");
        }
        context.fillStyle = grd;
        context.fill();
        context.closePath();
    }
}