import Vue from 'vue'
import Vuex from 'vuex'
import comment from './comment'
import post from './post'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    comment,
    post,

  }
})
