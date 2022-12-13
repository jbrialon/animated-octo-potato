<script>
export default {};
</script>

<template>
  <section id="hero" class="section">
    <img class="logo" src="../assets/logo.jpg" alt="Devenir Logo" />
    <h1 class="uppercase"><span class="bold">Devenir</span> Installation - Experience the Purest Form of Interaction</h1>
    <p>
      DEVENIR is an interactive installation that lets users control a digital world only with the power of their mind. By mixing data and
      emotion, we create pure and immediate interactions, sparking ideas and discussions on how digital can extend the human body.
    </p>
  </section>
</template>

<style lang="scss" scoped>
#hero {
  position: relative;
  padding-top: 25vw;

  @include respond-to("medium") {
    padding-top: 550px;
  }

  h1 {
    font-weight: $fw-light;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 5px;

    @include respond-to("medium") {
      font-size: 29px;
      line-height: 130px;
      letter-spacing: 5px;
    }
  }

  p {
    max-width: 80vw;
    font-size: 20px;
    line-height: 175%;
    margin: 65px auto 0 auto;
    text-align: center;

    @include respond-to("medium") {
      max-width: $inner-column;
      font-size: 30px;
      margin: 130px auto 0 auto;
      text-align: left;
    }
  }

  .logo {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
}
</style>
