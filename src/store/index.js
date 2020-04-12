import Vue from 'vue'
import Vuex from 'vuex'
import films from './modules/film'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    films
  }
})

export default store
