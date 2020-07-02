var time = 0,
  score = 0,
  prev = 1;
var cylinders = document.getElementsByClassName('cylinder');
var chess = document.getElementById('chess');
var arrLeft = [10, 20, 30, 50];
var arrTop = [210, 290];
// 初始函数，入口函数
function init() {
  draw();
  BindEvent();
};
// 生成地图
function draw() {
  var str = '';
  for (var n = 0; n < 7; n++) {
    str += "<div class='cylinder'><div class='top'></div><div class='front'></div><div class='bottom'></div></div >"
  }
  document.getElementsByClassName('content')[0].innerHTML = str;
  for (var m = 0; m < 7; m++) {
    var Left = arrLeft[Math.floor(Math.random() * arrLeft.length)];
    var Top = arrTop[Math.floor(Math.random() * arrTop.length)];
    cylinders[m].style.marginLeft = Left + 'px';
    cylinders[m].style.marginTop = Top + 'px';
  }
  // 画棋子
  chess.style.marginTop = cylinders[0].offsetTop - 25 + 'px';
  chess.style.marginLeft = cylinders[0].offsetLeft + 13 + 'px';
}
// 绑定事件函数
function BindEvent() {
  document.getElementById('play').onmousedown = function () {
    var timer = setInterval(function () {
      time++;
    }, 100);
    document.getElementById('play').onmouseup = function () {
      clearInterval(timer);
      chess.classList.add('move');
      chess.style.animationDuration = time * 0.1 + 's';
      chess.style.transitionDuration = time * 0.1 + 's';
      if (cylinders[prev - 1].offsetTop > cylinders[prev].offsetTop) {
        var dx = setTran(prev - 1, prev);
        chess.style.marginLeft = chess.offsetLeft + time * 15 + 'px';
        chess.style.marginTop = chess.offsetTop + time * 15 * dx + 'px';
      } else if (cylinders[prev - 1].offsetTop < cylinders[prev].offsetTop) {
        var dy = setTran(prev - 1, prev);
        chess.style.marginLeft = chess.offsetLeft + time * 15 + 'px';
        chess.style.marginTop = chess.offsetTop + time * 15 * dy + 'px';
      } else if (cylinders[prev - 1].offsetTop == cylinders[prev].offsetTop) {
        chess.style.marginTop = chess.offsetTop + 'px';
        chess.style.marginLeft = chess.offsetLeft + time * 15 + 'px';
      }
      chess.addEventListener(getTransition(), function () {
        chess.classList.remove('move');
        time = 0;
        judeg();
        chess.removeEventListener(getTransition(), arguments.callee, false);
      }, false);
    };
  };
};
// top和left移动的比例
function setTran(prev, next) {
  var d_Top = cylinders[prev].offsetTop - cylinders[next].offsetTop;
  var d_Left = cylinders[prev].offsetLeft - cylinders[next].offsetLeft;
  return d_Top / d_Left;
}
// 判断动画是否结束
function getTransition() {
  var t;
  var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };
  for (t in transitions) {
    if (chess.style[t] !== undefined) {
      return transitions[t];
    }
  }
};
// 判断是否跳出边界
function judeg() {
  for (; prev < cylinders.length;) {
    // 判断条件
    var e_Left = chess.offsetLeft > cylinders[prev].offsetLeft - 20 && chess.offsetLeft < cylinders[prev].offsetLeft + 90;
    var e_Top = chess.offsetTop + 48 > cylinders[prev].offsetTop && chess.offsetTop + 48 < cylinders[prev].offsetTop + 35;
    if (e_Left && e_Top) {
      score++;
      if (prev >= cylinders.length) {
        prev = 1;
      } else {
        prev++;
      }
      break;
    } else {
      alert('哈哈哈哈哈你输了');
      break;
    }
  }
}
init();
