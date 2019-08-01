import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //共享的变量
    count: 0,
  },
  mutations: {
    //改变共享的变量
    add(state,num) {
      state.count+=num
    },
    reduce(state,num) {
      state.count-=num
    }
  },
  getters:{
    count2(state){
      return state.count+10;
    }
  },
  actions: {
    //请求
    addAction({commit},num){
    commit("add",num)
    }
  }
})
 