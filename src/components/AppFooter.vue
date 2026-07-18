<script setup>
import { profile, socials } from "../data/resume";
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <p class="footer-name">{{ profile.name }}</p>
        <p class="path">{{ profile.location }}</p>
      </div>

      <ul class="footer-links">
        <li v-for="s in socials" :key="s.name">
          <a :href="s.url" target="_blank" rel="noopener">{{ s.name }}</a>
        </li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <p class="footer-note path">© {{ year }} — built with Vue 3</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  background: var(--bg-alt);
  padding: 40px 0;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-name {
  font-family: var(--font-display);
  font-weight: 600;
  margin-bottom: 4px;
}

.footer-links {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  font-size: 14px;
  color: var(--muted);
}

.footer-links a:hover {
  color: var(--primary-ink);
}

.footer-note {
  color: var(--muted-2);
}
</style>
