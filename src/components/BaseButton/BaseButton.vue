<script setup lang="ts">
type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant: ButtonVariant;
  inverted?: boolean;
  onClick: () => void;
};

const props = defineProps<ButtonProps>();

function getVariantClasses(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return props.inverted ? "text-green bg-white" : "bg-green text-white";
    case "secondary":
      return props.inverted ? "text-pink bg-white" : "bg-pink text-white";
  }
}
</script>

<template>
  <button
    :class="[
      'btn',
      getVariantClasses(props.variant),
      { 'btn--inverted': props.inverted },
    ]"
    @click="props.onClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 15px 25px;
  border: none;
  border-radius: 5px;

  &--inverted {
    border: 1px solid currentcolor;
  }
}
</style>
