<template>
  <ul class='navlink-list'>
    <li> <router-link to='/'> à propos</router-link> </li>
    <li> <router-link to='/projects'>projets</router-link> </li>
    <li> <router-link to='/contact'>contacte</router-link> </li>
    <li> li one </li>
  </ul>

</template>

<script>
// styles
import '@/styles/navlinks.scss';

export default {
  name: 'NavLinks',
  props: {},
  components: {},
};
</script>
