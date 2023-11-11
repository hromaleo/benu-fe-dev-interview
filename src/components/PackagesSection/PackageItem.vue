<script setup lang="ts">
type PackageItemProps = {
  heading: string;
  text: string;
  iconName: string;
};

const props = defineProps<PackageItemProps>();
</script>

<template>
  <div class="package-item">
    <div class="icon-wrapper">
      <img :src="`/assets/${props.iconName}.svg`" alt="" class="icon" />
    </div>
    <h5 class="text-blue heading">{{ props.heading }}</h5>
    <hr class="divider" />
    <p class="text-gray perex">
      <span class="text-gray">{{ props.text }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.package-item {
  padding: 2.5em 2em;
  cursor: pointer;
  box-shadow: 0 13px 19px 0 #00000012;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05); // @TODO fix rendering quality during transition
  }

  @include breakpoint("md") {
    padding: 2.5em 3.5em 2.5em 2em;
  }
}

.icon-wrapper {
  display: inline-block;
  padding: 22px 19px;
  margin-block-end: 1.25rem;
  background-color: get-color("green");
  border-radius: 10px;
}

.icon {
  $size: 2rem;

  width: $size;
  height: $size;
  filter: invert(100%); // hex-color-to-css-filter #000 to #fff
}

.heading {
  margin-block-end: 0.8em;
  font-size: 1rem;
  font-weight: 700;
}

.divider {
  width: 50px;
  margin-block: 1.25rem;
  border-top: 2px solid get-color("red");
}

.perex {
  font-size: 0.9rem;
}
</style>
