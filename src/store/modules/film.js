import { fetchList, fetchImages } from '@/api/films'

// initial state
const state = {
  all: [],
  images: []
}

// getter
const getters = {
  getCoverUrlById: state => id => {
    let obj = state.images.find(img => img.id === id)
    return obj ? obj.cover_url : ''
  },
  getIndexById: state => id => {
    return state.all.findIndex(film => film.id === id)
  }
}

// actions
const actions = {
  getAllFilms ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchList().then(response => {
        commit('setFilms', response.data || [])
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
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
