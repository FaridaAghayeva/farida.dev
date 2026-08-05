<template>
  <span
    class="chip"
    :class="size === 'lg' ? 'chip-lg' : ''"
    :style="{ color: colors.fg, background: colors.bg }"
  >
    <TechIcon :tech-key="techKey" :size="size === 'lg' ? 20 : 15" />
    {{ label }}
  </span>
</template>

<script setup>
import TechIcon from "./TechIcon.vue";
import { techColors } from "../data/techColors";

const props = defineProps({
  techKey: { type: String, required: true },
  label: { type: String, required: true },
  size: { type: String, default: "md" },
});

const colors = techColors[props.techKey] || techColors.ts;
</script>

<style scoped lang="scss">
.chip-lg {
  font-size: 15px;
  padding: 11px 20px;
  font-weight: 600;
  gap: 10px;
}
</style>
