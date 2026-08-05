<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/" class="logo" aria-label="Farida Aghayeva — home">
        <span class="logo-mark">FA</span>
        <span class="logo-text">farida<span class="dim">.dev</span></span>
      </router-link>

      <nav class="tabs" aria-label="Primary">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="tab"
          :class="{ 'tab-active': route.path === link.to }"
        >
          <span class="tab-dot" aria-hidden="true"></span>
          {{ link.crumb }}
        </router-link>
      </nav>

      <button
        class="burger"
        :class="{ 'burger-open': open }"
        @click="open = !open"
        :aria-expanded="open"
        aria-label="Toggle navigation menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <transition name="drop">
      <nav v-if="open" class="mobile-panel" aria-label="Primary mobile">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="mobile-link"
          :class="{ 'mobile-link-active': route.path === link.to }"
        >
          <span class="tab-dot" aria-hidden="true"></span>
          {{ link.crumb }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const links = [
  { to: "/", crumb: "~/home" },
  { to: "/about", crumb: "~/about" },
  { to: "/experience", crumb: "~/experience" },
  { to: "/education", crumb: "~/education" },
  { to: "/awards", crumb: "~/awards" },
  { to: "/socials", crumb: "~/socials" },
  { to: "/contact", crumb: "~/contact" },
];

const route = useRoute();
const open = ref(false);

watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  height: var(--header-h);
  z-index: 100;
  background: rgba(247, 246, 252, 0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
  width: 100%;
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: min(100%, var(--container));
  margin: 0 auto;
  padding: 0 clamp(16px, 3vw, 24px);
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.logo-mark {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(135deg, var(--primary), var(--pink));
  box-shadow: 0 8px 18px -8px rgba(124, 111, 242, 0.6);
}

.logo-text {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 17px;
  letter-spacing: -0.01em;
}

.logo-text .dim {
  color: var(--muted-2);
  font-weight: 500;
}

.tabs {
  display: flex;
  align-items: center;
  gap: 2px;
  overflow-x: auto;
  scrollbar-width: none;
  padding: 0 4px;
}

.tabs::-webkit-scrollbar {
  display: none;
}

.tab {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);
  padding: 8px 13px;
  border-radius: var(--radius-s) var(--radius-s) 0 0;
  border-bottom: 2px solid transparent;
  transition:
    color 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease;
  white-space: nowrap;
}

.tab:hover {
  color: var(--ink);
  background: rgba(41, 40, 59, 0.04);
}

.tab-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--line-strong);
  transition: background 0.15s ease;
}

.tab-active {
  color: var(--primary-ink);
  border-bottom-color: var(--primary);
  background: var(--primary-soft);
}

.tab-active .tab-dot {
  background: var(--primary);
}

.burger {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--surface);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-shrink: 0;
}

.burger span {
  width: 18px;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.burger-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger-open span:nth-child(2) {
  opacity: 0;
}
.burger-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-panel {
  display: none;
}

@media (max-width: 980px) {
  .tabs {
    display: none;
  }

  .burger {
    display: flex;
  }

  .mobile-panel {
    display: flex;
    flex-direction: column;
    background: var(--bg-alt);
    border-bottom: 1px solid var(--line);
    padding: 10px clamp(16px, 4vw, 28px) 18px;
    gap: 2px;
  }

  .mobile-link {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 14.5px;
    color: var(--muted);
    padding: 12px 10px;
    border-radius: var(--radius-s);
  }

  .mobile-link-active {
    color: var(--primary-ink);
    background: var(--primary-soft);
  }

  .mobile-link-active .tab-dot {
    background: var(--primary);
  }
}

@media (max-width: 640px) {
  .header {
    height: auto;
  }

  .header-inner {
    min-height: var(--header-h);
    gap: 14px;
  }

  .logo-mark {
    width: 40px;
    height: 40px;
    font-size: 13px;
  }

  .logo-text {
    font-size: 18px;
  }

  .burger {
    width: 42px;
    height: 42px;
  }

  .mobile-panel {
    padding: 8px 16px 16px;
  }
}
.drop-enter-active,
.drop-leave-active {
  transition: all 0.2s ease;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
