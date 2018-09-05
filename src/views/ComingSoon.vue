<!-- Coming Soon Page -->
<template>
  <div class='coming-soon'>
    <h3> Restoration in progress </h3>
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
    animate() {
      anime({
        targets: 'h3',
        translateX: [
          { value: 100, duration: 1200 },
          { value: 0, duration: 800 },
        ],
        // rotate: '1turn',
        // backgroundColor: '#FFF',
        easing: 'linear',
        duration: 2000,
        loop: true,
      });
      console.log('true');
    },
  },
  mounted() {
    this.animate();
  },
};
</script>
