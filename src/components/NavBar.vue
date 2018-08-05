<!-- NavBar.vue -->

<template>
  <!-- navbar layout (subject to change) -->
  <nav class='navbar'>
    <span class='logo'>
    <h4> mikal. </h4>
    </span>
    <span @click='toggleNav' class='navToggle'>
      <img id='navToggle' src='@/assets/veggieburger.svg'><img>
    </span>
    <NavMenu v-show='navIsOpen'/>
  </nav>
</template>
<script>
// import specific styles
import '@/styles/navbar.scss';

// import components
import NavMenu from '@/components/NavMenu.vue';
import { showAt, hideAt } from 'vue-breakpoints';

// default export
export default {
  name: 'NavBar',
  props: [],
  components: { NavMenu, showAt, hideAt },
  data() {
    return {
      navIsOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen;
      // this.$store.state.navIsOpen = !this.$store.state.navIsOpen; // prepfare for state
    },
  },
};
</script>
