<script setup lang="ts">
import LectorsCarousel from "./LectorsCarousel.vue";
import { t } from "@/translations";
</script>

<template>
  <section class="container lectors-section">
    <h6 class="text-green mini-heading">{{ t("team") }}</h6>
    <h3 class="text-blue main-heading">{{ t("lectors.heading") }}</h3>
    <p class="text-gray perex">
      {{ t("lectors.text") }}
    </p>
    <LectorsCarousel />
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
