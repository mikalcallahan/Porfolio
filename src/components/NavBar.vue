<template>
  <!-- navbar layout (subject to change) -->
  <nav class='navbar'>
    <h4> mikal. </h4>
    <span @click='toggleNav' class='navToggle'> veggieburger </span>
    <div v-show='navIsOpen' class='navMenu'>
      <ul  class='navlinks'>
        <li> <router-link to='/'> à propos</router-link> </li>
        <li> <router-link to='/projects'>projets</router-link> </li>
        <li> <router-link to='/contact'>contacte</router-link> </li>
        <li> li one </li>
      </ul>
    </div>
  </nav>
</template>
<script>
// import specific styles
import '@/styles/navbar.scss';

// import components
import { showAt, hideAt } from 'vue-breakpoints';

// default export
export default {
  name: 'NavBar',
  props: [],
  components: { showAt, hideAt },
  data() {
    return {
      navIsOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen;
    },
  },
};
</script>
