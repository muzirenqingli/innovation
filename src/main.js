import Vue from 'vue'

import app from './compontent/App.vue'
import './css/basic.css'

let vm = new Vue({
    el: "#app",
    render: c => c(app)
})