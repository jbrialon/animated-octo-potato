<script>
export default {};
</script>

<template>
  <section id="video">
    <!-- <iframe src="https://player.vimeo.com/video/780765242" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> -->
    <iframe
      src="https://player.vimeo.com/video/780765242?h=d2461ed2fd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      title="Devenir Beta"
    ></iframe>
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
