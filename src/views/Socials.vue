<script setup>
import { socials } from "../data/resume";
</script>

<template>
  <div class="page container">
    <span class="eyebrow">~/socials</span>
    <h1 class="section-title">Find me elsewhere</h1>
    <p class="section-lede">Code, career updates, and the fastest way to reach me.</p>

    <div class="grid social-grid">
      <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" class="card social-card">
        <span class="social-name">{{ s.name }}</span>
        <span class="path social-handle">{{ s.handle }}</span>
        <span class="social-arrow">↗</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.social-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.social-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 26px;
  position: relative;
  transition: transform 0.18s ease, border-color 0.18s ease;
}

.social-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}

.social-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
}

.social-handle {
  color: var(--muted);
}

.social-arrow {
  position: absolute;
  top: 22px;
  right: 22px;
  color: var(--primary-ink);
  font-size: 18px;
}
</style>
