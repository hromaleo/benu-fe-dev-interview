<script setup lang="ts">
import BaseButton from "../BaseButton";

const NavItems = [
  { name: "home" },
  { name: "product" },
  { name: "pricing" },
  { name: "contact" },
] as const;

function getItemTitle(name: (typeof NavItems)[number]["name"]) {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

function performLogin() {
  alert("Login");
}

function performRegistration() {
  alert("Registration");
}
</script>

<template>
  <div class="bg-pink-light">
    <div class="container">
      <header class="main-header">
        <h2 class="text-blue brandname">Brandname</h2>
        <nav>
          <ul class="nav-list">
            <li
              v-for="(item, index) in NavItems"
              :key="index"
              class="nav-list__item"
            >
              <RouterLink :to="item">
                {{ getItemTitle(item.name) }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div class="controls">
          <button
            class="login-btn text-green"
            @click="performLogin"
            v-text="'Login'"
          />
          <BaseButton
            variant="primary"
            class="register-btn"
            :on-click="performRegistration"
          >
            Join Us
          </BaseButton>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-header {
  display: flex;
  align-items: center;
  padding: 1rem;

  @include breakpoint("lg") {
    padding: 1rem 4rem;
  }
}

.brandname {
  writing-mode: vertical-rl;
  transform: rotate(180deg);

  @include breakpoint("sm") {
    writing-mode: unset;
    transform: unset;
  }
}

.nav-list,
.controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-list {
  gap: 21px;
  padding: 0 2.5rem;

  &__item {
    color: get-color("gray");
    list-style: none;

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

.controls {
  gap: 45px;
  margin-left: auto;
}

.login-btn {
  appearance: none;
  background: none;
  border: none;
}

.login-btn,
.register-btn {
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
