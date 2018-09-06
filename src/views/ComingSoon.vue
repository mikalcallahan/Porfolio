<!-- Coming Soon Page -->
<template>
  <div class='coming-soon'>
    <h3 class='message en'>
      Reconstruction in progress
      <span class='elli 1'>.</span>
      <span class='elli 2'>.</span>
      <span class='elli 3'>.</span>
    </h3>
    <h3 class='message fr'>
      Reconstruction en cours
      <span class='elli 1'>.</span>
      <span class='elli 2'>.</span>
      <span class='elli 3'>.</span>
    </h3>
  </div>
</template>

<script>
import '@/styles/comingsoon.scss';
import anime from 'animejs';


export default {
  name: 'ComingSoon',
  components: {},
  data() {
    return {};
  },
  methods: {
    animateWorkInProgess() {
      anime({
        targets: 'h3.message.en',
        opacity: [
          { value: 1, duration: 6000 },
          { value: 0, duration: 6000 },
        ],
        loop: true,
        // delay: function(el, i, l) {
        // return i * 3000;
        // }
      });
      anime({
        targets: 'h3.message.fr',
        opacity: [
          { value: 1, duration: 6000 },
        ],
        loop: true,
        delay: 6000,
      });
    },
    animateEllipsis() {
      anime({
        targets: '.elli',
        opacity: [
          { value: 0 },
          { value: 1 },
        ],
        // easing: 'linear',
        duration: 2800,
        loop: true,
        delay(el, i) {
          return i * 100;
        },
      });
    },
  },
  mounted() {
    this.animateWorkInProgess();
    this.animateEllipsis();
  },
};
</script>
