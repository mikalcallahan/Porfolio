<!-- About Page -->

<template>
  <div class="about">
    <h1>Mikal Callahan</h1>
    <p>
    je suis un programmeur et concepteur creatif avec un accent sur les conceptions
    belles et functionnelles associées á des codes intelligents et clairs.
    </P>
    <p>je programmais et concept le web (&mobile) depuis deux mil seize et utilise</p>
    <ul>
      <!-- <li :for='tool in tools' :key='item.name'> -->
      <li v-for='tool in tools' :key='tool.name'>
        {{tool.name}}
      </li>
    </ul>
    <p>
    J'aime travailler sur des projets avec d'autres et aider leurs visions á prendre vie.
    </p>
    <p>
      Je prends des photos, fais la musique, écris. Je suis passionné par l'environnement, les gens
      , la nature, les bicyclettes, l'art, et les animaux.
    </p>
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
