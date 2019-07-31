<template>
  <div>
    <h1>this is test2</h1>
    <h1>年龄:{{$route.params.username}}</h1>
    <h1>姓名:{{$route.params.userage}}</h1>
    <div>
      <button @click="isshow=!isshow">click</button>
    </div>
    <transition name="fade">
      <div v-show="isshow">hello world</div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: false
    };
  }
};
</script>
<style scope>
.fade-enter {
  /* 设置动画进入的初始状态 */
  opacity: 0;
}
.fade-enter-active {
  /* 定义进入过渡生效时的状态 */
  transition: all 1s ease;
}
.fade-enter-to {
  /* 定义进入过渡的结束状态 */
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>

