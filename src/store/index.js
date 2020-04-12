import Vue from 'vue'
import Vuex from 'vuex'
import films from './modules/film'
import people from './modules/people'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    films,
    people
  }
})

export default store
