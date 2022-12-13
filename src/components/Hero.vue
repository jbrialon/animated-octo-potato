<script>
import gsap from "gsap";

export default {
  mounted() {
    const title = this.$refs.title;
    const video = this.$refs.video;

    gsap.set(title, { autoAlpha: 0 });
    video.addEventListener("ended", () => {
      gsap.to(title, { autoAlpha: 1, duration: 1 });
      console.log("ended");
    });
  },
};
</script>

<template>
  <section id="hero" class="section">
    <video ref="video" src="intro_trim.mp4" autoplay playsinline muted></video>
    <!-- <img class="logo" src="../assets/logo.jpg" alt="Devenir Logo" /> -->
    <h1 ref="title" class="uppercase"><span class="bold">Devenir</span> Installation - Experience the Purest Form of Interaction</h1>
    <p>
      DEVENIR is an interactive installation that lets users control a digital world only with the power of their mind. By mixing data and
      emotion, we create pure and immediate interactions, sparking ideas and discussions on how digital can extend the human body.
    </p>
  </section>
</template>

<style lang="scss" scoped>
#hero {
  position: relative;
  padding-top: 15vw;

  @include respond-to("medium") {
    // padding-top: 550px;
    width: 100%;

    max-width: none;
    padding-top: 0;
  }

  h1 {
    font-weight: $fw-light;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 5px;

    @include respond-to("medium") {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 79vh;
      width: 100%;
      font-size: 20px;
      line-height: 130px;
      letter-spacing: 5px;
    }

    @include respond-to("large") {
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
      font-size: 25px;
      margin: 130px auto 0 auto;
      text-align: left;
    }

    @include respond-to("large") {
      max-width: $inner-column;
      font-size: 30px;
      margin: 130px auto 0 auto;
      text-align: left;
    }
  }

  video {
    width: 100%;
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
