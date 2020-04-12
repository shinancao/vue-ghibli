import { fetchList } from '@/api/species'

// initial state
const state = {
  all: []
}

// getter
const getters = {
}

// actions
const actions = {
  getSpecies ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchList().then(response => {
        commit('setSpecies', response.data || [])
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

const mutations = {
  setSpecies (state, species) {
    state.all = species
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
