<script setup lang="ts"></script>

<template>
  <section class="container lectors-section">
    <h6 class="text-green mini-heading">Team</h6>
    <h3 class="text-blue main-heading">Get Quality Education</h3>
    <p class="text-gray perex">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </p>
  </section>
</template>

<style scoped lang="scss">
.lectors-section {
  margin-block: clamp(2rem, 15vh, 10rem);
}

.mini-heading {
  margin-block-end: 0.7em;
  font-size: 0.9rem;
  font-weight: 700;
}

.main-heading {
  margin-block-end: 0.4em;
  font-size: clamp(1rem, 5vw, 1.5rem);
  font-weight: 700;
}

.perex {
  max-width: 500px;
  margin-block-end: 8em;
  font-size: 0.9rem;
}
</style>
