<script>
export default {};
</script>

<template>
  <section id="video">
    <iframe src="https://player.vimeo.com/video/773931854" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </section>
</template>

<style lang="scss" scoped>
#video {
  width: 100%;
  max-width: none;

  iframe {
    width: 100%;
    height: auto;

    @include respond-to("medium") {
      width: 1024px;
      height: 760px;
    }

    @include respond-to("large") {
      width: 1440px;
      height: 900px;
    }
  }
}
</style>
