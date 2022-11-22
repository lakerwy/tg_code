import Vue from 'vue'
import App from './App.vue'
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
