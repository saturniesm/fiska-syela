<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <h5 class="text-lg font-semibold" :class="[layoutStore.navigationClass('text')]">Sygap</h5>
    <p class="tracking-wide text-sm text-hint/80">
      This project was more than just writing code—I built a Vue.js boilerplate to standardize
      structure and boost development efficiency. By setting clear coding standards, I ensured
      consistency and maintainability across the team.
    </p>
    <p>
      <strong :class="[layoutStore.navigationClass('text')]"> Key takeaways: </strong>
    </p>
    <ul class="flex flex-col gap-2 text-sm">
      <li class="tracking-wide text-sm">
        ✅ <strong>Scalability –</strong>
        <span class="text-hint/80">
          Designed reusable components and modular architecture for long-term efficiency.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong>Performance –</strong>
        <span class="text-hint/80">
          Optimized rendering, API handling, and UI interactions using Vue.js & Tailwind CSS.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong>Code Quality–</strong>
        <span class="text-hint/80">
          Implemented unit tests to prevent regressions and maintain reliability.
        </span>
      </li>
    </ul>
    <p class="tracking-wide text-sm text-hint/80">
      This experience taught me to think beyond features—building systems that last.
    </p>
  </div>
</template>

<style lang="scss"></style>
