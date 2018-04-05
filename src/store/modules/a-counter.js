import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const actions = {
    increment: ({commit}) => {
        commit("INCREMENT")
    },
    decrement: ({commit}) => {
        commit("DECREMENT")
    },
}

const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

const getters = {
    count: state => state.count,
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}