<script setup lang="ts">
import EmailInput from "./EmailInput.vue";
import { t } from "@/translations";
</script>

<template>
  <div class="bg-pink-light">
    <section class="container newsletter-section">
      <h6 class="text-green mini-heading">{{ t("newsletter.title") }}</h6>
      <h3 class="text-blue main-heading">{{ t("newsletter.heading") }}</h3>
      <p class="text-gray perex">
        {{ t("newsletter.text") }}
      </p>
      <EmailInput />
    </section>
  </div>
</template>

<style scoped lang="scss">
.newsletter-section {
  padding-block: clamp(2rem, 15vh, 10rem);
  text-align: center;
}

// @TODO all these styles are the same as those in LectrosSection - refactor
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
  margin-inline: auto;
  font-size: 0.9rem;
}
</style>
