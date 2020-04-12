import Vue from 'vue'
import Vuex from 'vuex'
import films from './modules/film'
import people from './modules/people'
import species from './modules/species'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    films,
    people,
    species
  }
})

export default store
