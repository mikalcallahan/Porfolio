<!-- Header Component -->
<template>
  <header class='header'>
    <!-- <h3 class='logo'>Mikal</h3> -->
    <ul class='navigation navigation--router-links'>
      <router-link
        class='navigationLinks navigationLinks--nav-desktop'
        tag='li'
        v-for='link in routerLinks'
        :to='link.url'
        :key='link.key'>
          <a class='link'>{{ link.name }}</a>
      </router-link>
    </ul>
    <button class='button button--sitemap' @click='animateMenu'>Sitemap</button>
    <MenuOverlay/>
    <!-- <MenuOverlay v-show='getMenuStatus'/>-->
  </header>
</template>

<script>
import '@/styles/header.scss';

import { mapGetters, mapMutations } from 'vuex';
import anime from 'animejs';

const MenuOverlay = () => import('@/components/MenuOverlay.vue');

export default {
  name: 'Header',
  components: { MenuOverlay },
  computed: {
    ...mapGetters(['getMenuStatus']),
  },
  data() {
    return {
      // navIsOpen: false,
      routerLinks: [
        {
          name: 'About',
          url: '/',
          key: 0,
        },
        {
          name: 'Portfolio',
          url: '/Portfolio',
          key: 1,
        },
      ],
      externalLinks: [
        {
          name: 'Webring',
          url: 'https://webring.xxiivv.com/#random',
          target: '_blank',
          key: 0,
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/mikalcallahan/',
          target: '_blank',
          key: 1,
        },
        {
          name: 'Github',
          url: 'https://www.github.com/mikalcallahan/',
          target: '_blank',
          key: 2,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(['toggleMenu']),
    changeState() {
      this.$store.commit('toggleMenu');
    },
    animateMenu() {
      anime({
        targets: '.menuOverlay',
        width: '100%',
        easing: 'easeInOutCirc',
        duration: 500,
      });
      this.changeState();
    },
  },
};
</script>
