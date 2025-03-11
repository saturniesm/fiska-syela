<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <h5 class="text-lg font-bold" :class="[layoutStore.navigationClass('text')]">LSM</h5>
    <p class="tracking-wide text-sm text-hint/80">
      This was my first major frontend project, where I worked hands-on with Nuxt. Beyond just
      coding, I gained a deep understanding of how frontend development truly works—not just writing
      components but structuring a scalable, maintainable system.
    </p>
    <p>
      <strong :class="[layoutStore.navigationClass('text')]">Some key lessons I learned:</strong>
    </p>
    <ul class="flex flex-col gap-2 text-sm">
      <li class="tracking-wide text-sm">
        ✅ <strong>Reactivity & State Management –</strong>
        <span class="text-hint/80">
          Understanding how state changes impact UI updates, reactivity, and when to use local vs.
          global state.</span
        >
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong>Mutation & Data Flow –</strong>
        <span class="text-hint/80">
          How changes propagate through components and how to manage reactivity efficiently.</span
        >
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong>Performance Optimization –</strong>
        <span class="text-hint/80">
          Minimizing unnecessary renders, optimizing API calls, and lazy loading.</span
        >
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong> Scalability & Structure –</strong>
        <span class="text-hint/80">
          Why a clear folder structure and reusable components matter for long-term
          maintainability.</span
        >
      </li>
    </ul>
    <p class="tracking-wide text-sm text-hint/80">
      This project shaped my approach to frontend development, teaching me how to think beyond just
      writing code and build systems that are scalable and efficient.
    </p>
  </div>
</template>

<style lang="scss"></style>