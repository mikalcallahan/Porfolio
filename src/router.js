import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: 'contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
