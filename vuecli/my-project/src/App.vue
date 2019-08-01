<template>
  <div id="app">
    <div id="nav">
      <button @click="backHome">返回首页</button>
      <button @click="forword">向前</button>
      <button @click="back">向后</button>
      <button @click="btnTest2">Test2</button>
      <br>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/connect">Connect</router-link>|
      <router-link to="/mine">Mine</router-link>|
      <router-link to="/aboutme">AboutMe</router-link> |
      <router-link to="/test3">Test3</router-link>
    </div>
    <div class="fadeHeader">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    backHome(){
      this.$router.push("/")
    },
    forword(){
      this.$router.go(-1)
    },
    back(){
      this.$router.go(1)
    },
    btnTest2(){
      this.$router.push("/connect/test2/小b/13")
    }
  },
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fadeHeader {
  position: relative;
}
.fade-enter {
  transform: translateX(-100%);
}
.fade-enter-active {
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 1s ease;
}
.fade-enter-to {
  transform: translateX(0);
}
.fade-leave {
  transform: translateX(0);
}
.fade-leave-active {
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 1s ease;
}
.fade-leave-to {
  transform: translateX(100%);
}
</style>

