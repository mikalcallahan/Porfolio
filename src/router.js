import Vue from 'vue'; // import vue
import Router from 'vue-router'; // import vue router
import VueAnalytics from 'vue-analytics'; // import vue analytics

import keys from '@/config'; // import API keys

// import all views
const About = () => import('@/views/About.vue');
// import Projects from './views/Projects.vue';
// import Contact from './views/Contact.vue';
const ComingSoon = () => import('@/views/ComingSoon.vue');

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
    {
      path: '/about',
      name: 'about',
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
