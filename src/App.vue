<!-- App.vue -->

<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>

// import general styles
import '@/styles/app.scss';

// import script
import NavBar from '@/components/NavBar.vue';

// export
export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>
