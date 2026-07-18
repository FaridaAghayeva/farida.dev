<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div class="app-shell">
    <div class="bg-mesh" aria-hidden="true"></div>
    <AppHeader />
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  min-height: 100vh;
}

.bg-mesh {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(600px 400px at 8% 0%, var(--primary-soft) 0%, transparent 60%),
    radial-gradient(500px 380px at 95% 15%, var(--pink-soft) 0%, transparent 55%),
    radial-gradient(650px 450px at 50% 100%, var(--blue-soft) 0%, transparent 55%);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
