const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const Router = require('koa-router');
const koaBody = require('koa-body')
const cloud = require('tcb-admin-node');

const router = new Router({
  prefix:"/fellow"
});
//跨域处理
app.use(cors({
    // origin: ['http://localhost:9527'],
    origin: function(ctx) {
      return [ctx.request.header.origin];
    },
    maxAge: 5,
    credentials: true
}));
//请求参数格式化
app.use(koaBody());

//小程序初始化
cloud.init({
  secretId: 'AKIDXzH9l6SYFlocNypUP7ZaMuENTYy9k6rW',
  secretKey: 'iAOM8fsqqiOo37xWqz4uVq7Qo9Qo6e5J',
  env:"text-cb04d1"
  // env:'test-41b8dc'   
});


let user = require('./controller/user.js');
let student = require('./controller/student.js');
router.use('/user', user.routes());
router.use('/student', student.routes());

//使用router
app.use(router.routes());

// 创建监听 初始化
app.listen(3000);
console.log("server runing")
// app.listen(9527);
