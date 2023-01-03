/**
 * @Author: 付柏磊
 * @Date: 2022-12-12 17:44:47
 * @LastEditors: 付柏磊
 * @LastEditTime: 2022-12-12 17:44:47
 * @Description: desc
 */

import Vue from 'vue'
import App from './App.vue'
import { Swipe, SwipeItem } from 'vant';


Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

