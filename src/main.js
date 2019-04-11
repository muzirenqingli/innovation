import Vue from 'vue/dist/vue.common'

import app from './compontent/App.vue'


let vm = new Vue({
    el: "#app",
    render: c => c(app)
})