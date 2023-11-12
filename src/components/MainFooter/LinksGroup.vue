<script setup lang="ts">
type LinkItem = {
  label: string;
  href: string;
  icon?: string;
};

type LinksGroupProps = {
  title: string;
  items: LinkItem[];
};

const props = defineProps<LinksGroupProps>();
</script>

<template>
  <div class="links-group">
    <h5 class="links-group__title">{{ props.title }}</h5>
    <ul class="links-group__items">
      <li
        v-for="item in props.items"
        :key="item.label"
        class="links-group__item"
      >
        <img
          v-if="item.icon"
          :src="`/assets/${item.icon}.svg`"
          alt=""
          class="icon"
        />
        <RouterLink :to="item.href">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.links-group {
  display: flex;
  flex-direction: column;
  min-width: 150px;

  &__title {
    margin-block-end: 1.25em;
    font-size: 1rem;
    font-weight: 700;
    color: get-color("blue");
  }

  &__items {
    padding-inline-start: 0;
    margin-block: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    margin-block-end: 0.8em;
    font-size: 0.9rem;
    color: get-color("gray");

    img {
      $size: 1.8rem;

      width: $size;
      height: $size;
      margin-inline-end: 0.8em;
      filter: invert(69%) sepia(32%) saturate(376%) hue-rotate(51deg)
        brightness(95%) contrast(90%); // hex-color-to-css-filter #000 to #96BA7B
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: get-color("blue");
        text-decoration: underline;
      }
    }
  }
}
</style>
