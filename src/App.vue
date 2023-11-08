<script setup lang="ts">
import { RouterView } from "vue-router";

const NavItems = [
  { name: "home" },
  { name: "product" },
  { name: "pricing" },
  { name: "contact" },
] as const;
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="(item, index) in NavItems" :key="index">
          <RouterLink :to="item">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: $color-gray;
}
</style>
