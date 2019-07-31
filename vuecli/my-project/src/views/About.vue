<template>
  <div>
    <h1>this is a page </h1>
    <Helloworld :msg="str"></Helloworld>
  </div>
</template>
<script>
import Helloworld from '../components/HelloWorld'
export default {
  name:'about',
  data(){
    return {
      str:"hello"
    }
  },
  components:{
    Helloworld
  }
  
}
</script>


