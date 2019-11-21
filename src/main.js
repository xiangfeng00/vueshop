// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import AMap from 'vue-amap'
Vue.use(AMap);

AMap.initAMapApiLoader({
  key: '251e896d2df4f98203eaf458f0e35911',
  plugin: ['AMap.Geolocation', 'AMap.Geocoder']
})
import '../static/css/reset.css'
import '../static/css/main.css'
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif'
import './fiters' // 加载过滤器

// 注册全局组件标签
// Vue.component(Button.name, Button)  // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
