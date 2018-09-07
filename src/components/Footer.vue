<!-- Footer Component -->
<template>
  <footer class='footer'>
    <div id='thisMoment'>{{getDate()}}</div>
    <div id='footerLinks'>

    </div>
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
    };
  },
  methods: {
    getDate() {
      this.now = moment().format('h:mm, D MMMM YYYY');
      setInterval(this.getDate, 1000);
      return this.now;
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>
