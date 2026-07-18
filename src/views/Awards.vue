<script setup>
import { computed } from "vue";
import { awards } from "../data/resume";

const list = computed(() => awards.filter((a) => a.type === "award"));
</script>

<template>
  <div class="page container">
    <span class="eyebrow">~/awards</span>
    <h1 class="section-title">Awards</h1>
    <p class="section-lede">Recognition from competitions and hackathons. Scholarships live on their own page.</p>

    <div class="grid award-grid">
      <div v-for="a in list" :key="a.title" class="card award-card">
        <span class="award-year">{{ a.year }}</span>
        <h3 class="award-title">{{ a.title }}</h3>
        <p class="award-org">{{ a.org }}</p>
      </div>
    </div>

    <p class="see-also">
      Looking for scholarships instead? <router-link to="/scholarships">See scholarships →</router-link>
    </p>
  </div>
</template>

<style scoped>
.award-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.award-card {
  padding: 28px;
  position: relative;
}

.award-year {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--primary-ink);
  background: var(--primary-soft);
  padding: 5px 12px;
  border-radius: 999px;
  display: inline-block;
  margin-bottom: 14px;
}

.award-title {
  font-size: 18px;
  margin-bottom: 6px;
}

.award-org {
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
