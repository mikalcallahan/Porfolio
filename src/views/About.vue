<!-- About Page -->
<template>
  <div class="about">
    <h1 class='title'>Mikal Callahan</h1>
    <h3 class='subtitle'>Software development, Ui/Ux design.</h3>
    <div class='about en'>
      <!--
      <p class='about__description'>
      I am a software developer and ui/ux designer in love with the process of designing
      and developing user experiences.
      I create full-stack solutions to web oriented needs, from e-commerce to web apps.
      Each partnership is different and the values and needs of those I work with
      always come first.
      After our goals have been defined I develop a roadmap for the project,
      iterate through designs, then development.
      I have had the pleasure of working with wonderful people including Bettina Heinz,
      Adaptive Web Studio, Heavenly Gift Baskets, and Tiled.
      </p>
      <img class='about__photo' src=''/>
      <ul class='about__services'>
      </ul>
      -->
    </div>
    <div class='about fr'></div>
  </div>
</template>

<script>
// import styles
import '@/styles/navbar.scss';

// more or less default export
export default {
  name: 'About',
  components: {},
  data() {
    return {
      services: [
        {
          name: 'Ui/Ux design',
          desc: 'User Centered Modern Designs',
        },
        {
          name: 'Full-Stack Development',
          desc: 'Front-end, Back-end, or both I’ve got you covered',
        },
        {
          name: 'SEO/E-Commerce',
          desc: 'Helping you stay on top of the seach engines',
        },
        {
          name: 'Consulting',
          desc: 'If you just want some advince',
        },
      ],
      tools: [
        { name: 'react, vue.js, react native' },
        { name: 'scss, stylus' },
        { name: 'webpack, npm, yarn' },
        { name: 'sketch, invision studio' },
        { name: 'adobe creative suite (ai, ps, id)' },
        { name: 'git version control' },
      ],
    };
  },
};
</script>
