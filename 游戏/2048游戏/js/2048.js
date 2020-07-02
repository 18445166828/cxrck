var game = {
  data: [],
  score: 0,
  gamerunning: 1,
  gameover: 0,
  status: 1,
  //	游戏开始
  start: function () {
    game.data = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    game.score = 0;
    game.status = game.gamerunning;
    game.randomNum();
    game.randomNum();
    game.dataView();
  },
  //	生成随机数
  randomNum: function () {
    for (;;) {
      var r = Math.floor(Math.random() * 4);
      var c = Math.floor(Math.random() * 4);
      if (game.data[r][c] == 0) {
        var num = Math.random() > 0.5 ? 2 : 4;
        game.data[r][c] = num;
        break;
      }
    }
  },
  //	将数组里的数据显示到页面中
  dataView: function () {
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        var div = document.getElementById("c" + r + c);
        if (game.data[r][c] != 0) {
          div.innerHTML = game.data[r][c];
          div.className = "cell n" + game.data[r][c];
        } else {
          div.innerHTML = "";
          div.className = "cell";
        }
      }
    }
    document.getElementById("score01").innerHTML = game.score;
    if (game.status == game.gameover) {
      document.getElementById("score02").innerHTML = game.score;
      document.getElementById("gameover").style.display = "block";
    } else {
      document.getElementById("gameover").style.display = "none";
    }
  },
  //	游戏结束
  isgameover: function () {
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        if (game.data[r][c] == 0) {
          return false;
        }
        if (c < 3) {
          if (game.data[r][c] == game.data[r][c + 1]) {
            return false;
          }
        }
        if (r < 3) {
          if (game.data[r][c] == game.data[r + 1][c]) {
            return false;
          }
        }
      }
    }
    return true;
  },
  //	左移
  moveLeft: function () {
    var before = game.data.toString();
    for (var r = 0; r < 4; r++) {
      game.moveLeftInRow(r);
    }
    var after = game.data.toString();
    if (before != after) {
      game.randomNum();
      if (game.isgameover()) {
        game.status = game.gameover;
      }
      game.dataView();
    }
  },
  moveLeftInRow: function (r) {
    for (var c = 0; c < 3; c++) {
      var nextc = game.moveNextInRow(r, c);
      if (nextc != -1) {
        if (game.data[r][c] == 0) {
          game.data[r][c] = game.data[r][nextc];
          game.data[r][nextc] = 0;
          c--;
        } else if (game.data[r][c] == game.data[r][nextc]) {
          game.data[r][c] *= 2;
          game.data[r][nextc] = 0;
          game.score += game.data[r][c];
        }
      } else {
        break;
      }
    }
  },
  moveNextInRow: function (r, c) {
    for (var i = c + 1; i < 4; i++) {
      if (game.data[r][i] != 0) {
        return i;
      }
    }
    return -1;
  },
  //	上移
  moveUp: function () {
    var before = game.data.toString();
    for (var c = 0; c < 4; c++) {
      game.moveUpInCol(c);
    }
    var after = game.data.toString();
    if (before != after) {
      game.randomNum();
      if (game.isgameover()) {
        game.status = game.gameover;
      }
      game.dataView();
    }
  },
  moveUpInCol: function (c) {
    for (var r = 0; r < 3; r++) {
      var nextr = game.moveNextInCol(r, c);
      if (nextr != -1) {
        if (game.data[r][c] == 0) {
          game.data[r][c] = game.data[nextr][c];
          game.data[nextr][c] = 0;
          r--;
        } else if (game.data[r][c] == game.data[nextr][c]) {
          game.data[r][c] *= 2;
          game.data[nextr][c] = 0;
          game.score += game.data[r][c];
        }
      } else {
        break;
      }
    }
  },
  moveNextInCol: function (r, c) {
    for (var i = r + 1; i < 4; i++) {
      if (game.data[i][c] != 0) {
        return i;
      }
    }
    return -1;
  },
  //	右移
  moveRight: function () {
    var before = game.data.toString();
    for (var r = 0; r < 4; r++) {
      game.moveRightInRow(r);
    }
    var after = game.data.toString();
    if (before != after) {
      game.randomNum();
      if (game.isgameover()) {
        game.status = game.gameover;
      }
      game.dataView();
    }
  },
  moveRightInRow: function (r) {
    for (var c = 3; c > 0; c--) {
      var prec = game.movePreInRow(r, c);
      if (prec != -1) {
        if (game.data[r][c] == 0) {
          game.data[r][c] = game.data[r][prec];
          game.data[r][prec] = 0;
          c++;
        } else if (game.data[r][c] == game.data[r][prec]) {
          game.data[r][c] *= 2;
          game.data[r][prec] = 0;
          game.score += game.data[r][c];
        }
      } else {
        break;
      }
    }
  },
  movePreInRow: function (r, c) {
    for (var i = c - 1; i >= 0; i--) {
      if (game.data[r][i] != 0) {
        return i;
      }
    }
    return -1;
  },
  //	下移
  moveDown: function () {
    var before = game.data.toString();
    for (var c = 0; c < 4; c++) {
      game.moveDownInCol(c);
    }
    var after = game.data.toString();
    if (before != after) {
      game.randomNum();
      if (game.isgameover()) {
        game.status = game.gameover;
      }
      game.dataView();
    }
  },
  moveDownInCol: function (c) {
    for (var r = 3; r > 0; r--) {
      var prer = game.movePreInCol(r, c);
      if (prer != -1) {
        if (game.data[r][c] == 0) {
          game.data[r][c] = game.data[prer][c];
          game.data[prer][c] = 0;
          r++;
        } else if (game.data[r][c] == game.data[prer][c]) {
          game.data[r][c] *= 2;
          game.data[prer][c] = 0;
          game.score += game.data[r][c];
        }
      } else {
        break;
      }
    }
  },
  movePreInCol: function (r, c) {
    for (var i = r - 1; i >= 0; i--) {
      if (game.data[i][c] != 0) {
        return i;
      }
    }
    return -1;
  },
}


game.start();
document.onkeydown = function (event) {
  var event = event || window.event;
  if (event.keyCode == 37) {
    game.moveLeft();
  } else if (event.keyCode == 38) {
    game.moveUp();
  } else if (event.keyCode == 39) {
    game.moveRight();
  } else if (event.keyCode == 40) {
    game.moveDown();
  }
}
