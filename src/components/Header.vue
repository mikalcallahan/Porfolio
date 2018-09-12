<!-- Header Component -->
<template>
  <header class='header'>
    <h3 id='logo'>Mikal</h3>
    <ul id='headerLinks'>
      <li v-for='link in links' :key='link.key'>
        <a :href='link.url'>{{link.name}}</a>
      </li>
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
          url: '/about',
          key: 0,
        },
        {
          name: 'portfolio',
          url: '/portfolio',
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
