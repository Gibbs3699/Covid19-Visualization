import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import VueApexCharts from 'vue-apexcharts'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'
import {BIcon, BIconArrowUp, BIconArrowDown, BIconStarFill} from 'bootstrap-vue'
import {BIconEmojiFrownFill, BIconEmojiDizzyFill} from 'bootstrap-vue'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)
Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)
Vue.component('BIconStarFill', BIconStarFill)
Vue.component('BIconEmojiFrownFill', BIconEmojiFrownFill)
Vue.component('BIconEmojiDizzyFill', BIconEmojiDizzyFill)
Vue.prototype.moment = moment
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
