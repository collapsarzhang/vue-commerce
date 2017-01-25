// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'script!jquery/dist/jquery.min.js'
import 'script!materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// window.Materialize = require('materialize-css/dist/js/materialize.js')
// import jQuery from 'jquery/dist/jquery.min.js'
// window.jQuery = window.$ = jQuery
// import Materialize from 'materialize-css/dist/js/materialize.min.js'
// window.Materialize = Materialize
// import 'materialize-css/dist/css/materialize.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
