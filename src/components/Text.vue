<script>
export default {};
</script>

<template>
  <section id="text" class="section">
    <h3>Starting point</h3>
    <p>
      Merkle in the DACH area is mostly recognised as a technology agency in the DACH area. And because of that we aimed to showcase our
      creative innovation capabilities at the Zürich Digital Festival 2022 in september.
    </p>
    <h3>Challenge</h3>
    <p>
      The challenge of the event was to create something that would impress the very creative and tech savvy audience of the Zürich Digital
      Festival and would make the Merkle Booth a place you couldn't walk past by without being part of the experience.
    </p>
    <h3>Solution</h3>
    <p>
      We created an app with a brain-computer-interface that let you move, shape and grow objects on screen by just thinking about it. The
      hardware we used was Emotiv Devices that are designed for Brain Computer Interface (BCI).
      <br />
      <br />
      <br />
      The <span class="bold">Emotiv Devices</span> are working using pattern recognition and identify them as Commands and the experiment
      requires a training of at least one Neutral state and one Command state. The system learns to recognise the patterns of brain activity
      that are related to the Command state compared to the Neutral state.
      <br />
      <br />
      <br />
      The game itself was created in Unreal engine and immersed the players in 3 stages: the training stage where you learn to use the power
      of your mind, the rock stage where you release the light from the rock that is floating in a mystical quarry. The destruction is
      managed by physics and is not scripted using <span class="bold">Unreal Chaos Destruction</span>, making every run of the game a unique
      experience. The final the stage of the game is where you build life in an alien world.
    </p>
  </section>
</template>

<style lang="scss" scoped>
#text {
  width: 100%;
  max-width: 76vw;

  @include respond-to("medium") {
    max-width: $inner-column;
  }

  margin: auto;
  text-align: left;

  h3 {
    font-weight: $fw-bold;
    font-size: 20px;
    line-height: 110%;
    @include respond-to("medium") {
      font-size: 24px;
      line-height: 130%;
    }
  }

  p {
    font-weight: $fw-normal;
    font-size: 14px;
    line-height: 150%;
    padding-bottom: 35px;

    @include respond-to("medium") {
      font-size: 24px;
      line-height: 130%;
      padding-bottom: 50px;
    }
  }
}
</style>
