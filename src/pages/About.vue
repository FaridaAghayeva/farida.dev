<template>
  <div class="page container">
    <span class="eyebrow">~/about</span>
    <h1 class="section-title">About me</h1>
    <p class="section-lede">{{ profile.summary }}</p>

    <section class="featured">
      <p class="path featured-label">// what I build with, most</p>
      <div class="featured-row">
        <TechChip v-for="t in featuredStack" :key="t.key" :tech-key="t.key" :label="t.name" size="lg" />
      </div>
    </section>

    <section class="skills-grid grid">
      <div v-for="(items, category) in skills" :key="category" class="card skill-card">
        <h3 class="skill-cat">{{ category }}</h3>
        <div class="skill-chips">
          <TechChip v-for="s in items" :key="s.name" :tech-key="s.key" :label="s.name" />
        </div>
      </div>
    </section>

    <section class="languages">
      <h3 class="skill-cat">Languages</h3>
      <div class="lang-row">
        <span v-for="l in languages" :key="l.name" class="lang-chip">
          {{ l.name }} <em v-if="l.note">— {{ l.note }}</em>
        </span>
      </div>
    </section>

    <section class="resume-card card">
      <div class="resume-copy">
        <p class="path">// resume</p>
        <h3 class="skill-cat">Download my resume</h3>
        <p class="section-lede">For a concise downloadable overview of my background, experience, and stack, you can save my latest resume here.</p>
      </div>
      <a :href="profile.resumeUrl" download class="btn btn-primary">Download CV</a>
    </section>
  </div>
</template>

<script setup>
import { profile, featuredStack, skills, languages } from "../data/resume.js";
import TechChip from "../components/TechChip.vue";
</script>

<style scoped lang="scss">
.resume-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 26px;
  margin-top: 56px;
}

.resume-copy {
  max-width: 700px;
}

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

@media (max-width: 640px) {
  .resume-card {
    flex-direction: column;
    align-items: stretch;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    padding: 20px;
  }

  .skill-chips,
  .lang-row,
  .featured-row {
    gap: 8px;
  }

  .lang-chip {
    width: 100%;
    text-align: center;
  }
}
</style>
