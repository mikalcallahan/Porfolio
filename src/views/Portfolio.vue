<!-- Portfolio.vue -->
<template>
  <div class='portfolio'>
    <ul class='project-list'>
      <li class='project'>
        <a class='project__link' href='https://www.github.com/mikalcallahan/FoodApp'>
          <h0 class='project__name'>Food Gorilla</h0>
          <div class='project__image'>
            <img src='@/assets/foodgorilla.png'>
          </div>
        </a>
      </li>
      <li class='project'>
        <a class='project__link' href='https://www.heinzenterprises.com/'>
          <h0 class='project__name'>Heinz Enterprises</h0>
          <div class='project__image'>
            <img src='@/assets/heinzenterprises.png'>
          </div>
        </a>
      </li>
      <li class='project'>
        <a class='project__link' href='https://bettinaheinzart.com/'>
          <h0 class='project__name'>Bettina Heinz Art</h0>
            <div class='project__image'>
              <img src='@/assets/bettinaheinzart.png'>
            </div>
          </a>
      </li>

    </ul>
  </div>
</template>

<script>
import '@/styles/portfolio.scss';

export default {
  components: {},
};
</script>
