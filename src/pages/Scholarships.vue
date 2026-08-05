<template>
  <div class="page container">
    <span class="eyebrow">~/scholarships</span>
    <h1 class="section-title">Scholarships</h1>
    <p class="section-lede">Funded study and merit-based support I've received along the way.</p>

    <div class="grid schol-grid">
      <div v-for="s in list" :key="s.title" class="card schol-card">
        <span class="schol-year">{{ s.year }}</span>
        <h3 class="schol-title">{{ s.title }}</h3>
        <p class="schol-org">{{ s.org }}</p>
      </div>
    </div>

    <p class="see-also">
      Looking for competition wins instead? <router-link to="/awards">See awards →</router-link>
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { awards } from "../data/resume";

const list = computed(() => awards.filter((a) => a.type === "scholarship"));
</script>

<style scoped lang="scss">
.schol-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.schol-card {
  padding: 28px;
  border-left: 3px solid var(--pink);
}

.schol-year {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--pink);
  background: var(--pink-soft);
  padding: 5px 12px;
  border-radius: 999px;
  display: inline-block;
  margin-bottom: 14px;
}

.schol-title {
  font-size: 18px;
  margin-bottom: 6px;
}

.schol-org {
  color: var(--muted);
  font-size: 14.5px;
}

.see-also {
  margin-top: 44px;
  color: var(--muted);
  font-size: 14.5px;
}

.see-also a {
  color: var(--primary-ink);
  font-weight: 600;
}
</style>
