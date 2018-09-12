<!-- Header Component -->
<template>
  <header class='header'>
    <h3 id='logo'>Mikal</h3>
    <ul id='headerLinks'>
      <router-link tag='li' v-for='link in links' :to='link.url' :key='link.key'>
        <a>{{link.name}}</a>
        <!-- <a :href='link.url'>{{link.name}}</a> -->
      </router-link>
    </ul>
  </header>
</template>

<script>
import '@/styles/header.scss';

export default {
  name: 'Header',
  components: {},
  data() {
    return {
      key: 0,
      links: [
        {
          name: 'about',
          url: '/About',
          key: 0,
        },
        {
          name: 'portfolio',
          url: '/Portfolio',
          key: 1,
        },
      ],
    };
  },
  methods: {
    iterateKey() {
      this.key = this.key + 1;
    },
    getKey() {
      this.iterateKey();
      return this.key;
    },
  },
};
</script>
