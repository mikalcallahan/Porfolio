import Vue from 'vue'; // import vue
import Router from 'vue-router'; // import vue router
import VueAnalytics from 'vue-analytics'; // import vue analytics

import keys from '@/config'; // import API keys

// import all views
// import Portfolio from '@/views/Portfolio.vue';

const About = () => import('@/views/About.vue');
const ComingSoon = () => import('@/views/ComingSoon.vue');
// import Contact from './views/Contact.vue';

// Use router
Vue.use(Router);

// Use Google Analtyics
Vue.use(VueAnalytics, {
  id: keys.GA_KEY,
  // customResourceURL: 'https://www.google-analytics.com/analytics_debug.js',
});

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Default',
      component: ComingSoon,
    },
    {
      path: '/',
      name: 'Home',
      component: ComingSoon,
    },
    /*    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    }, */
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ComingSoon,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ComingSoon,
    },
  ],
});
