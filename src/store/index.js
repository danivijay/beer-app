import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    beers: []
  },
  mutations: {
    initBeers (state, payload) {
      this.state.beers = []
      const beers = payload
      this.state.beers = beers.map(function(el) {
        var o = Object.assign({}, el);
        o.inCart = false;
        return o;
      })
    }
  },
  actions: {
    initBeers ({commit}) {
      const url = `http://starlord.hackerearth.com/beercraft`
      return axios.get(url)
      .then((response) => {
        commit('initBeers', response.data)
      })
      .catch(function (error) {
        throw error
      })
    }
  },
  getters: {
    getAllBeers (state) {
      return state.beers.sort((a, b) => a.id == b.id ? 0 : +(a.id < b.id) || -1)
    },
    getAllBeerStyles (state) {
      return new Set(state.beers.map(b => b.style ))
    }
  }
})
