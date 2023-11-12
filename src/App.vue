<script setup lang="ts">
import MainHeader from "@/components/MainHeader";
import { onMounted, onUnmounted, provide, ref } from "vue";
import headerHeightKey from "@/headerProviderKey";
import { useRoute } from "vue-router";
import { i18n } from "@/translations";

const {
  params: { lang },
} = useRoute();

function isSupportedLocale(locale: string): locale is "cs" | "en" {
  return ["cs", "en"].includes(locale);
}

const langCode = lang?.toString();
if (langCode && isSupportedLocale(langCode)) {
  i18n.global.locale = langCode;
}

const header = ref<HTMLElement>();

const headerHeight = ref<number>(0);
provide(headerHeightKey, headerHeight);

function calculateHeaderHeight() {
  headerHeight.value = header.value?.offsetHeight ?? 0;
}

function handleResize() {
  calculateHeaderHeight();
}

onMounted(() => {
  calculateHeaderHeight();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div ref="header">
    <MainHeader />
  </div>

  <RouterView />
</template>
