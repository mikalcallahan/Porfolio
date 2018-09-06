import Vue from 'vue';
import Router from 'vue-router';
import VueAnalytics from 'vue-analytics';
import About from './views/About.vue';
// import Projects from './views/Projects.vue';
// import Contact from './views/Contact.vue';
import ComingSoon from './views/ComingSoon.vue';

Vue.use(Router);
Vue.use(VueAnalytics, {
  id: '@/config.js',
  Router,
});

export default new Router({
  routes: [
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
      path: 'contact',
      name: 'contact',
      component: ComingSoon,
    },
  ],
});
