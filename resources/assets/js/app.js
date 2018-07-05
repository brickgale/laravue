import Vue from 'vue'

window.Vue = Vue
window.Vue.config.productionTip = false

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
