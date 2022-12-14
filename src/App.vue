<script>
import CHero from "./components/Hero.vue";
import CVideo from "./components/Video.vue";
import CText from "./components/Text.vue";
import CCarousel from "./components/Carousel.vue";
import CGallery from "./components/Gallery.vue";
import CFooter from "./components/Footer.vue";

export default {
  components: {
    "c-hero": CHero,
    "c-video": CVideo,
    "c-text": CText,
    "c-carousel": CCarousel,
    "c-gallery": CGallery,
    "c-footer": CFooter,
  },
};
</script>

<template>
  <c-hero />
  <c-video />
  <c-text />
  <c-carousel />
  <c-gallery />
  <c-footer />
</template>
