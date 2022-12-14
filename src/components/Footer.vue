<script>
export default {};
</script>

<template>
  <footer id="footer" class="uppercase">
    <p>© Devenir copyright of Merkle DACH</p>
  </footer>
</template>

<style lang="scss" scoped>
#footer {
  padding: 40px 0;
  width: 100%;

  @include respond-to("medium") {
    padding: 80px 0;
  }

  p {
    font-size: 10px;
    line-height: 130%;
    letter-spacing: 0.15em;

    @include respond-to("medium") {
      font-size: 14px;
      line-height: 130%;
      letter-spacing: 0.1em;
    }
  }
}
</style>
