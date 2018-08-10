import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import App from './index.vue'
import { store } from './store'

Vue.use(Vuex)

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
