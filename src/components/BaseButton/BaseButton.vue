<script setup lang="ts">
type ButtonVariant = "primary" | "secondary" | "transparent";

type BaseButtonProps = {
  variant: ButtonVariant;
  inverted?: boolean;
  onClick: () => void;
};

const props = defineProps<BaseButtonProps>();

function getVariantClasses(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return props.inverted
        ? "text-green bg-pink-light"
        : "bg-green text-white";
    case "secondary":
      return props.inverted
        ? "text-pink-light bg-pink-light"
        : "bg-pink-light text-white";
    case "transparent":
      return "text-green bg-transparent";
  }
}
</script>

<template>
  <button
    type="button"
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
  padding: 1em 1.5em;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &--inverted {
    border: 1px solid currentcolor;

    &:hover,
    &:focus {
      opacity: 0.4;
    }
  }

  &:not(&--inverted) {
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
}
</style>
