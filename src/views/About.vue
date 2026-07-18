<script setup>
import { profile, featuredStack, skills, languages } from "../data/resume";
import TechChip from "../components/TechChip.vue";
</script>

<template>
  <div class="page container">
    <span class="eyebrow">~/about</span>
    <h1 class="section-title">About me</h1>
    <p class="section-lede">{{ profile.summary }}</p>

    <!-- Featured stack: the "eye-catching first" bit the toolbox used to bury -->
    <section class="featured">
      <p class="path featured-label">// what I build with, most</p>
      <div class="featured-row">
        <TechChip v-for="t in featuredStack" :key="t.key" :tech-key="t.key" :label="t.name" size="lg" />
      </div>
    </section>

    <!-- Full skills, grouped -->
    <section class="skills-grid grid">
      <div v-for="(items, category) in skills" :key="category" class="card skill-card">
        <h3 class="skill-cat">{{ category }}</h3>
        <div class="skill-chips">
          <TechChip v-for="s in items" :key="s.name" :tech-key="s.key" :label="s.name" />
        </div>
      </div>
    </section>

    <!-- Languages -->
    <section class="languages">
      <h3 class="skill-cat">Languages</h3>
      <div class="lang-row">
        <span v-for="l in languages" :key="l.name" class="lang-chip">
          {{ l.name }} <em v-if="l.note">— {{ l.note }}</em>
        </span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.featured {
  margin-bottom: 56px;
}

.featured-label {
  margin-bottom: 14px;
}

.featured-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.skills-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-bottom: 56px;
}

.skill-card {
  padding: 26px;
}

.skill-cat {
  font-size: 15px;
  font-family: var(--font-mono);
  color: var(--muted);
  margin-bottom: 16px;
  text-transform: lowercase;
}

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.languages {
  padding-top: 8px;
}

.lang-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}

.lang-chip {
  font-family: var(--font-mono);
  font-size: 13.5px;
  padding: 9px 16px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--ink);
}

.lang-chip em {
  color: var(--muted-2);
  font-style: normal;
}
</style>
