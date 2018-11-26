<!-- Footer Component -->
<template>
  <footer class='footer'>
    <!-- <h3 id='thisMoment'>{{getDate()}}</h3> -->
    <h5 class='link__email'>
      <a class='link' href='mailto:mikal.callahan@icloud.com?Subject=Hey%Mikal' target ='_top'>mikal.callahan@icloud</a>
    </h5>
    <ul class='footer__links'>
      <li v-for='link in links' :key='link.key'>
        <a :href='link.url' :target='link.target'>{{link.name}}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import '@/styles/footer.scss';

import moment from 'moment';

export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      now: null,
      key: 0,
      links: [
        {
          name: 'webring',
          url: 'https://webring.xxiivv.com/#random',
          target: '_blank',
          key: 0,
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/mikalcallahan/',
          target: '_blank',
          key: 1,
        },
        {
          name: 'github',
          url: 'https://www.github.com/mikalcallahan/',
          target: '_blank',
          key: 2,
        },
      ],
    };
  },
  methods: {
    getDate() {
      this.now = moment().format('D MMMM YYYY');
      // setInterval(this.getDate, 5000);
      return this.now;
    },
    getNow() {
      this.now = moment().format('hh:mm, D MMMM YYYY');
    },
    iterateKey() {
      this.key = this.key + 1;
    },
    getKey() {
      this.iterateKey();
      return this.key;
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>
