<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
// import general styles
import '@/styles/app.scss';

// import script
import Header from '@/components/Header.vue';

// export
export default {
  name: 'about',
  components: {
    Header,
  },
};
</script>
