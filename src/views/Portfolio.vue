<template>
  <pdf src='@/assets/portfolio.pdf' :page=1></pdf>
</template>

<script>
import pdf from 'vue-pdf';

export default {
  components: {
    pdf,
  },
};
</script>
