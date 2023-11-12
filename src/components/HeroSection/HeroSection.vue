<script setup lang="ts">
import { inject } from "vue";
import BaseButton from "../BaseButton";
import { learnMore, performRegistration } from "@/utils";
import headerHeightKey from "@/headerProviderKey";
import { t } from "@/translations";

const headerHeight = inject(headerHeightKey);
</script>

<template>
  <section class="hero-background">
    <div class="container">
      <div class="hero-content">
        <h5 class="text-green">{{ t("hero.welcome") }}</h5>
        <h1 class="text-blue bfh">{{ t("hero.heading") }}</h1>
        <p class="text-gray perex">
          <span class="bg-pink-light">{{ t("hero.subheading") }}</span>
        </p>
        <div class="controls">
          <BaseButton variant="primary" :on-click="performRegistration">
            {{ t("register") }}
          </BaseButton>
          <BaseButton variant="primary" inverted :on-click="learnMore">
            {{ t("learnMore") }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-background {
  background: url("/assets/hero-cover-1.png") get-color("pink-light") no-repeat
    right bottom/contain;
}

.hero-content {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - v-bind("headerHeight") * 1px);

  @include breakpoint("lg") {
    justify-content: center;
    padding-inline-end: 50%;
  }
}

.bfh {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
}

.perex {
  font-size: 1.25rem;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
