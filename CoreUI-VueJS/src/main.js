import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from "ant-design-vue/es";

import "ant-design-vue/dist/antd.css";

Vue.config.performance = true
Vue.use(CoreuiVue);
Vue.use(Antd);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  icons,
  template: '<App/>',
  components: {
    App
  },
})
