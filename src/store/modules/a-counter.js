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
    setCount: ({commit}, payload) => {
        console.log("count",payload)
        commit("SET_COUNT", payload)
    }
}

const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    SET_COUNT(state, payload) {
        console.log("payload",payload)
        state.count = payload.count
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