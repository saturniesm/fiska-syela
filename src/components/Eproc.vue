<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <h5 class="text-lg font-semibold" :class="[layoutStore.navigationClass('text')]">
      E-Procurement
    </h5>
    <p class="tracking-wide text-sm text-hint/80">
      The hardest challenge was building a scalable project under a tight deadline as the sole
      developer—I had to build 12 core modules in 4 months. To speed up development, I:
    </p>
    <ul class="flex flex-col gap-2 text-sm">
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80">
          Defined a clear structure from the start to avoid refactoring.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80"
          >Used UI libraries (Ant Design, Daisy UI, Tailwind) to reduce design time.</span
        >
      </li>
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80">
          Optimized state management with the simplest effective solution.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80">
          Leveraged reusable components to minimize redundant work.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80">
          Automated repetitive tasks with scripts and linting tools.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80"> Focused on MVP first, then iterated for improvements. </span>
      </li>
    </ul>
    <p class="tracking-wide text-sm text-hint/80">
      This approach helped me deliver quickly without sacrificing scalability.
    </p>
  </div>
</template>

<style lang="scss"></style>
