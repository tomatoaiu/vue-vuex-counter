import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import a from './modules/a-counter'
import b from './modules/b-counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    a,
    b
  }
})
