<template>
  <div class="page container">
    <span class="eyebrow">~/projects</span>
    <h1 class="section-title">Projects</h1>
    <p class="section-lede">
      A sample of what I've shipped — swap these in for your real case studies any time; the data lives in
      <code class="path">src/data/resume.js</code>.
    </p>

    <div class="grid proj-grid">
      <a v-for="p in projects" :key="p.title" :href="p.link" target="_blank" rel="noopener" class="card proj-card">
        <div class="proj-stack">
          <TechChip v-for="k in p.stack" :key="k" :tech-key="k" :label="techLabel[k]" />
        </div>
        <h3 class="proj-title">{{ p.title }}</h3>
        <p class="proj-desc">{{ p.description }}</p>
        <span class="proj-link path">view on github →</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { projects } from "../data/resume";
import TechChip from "../components/TechChip.vue";

const techLabel = {
  vue: "Vue.js",
  react: "React",
  laravel: "Laravel",
  node: "Node.js",
  mongo: "MongoDB",
  ts: "TypeScript",
};
</script>

<style scoped lang="scss">
.proj-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.proj-card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

@media (max-width: 640px) {
  .proj-grid {
    grid-template-columns: 1fr;
  }

  .proj-card {
    padding: 22px;
  }
}
.proj-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-soft);
  border-color: var(--primary);
}

.proj-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.proj-title {
  font-size: 19px;
  margin-bottom: 10px;
}

.proj-desc {
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 20px;
  flex: 1;
}

.proj-link {
  color: var(--primary-ink);
}
</style>
