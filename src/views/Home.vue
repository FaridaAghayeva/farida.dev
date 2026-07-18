<script setup>
import { ref } from "vue";
import profile from "../assets/profile.jpg";
import TechChip from "../components/TechChip.vue";
import { featuredStack } from "../data/resume.js";

const imgFailed = ref(false);
</script>

<template>
  <div class="page">
    <section class="hero container">
      <div class="hero-copy">
        <span class="eyebrow">~/home</span>
        <h1 class="hero-title">
          Hi, I'm <span class="accent">Farida</span> — a full-stack developer
          who builds with <span class="tag-vue">Vue</span>,
          <span class="tag-react">React</span> and
          <span class="tag-laravel">Laravel</span>.
        </h1>
        <p class="section-lede hero-lede">{{ profile.summary }}</p>

        <div class="hero-actions">
          <router-link to="/projects" class="btn btn-primary">View projects</router-link>
          <router-link to="/contact" class="btn btn-ghost">Get in touch</router-link>
        </div>

        <div class="hero-stack">
          <span class="path stack-label">// core stack</span>
          <div class="hero-chips">
            <TechChip v-for="t in featuredStack" :key="t.key" :tech-key="t.key" :label="t.name" size="lg" />
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="browser-frame">
          <div class="browser-bar">
            <span class="dot dot-1"></span>
            <span class="dot dot-2"></span>
            <span class="dot dot-3"></span>
            <span class="path browser-url">farida.dev</span>
          </div>
          <div class="photo-wrap">
            <img
              v-if="!imgFailed"
              :src="profile"
              alt="Portrait of Farida Aghayeva"
              @error="imgFailed = true"
            />
            <div v-else class="photo-fallback">
              <span>FA</span>
            </div>
          </div>
        </div>

        <TechChip tech-key="vue" label="Vue.js" class="float float-vue" size="lg" />
        <TechChip tech-key="react" label="React" class="float float-react" size="lg" />
        <TechChip tech-key="laravel" label="Laravel" class="float float-laravel" size="lg" />
        <TechChip tech-key="node" label="MERN" class="float float-node" size="lg" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
  min-height: calc(100vh - var(--header-h) - 140px);
}

.hero-title {
  font-size: clamp(32px, 4.4vw, 52px);
  margin-bottom: 20px;
}

.accent {
  color: var(--primary-ink);
}

.tag-vue {
  color: var(--vue);
}
.tag-react {
  color: var(--react);
}
.tag-laravel {
  color: var(--laravel);
}

.hero-lede {
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 46px;
}

.stack-label {
  display: block;
  margin-bottom: 12px;
}

.hero-chips {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* --- visual side: browser-window framed photo with floating chips --- */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.browser-frame {
  width: min(360px, 80vw);
  border-radius: var(--radius-l);
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
  position: relative;
  z-index: 2;
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}
.dot-1 {
  background: var(--laravel);
}
.dot-2 {
  background: #f2c94c;
}
.dot-3 {
  background: var(--vue);
}

.browser-url {
  margin-left: 8px;
}

.photo-wrap {
  aspect-ratio: 4 / 5;
  background: linear-gradient(155deg, var(--primary-soft), var(--pink-soft) 45%, var(--blue-soft));
}

.photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-fallback {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.photo-fallback span {
  font-family: var(--font-display);
  font-size: 64px;
  font-weight: 700;
  color: var(--primary-ink);
  opacity: 0.55;
}

.float {
  position: absolute;
  z-index: 3;
  box-shadow: var(--shadow-card);
  animation: bob 6s ease-in-out infinite;
}

.float-vue {
  top: 6%;
  left: -4%;
  animation-delay: 0s;
}
.float-react {
  top: 18%;
  right: -8%;
  animation-delay: 1.2s;
}
.float-laravel {
  bottom: 14%;
  left: -10%;
  animation-delay: 2.4s;
}
.float-node {
  bottom: 2%;
  right: -2%;
  animation-delay: 3.6s;
}

@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 64px;
  }
  .hero-visual {
    order: -1;
    padding: 20px 40px 60px;
  }
  .float {
    display: none;
  }
}
</style>
