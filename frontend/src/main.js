import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
// import 'mdb-vue-ui-kit/css/mdb.min.css';


Vue.use(VueYouTubeEmbed)

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
