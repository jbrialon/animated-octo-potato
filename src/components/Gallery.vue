<script>
export default {
  data() {
    return {
      images: [
        {
          src: "export/asset-1.jpg",
          alt: "Devenir Level 3",
        },
        {
          src: "export/asset-2.jpg",
          alt: "Merkle @ Digital Festival Zurich",
        },
        {
          src: "export/asset-3.jpg",
          alt: "Merkle @ Digital Festival Zurich",
        },
        {
          src: "export/asset-4.jpg",
          alt: "Merkle @ Digital Festival Zurich",
        },
        {
          src: "export/asset-5.jpg",
          alt: "Merkle @ Digital Festival Zurich",
        },
        {
          src: "export/asset-6.jpg",
          alt: "Test Setup @ Zurich Office",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="gallery" class="section">
    <template v-for="(image, index) in images" :key="index">
      <img v-lazy="image.src" :alt="image.alt" />
    </template>
  </section>
</template>

<style lang="scss" scoped>
#gallery {
  width: 100%;
  padding: 0;

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    will-change: opacity;
    opacity: 0;
    margin-bottom: 65px;
    transition: opacity 1000ms ease-in-out;

    @include respond-to("medium") {
      margin-bottom: 125px;
    }
  }

  img[lazy="loaded"] {
    opacity: 1;
  }
}
</style>
