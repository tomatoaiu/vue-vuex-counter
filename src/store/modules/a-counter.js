import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const actions = {
    incrementa: ({commit}) => {
        commit("INCREMENTA")
    },
    decrementa: ({commit}) => {
        commit("DECREMENTA")
    },
}

const mutations = {
    INCREMENTA(state) {
        state.count++
    },
    DECREMENTA(state) {
        state.count--
    }
}

const getters = {
    countA: state => state.count,
}

export default {
    state,
    getters,
    actions,
    mutations,
}