import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueClipboard from 'vue-clipboard2'
import 'buefy/dist/buefy.css'
import 'animate.css'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueClipboard)

new Vue({
  render: h => h(App),
}).$mount('#app')
