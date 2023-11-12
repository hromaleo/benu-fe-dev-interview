<script setup lang="ts">
import LinksGroup from "./LinksGroup.vue";
import links from "./links";
</script>

<template>
  <footer class="container footer">
    <LinksGroup
      v-for="group in links"
      :key="group.title"
      :title="group.title"
      :items="group.items"
    />
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-block: 3rem;
}
</style>
