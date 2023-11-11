<script setup lang="ts">
import { learnMore } from "@/utils";
import PackageItem from "./PackageItem.vue";
</script>

<template>
  <section class="container packages-section">
    <div>
      <hr class="divider" />
      <h2 class="text-blue heading">Affordable Packages</h2>
      <p class="text-gray perex">
        <span class="text-gray">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </span>
      </p>
      <a href="#" class="learn-more-link" @click.prevent="learnMore"
        >Learn More</a
      >
    </div>
    <div class="items">
      <PackageItem
        heading="Certified Teacher"
        text="The gradual accumulation of information about"
        icon-name="012-blackboards"
      />
      <PackageItem
        heading="Expert instruction"
        text="The gradual accumulation of information about"
        icon-name="013-telescope-1"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.packages-section {
  display: flex;
  flex-direction: column;
  margin-block: clamp(2rem, 15vh, 10rem);

  @include breakpoint("lg") {
    flex-direction: row;
    gap: 2rem;
  }
}

.divider {
  width: 94px;
  margin-block-end: 2rem;
  border-top: 7px solid get-color("red");
}

.heading {
  margin-block-end: 0.8em;
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
}

.perex {
  margin-block-end: 2.5em;
  font-size: 0.9rem;
}

.learn-more-link {
  display: block;
  margin-block-end: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: get-color("green");

  &::after {
    display: inline-block;
    margin-inline-start: 0.5em;
    content: "\2192";
    transition: margin-inline-start 0.5s;
  }

  &:hover {
    color: get-color("blue");
    text-decoration: none;

    &::after {
      margin-inline-start: calc(0.5em + 5px);
    }
  }
}

.items {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
