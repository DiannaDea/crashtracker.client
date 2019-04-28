import Vue from 'vue';
import Antd from 'ant-design-vue';
import Notifications from 'vue-notification';
import Lang from 'vuejs-localization';
import 'ant-design-vue/dist/antd.css';
import 'vue2-animate/dist/vue2-animate.min.css';
import App from './App';
import router from './router';
import store from './store';

Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(Antd);
Vue.use(Notifications);
Vue.use(Lang);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
