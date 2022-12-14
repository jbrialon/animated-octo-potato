<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  data() {
    return {
      quotes: [
        {
          text: "“The best things are learnt during the worst days of your life. Get up and see what new learning you had on a bad day.”",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
};
</script>

<template>
  <section id="carousel" class="section">
    <p>Experiences from the Zurich Digital visitors:</p>
    <carousel :items-to-show="1" :mouse-drag="quotes.length > 1">
      <slide v-for="(quote, index) in quotes" :key="index">
        <div class="item">
          {{ quote.text }}
        </div>
      </slide>
      <template #addons>
        <pagination v-if="quotes.length > 1" />
      </template>
    </carousel>
  </section>
</template>

<style lang="scss">
#carousel {
  padding-top: 0;
  width: 100%;

  p {
    font-weight: $fw-bold;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 40px;

    @include respond-to("medium") {
      font-size: 18px;
      line-height: 200%;
    }
  }

  .item {
    max-width: $inner-column;
    font-size: 25px;
    line-height: 140%;

    @include respond-to("medium") {
      font-size: 40px;
      line-height: 200%;
    }
  }

  .carousel {
    &__pagination {
      margin-top: 50px;
    }

    &__pagination-button {
      &:after {
        width: 15px;
        height: 15px;
        border: 1px solid white;
        border-radius: 50%;
      }
      &--active {
        &:after {
          background: white;
        }
      }
    }
  }
}
</style>
