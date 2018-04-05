import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const actions = {
    incrementb: ({commit}) => {
        commit("INCREMENTB")
    },
    decrementb: ({commit}) => {
        commit("DECREMENTB")
    },
}

const mutations = {
    INCREMENTB(state) {
        state.count++
    },
    DECREMENTB(state) {
        state.count--
    }
}

const getters = {
    countB: state => state.count,
}

export default {
    state,
    getters,
    actions,
    mutations,
}