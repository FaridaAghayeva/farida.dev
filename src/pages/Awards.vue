<template>
  <div class="page container">
    <span class="eyebrow">~/awards</span>
    <h1 class="section-title">Awards & Scholarships</h1>
    <p class="section-lede">Recognition from competitions, hackathons and funded study opportunities — all gathered in one place.</p>

    <div class="grid schol-grid">
      <div v-for="item in list" :key="item.title" class="card schol-card">
        <span class="schol-year">{{ item.year }}</span>
        <h3 class="schol-title">{{ item.title }}</h3>
        <p class="schol-org">{{ item.org }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { awards } from "../data/resume";

const list = computed(() => awards);
</script>

<style scoped lang="scss">
.schol-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.schol-card {
  padding: 28px;
  border-left: 3px solid var(--pink);
}

@media (max-width: 640px) {
  .schol-grid {
    grid-template-columns: 1fr;
  }

  .schol-card {
    padding: 22px;
  }
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
</style>
