import { fetchList, fetchImages } from '@/api/films'

// initial state
const state = {
  all: [],
  images: []
}

// getter
const getters = {
  getCoverUrlById: state => id => {
    return state.images.find(img => img.id === id).cover_url
  }
}

// actions
const actions = {
  getAllFilms ({ commit }) {
    fetchList().then(response => {
      commit('setFilms', response.data || [])
    }).catch(() => {
    })
  },
  getAllImages ({ commit }) {
    fetchImages().then(response => {
      commit('setImages', response.data || [])
    })
  }
}

// mutations
const mutations = {
  setFilms (state, films) {
    state.all = films
  },
  setImages (state, images) {
    state.images = images
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
