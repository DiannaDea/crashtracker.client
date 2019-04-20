import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'vue2-animate/dist/vue2-animate.min.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Antd);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
