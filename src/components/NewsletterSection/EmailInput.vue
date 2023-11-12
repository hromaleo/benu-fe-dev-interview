<script setup lang="ts">
import { t } from "@/translations";
import BaseButton from "../BaseButton";
import { ref, computed } from "vue";

const email = ref("");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isValid = computed(() => emailPattern.test(email.value));
const isEmpty = computed(() => !email.value);

const displayError = ref(false);

function submit() {
  if (!isValid.value) {
    displayError.value = true;
    return;
  }
  alert("Thank you for subscribing!");
}
</script>

<template>
  <div class="e-mail">
    <input
      v-model="email"
      type="email"
      :class="{
        'e-mail__input': true,
        'e-mail__input--invalid': !isEmpty && !isValid,
      }"
      :placeholder="t('newsletter.emailInput.placeholder')"
      @input="displayError = false"
    />
    <BaseButton class="e-mail__button" variant="primary" :on-click="submit">
      {{ t("newsletter.emailInput.button") }}
    </BaseButton>
  </div>
  <div
    :class="{
      error: true,
      'error--visible': !isEmpty && !isValid && displayError,
    }"
  >
    {{ t("newsletter.emailInput.error") }}
  </div>
</template>

<style scoped lang="scss">
.e-mail {
  display: flex;
  width: 100%;
  max-width: 686px;
  height: 58px;
  margin-inline: auto;

  &__input {
    width: 100%;
    height: 100%;
    padding: 15px 20px;
    color: get-color("blue");
    border: 1px solid get-color("gray");
    border-radius: 5px 0 0 5px;
    outline: none;

    &::placeholder {
      color: get-color("gray");
    }

    &:not(&--invalid) {
      &:focus {
        border-color: get-color("blue");
      }
    }

    &--invalid {
      border-color: get-color("red");
    }
  }

  &__button {
    max-width: 117px;
    height: 100%;
    border-radius: 0 5px 5px 0; // intentionally overriding BaseButton's border-radius
  }
}

.error {
  position: absolute;
  left: 50%;
  display: none;
  margin-top: 1em;
  font-size: 0.8rem;
  color: get-color("red");
  transform: translateX(-50%);

  &--visible {
    display: block;
  }
}
</style>
