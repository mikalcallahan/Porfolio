<!-- Footer Component -->
<template>
  <footer>
    <!-- <span>{{this.now}}</span> -->
  </footer>
</template>

<script>
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
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>
