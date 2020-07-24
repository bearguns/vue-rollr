import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'

// Import icons for use in application
import {
  faDiceD20,
  faDiceD4,
  faDiceD6,
  faDiceD8,
  faDiceD10,
  faDiceD12
} from '@fortawesome/pro-light-svg-icons'

library.add(faDiceD4)
library.add(faDiceD8)
library.add(faDiceD10)
library.add(faDiceD12)
library.add(faDiceD20)
library.add(faDiceD6)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
