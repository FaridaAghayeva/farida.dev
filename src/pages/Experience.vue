<template>
  <div class="page container">
    <span class="eyebrow">~/experience</span>
    <h1 class="section-title">Work experience</h1>
    <p class="section-lede">A timeline of roles, most recent first — each one hands-on with a different part of the stack.</p>

    <ol class="timeline">
      <li v-for="job in experience" :key="job.company + job.period" class="entry">
        <div class="rail">
          <span class="node" :class="{ 'node-current': job.current }"></span>
          <span class="line"></span>
        </div>

        <div class="card entry-card">
          <div class="entry-head">
            <div>
              <h3 class="entry-role">{{ job.role }}</h3>
              <p class="entry-company">{{ job.company }}</p>
              <p class="entry-location path">{{ job.location }}</p>
            </div>
            <span class="entry-period path" :class="{ 'entry-period-current': job.current }">
              {{ job.period }}
            </span>
          </div>

          <ul class="entry-points">
            <li v-for="p in job.points" :key="p">{{ p }}</li>
          </ul>

          <div class="entry-stack">
            <TechChip v-for="k in job.stack" :key="k" :tech-key="k" :label="techLabel[k]" />
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { experience } from "../data/resume";
import TechChip from "../components/TechChip.vue";

const techLabel = {
  vue: "Vue.js",
  react: "React",
  laravel: "Laravel",
  node: "Node / MERN",
  mongo: "MongoDB",
  ts: "TypeScript",
};
</script>

<style scoped lang="scss">
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.entry {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 22px;
}

.rail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.node {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--line-strong);
  flex-shrink: 0;
  margin-top: 6px;
}

.node-current {
  border-color: var(--primary);
  background: var(--primary);
  box-shadow: 0 0 0 5px var(--primary-soft);
}

.line {
  flex: 1;
  width: 2px;
  background: var(--line);
  margin-top: 6px;
}

.entry:last-child .line {
  display: none;
}

.entry-card {
  padding: 28px;
}

.entry-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.entry-role {
  font-size: 19px;
  margin-bottom: 4px;
}

.entry-company {
  color: var(--muted);
  font-size: 14.5px;
}

.entry-location {
  margin-top: 4px;
  font-size: 13px;
}

.entry-period {
  white-space: nowrap;
  color: var(--muted-2);
  padding-top: 4px;
}

.entry-period-current {
  color: var(--primary-ink);
}

.entry-points {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 20px;
  color: var(--ink);
  font-size: 15px;
}

.entry-points li {
  position: relative;
  padding-left: 18px;
}

.entry-points li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-soft);
  border: 1.5px solid var(--primary);
}

.entry-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 640px) {
  .entry {
    grid-template-columns: 20px 1fr;
    gap: 14px;
  }

  .entry-card {
    padding: 20px;
  }

  .entry-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .entry-period {
    padding-top: 0;
  }

  .entry-points {
    font-size: 14px;
  }
}
</style>
