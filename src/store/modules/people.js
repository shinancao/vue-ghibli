import { fetchList } from '@/api/people'

// initial state
const state = {
  all: []
}

// getter
const getters = {
}

// actions
const actions = {
  getPeople ({ commit }) {
    fetchList().then(response => {
      commit('setPeople', response.data || [])
    }).catch(() => {
    })
  }
}

const mutations = {
  setPeople (state, people) {
    state.all = people
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
