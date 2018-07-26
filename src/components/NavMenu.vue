<template>
  <div class='navMenu'>
    <ul  class='navlinks'>
      <li> <router-link to='/'> à propos</router-link> </li>
      <li> <router-link to='/projects'>projets</router-link> </li>
      <li> <router-link to='/contact'>contacte</router-link> </li>
      <li> li one </li>
    </ul>
  </div>
</template>

<script>
// styles
import '@/styles/navlinks.scss';

export default {
  name: 'NavMenu',
  props: {},
  components: {},
};
</script>
