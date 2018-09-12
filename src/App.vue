<!-- App.vue -->
<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// import general styles
import '@/styles/app.scss';

// import Components
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

// Export app
export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
};
</script>
