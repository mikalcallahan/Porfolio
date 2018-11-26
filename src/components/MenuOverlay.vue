<!-- MenuOverlay.vue -->

<template>
  <div class='menuOverlay'>
    <span class='button button--closeMenu' @click='animateMenu' v-show='getMenuStatus'> X </span>
  <ul class='navigation navigation--full-menu' v-show='getMenuStatus'>
    <router-link
      tag='li'
      v-for='link in routerLinks'
      :key='link.key'
      :to='link.url'
      @click.native='animateMenu'>
      <a class='link'>{{link.name}}</a>
    </router-link>
    <li
      v-for='link in externalLinks'
      :key='link.key'
      @click='animateMenu'>
      <a class='link' :href='link.url'>{{link.name}}</a>
    </li>
  </ul>
  </div>
</template>

<script>
// styles
import '@/styles/menuoverlay.scss';

import anime from 'animejs';
import { mapGetters } from 'vuex';

export default {
  name: 'NavMenu',
  props: {},
  components: {},
  computed: {
    ...mapGetters(['getMenuStatus']),
  },
  /*
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          click: function (event) {
            vm.$emit('click', event.target.event)
          }
        }
      )
    } */
  data() {
    return {
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
    changeState() {
      this.$store.commit('toggleMenu');
    },
    animateMenu() {
      anime({
        targets: '.menuOverlay',
        width: '0%',
        easing: 'easeInOutCirc',
        duration: 500,
      });
      this.changeState();
    },
  },
};
</script>
