<template>
    <div>
        <h1>this is connot page</h1>
        <router-link :to="{name:'test1',params:{name:'小明',age:'12'}}">Test1</router-link> |
        <router-link to="/connect/test2/小b/13">Test2</router-link> |
        <router-link to="/connect/gotoTest2/小c/14">gotoTest2</router-link>
         <router-view></router-view> <!--显示位置 -->
        <World></World>
    </div>
</template>

<script>
import World from "../components/HelloWorld"
export default {
   data() {
    //    return {
    //      msg:'hello'  
    //    }
   }, 
   components:{
     World
   }
}
</script>
<style>

</style>

