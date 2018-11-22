<!-- About Page -->
<template>
  <section class='about'>
  <div class='about--en'>
    <div class='about__intro'>
      <h1 class='title'>Mikal Callahan</h1>
      <h3 class='subtitle'>Software development, UI/UX design.</h3>
    </div>
    <p class='about__description description--one'>
      I am a software developer and ui/ux designer in love with the process of designing
      and developing user experiences.
      I create full-stack solutions to web oriented needs, from e-commerce to web apps.
    </p>
    <ul class='about__services'>
    <li v-for='service in services'>
      <h2 id='service__name'>{{ service.name }}</h2>
      <h4 id='service__desc'>{{ service.desc }}</h4>
    </li>
    </ul>
    <p class='about__description description--two'>
      Each partnership is different and the values and needs of those I work with
      always come first.
      After our goals have been defined I develop a roadmap for the project,
      iterate through designs, then development.
    </p>
    <p class='about__description description--three'>
      I have had the pleasure of working with wonderful people including Bettina Heinz,
      Adaptive Web Studio, Heavenly Gift Baskets, and Tiled.
    </p>
    <img class='about__photo' src='@/assets/mikal.jpg'/>
  </div>
  <div class='about--fr'>

  </div>
  </section>
</template>

<script>
// import styles
import '@/styles/navbar.scss';
import '@/styles/about.scss';

// more or less default export
export default {
  name: 'About',
  components: {},
  data() {
    return {
      services: [
        {
          name: 'UI/UX Design',
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
          desc: 'If you just want some advice',
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
