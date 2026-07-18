<script setup>
import { education } from "../data/resume";
</script>

<template>
  <div class="page container">
    <span class="eyebrow">~/education</span>
    <h1 class="section-title">Education & training</h1>
    <p class="section-lede">Formal study alongside focused, hands-on bootcamps — theory and practice, side by side.</p>

    <div class="grid edu-grid">
      <div v-for="e in education" :key="e.degree + e.period" class="card edu-card" :class="{ 'edu-current': e.current }">
        <div class="edu-top">
          <h3 class="edu-degree">{{ e.degree }}</h3>
          <span v-if="e.current" class="edu-badge">in progress</span>
        </div>
        <p class="edu-school">{{ e.school }}</p>
        <p class="path edu-period">{{ e.period }}</p>
        <p v-if="e.note" class="edu-note">{{ e.note }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edu-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.edu-card {
  padding: 28px;
}

.edu-current {
  border-color: var(--primary);
  box-shadow: var(--shadow-soft);
}

.edu-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
}

.edu-degree {
  font-size: 18px;
}

.edu-badge {
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--primary-ink);
  background: var(--primary-soft);
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.edu-school {
  color: var(--muted);
  margin-bottom: 6px;
}

.edu-period {
  margin-bottom: 12px;
}

.edu-note {
  font-size: 14.5px;
  color: var(--ink);
}
</style>
