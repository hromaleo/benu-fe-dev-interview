<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import lectors from "./lectors";

const SocialNetworks = ["facebook", "instagram", "twitter"] as const;

const breakpoints = {
  576: {
    itemsToShow: 2,
  },
  768: {
    itemsToShow: 3,
  },
  992: {
    itemsToShow: 4,
  },
} as const;

function openSocialLink(
  link: (typeof SocialNetworks)[number],
  lectorName: (typeof lectors)[number]["name"]
) {
  alert(`Open ${link} of ${lectorName}`);
}
</script>

<template>
  <Carousel :items-to-show="1" :breakpoints="breakpoints">
    <Slide v-for="(lector, index) in lectors" :key="index" slide-width="238">
      <div class="lector">
        <img
          :src="`/assets/user-cover-${index + 1}.png`"
          :alt="`lector ${index + 1}`"
        />
        <h5 class="text-blue lector__name">{{ lector.name }}</h5>
        <small class="text-gray lector__position">{{ lector.position }}</small>
        <div class="lector__social-links">
          <div v-for="link in SocialNetworks" :key="link" class="icon-wrapper">
            <a
              href="#"
              target="_blank"
              @click.prevent="openSocialLink(link, lector.name)"
              ><img :src="`/assets/${link}.svg`" alt="" class="icon"
            /></a>
          </div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped lang="scss">
.lector {
  width: 238px;
  margin-block-end: 2rem;
  overflow: hidden;
  text-align: center;
  border-radius: 1.25em;
  box-shadow: 0 13px 19px 0 #00000012;

  &__name {
    margin-block: 2em 0.6em;
    font-size: 1rem;
    font-weight: 700;
  }

  &__position {
    margin-block: 0.6em;
    font-size: 0.75rem;
  }

  &__social-links {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    margin-block: 0.6em 2em;
  }
}

.icon {
  $size: 1.5rem;

  width: $size;
  height: $size;
  filter: invert(69%) sepia(32%) saturate(376%) hue-rotate(51deg)
    brightness(95%) contrast(90%); // hex-color-to-css-filter #000 to #96BA7B
}
</style>
