<script setup>
defineProps({
  techKey: { type: String, required: true },
  size: { type: Number, default: 18 },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- Vue: abstracted chevron/triangle mark -->
    <path
      v-if="techKey === 'vue'"
      d="M3 4h4.2L12 12l4.8-8H21l-9 15L3 4z"
      fill="currentColor"
    />
    <!-- React: orbiting rings around a nucleus -->
    <g v-else-if="techKey === 'react'" stroke="currentColor" stroke-width="1.6" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </g>
    <!-- Laravel: angular "L" facet -->
    <path
      v-else-if="techKey === 'laravel'"
      d="M5 3h3.4v10.2L17 8.4V3h3.4v14.4L8.4 21V13l-3.4 2V3z"
      fill="currentColor"
    />
    <!-- Node: hexagon outline -->
    <path
      v-else-if="techKey === 'node'"
      d="M12 2.5 20.5 7.3v9.4L12 21.5 3.5 16.7V7.3L12 2.5z"
      stroke="currentColor"
      stroke-width="1.7"
      fill="none"
    />
    <!-- Mongo: leaf / droplet -->
    <path
      v-else-if="techKey === 'mongo'"
      d="M12 2c3 4 5.5 8 5.5 12a5.5 5.5 0 0 1-11 0C6.5 10 9 6 12 2z"
      fill="currentColor"
    />
    <!-- TypeScript: bracket mark -->
    <path
      v-else
      d="M6 4h12v3.2h-4.4V20h-3.2V7.2H6V4z"
      fill="currentColor"
    />
  </svg>
</template>
