<!-- App.vue -->

<template>
  <div id="app">
    <!-- <NavBar/> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// import general styles
import '@/styles/app.scss';

// import Components
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

// Export app
export default {
  name: 'app',
  components: {
    NavBar,
    Footer,
  },
};
</script>
