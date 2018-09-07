// Import API keys
import keys from '@/config';

import Vue from 'vue';
import VueAnalytics from 'vue-analytics'; // Import vue analytics
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

// Use Google Analtyics
Vue.use(VueAnalytics, {
  id: keys.GA_KEY,
  // customResourceURL: 'https://www.google-analytics.com/analytics_debug.js',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
