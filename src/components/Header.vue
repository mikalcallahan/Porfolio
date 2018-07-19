<template>
  <!-- navbar layout (subject to change) -->
  <nav class='navbar'>
      <h4> mikal. </h4>
      <div class='navlinks'>
        <router-link to='/'> à propos</router-link>
        <router-link to='/projects'>projets</router-link>
        <router-link to='/contact'>contacte</router-link>
      </div>
      <!-- <span> hamburger text </span> -->
  </nav>
</template>

<script>
// import specific styles
import '@/styles/header.scss';

// import components
import { showAt, hideAt } from 'vue-breakpoints';

// default export
export default {
  name: 'Header',
  props: {},
  components: { showAt, hideAt },
};
</script>
