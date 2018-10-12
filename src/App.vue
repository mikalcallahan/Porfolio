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
const Header = () => import('@/components/Header.vue');
const Footer = () => import('@/components/Footer.vue');
// import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';

// Export app
export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
};
</script>
