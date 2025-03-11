<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <h5 class="text-lg font-bold" :class="[layoutStore.navigationClass('text')]">Grantha</h5>
    <p class="tracking-wide text-sm text-hint/80">
      My contribution to Grantha was small but focused on improving the system's functionality and
      stability. I worked on:
    </p>
    <ul class="flex flex-col gap-2 text-sm">
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80">
          Supporting AI extraction features by ensuring the frontend properly displayed extracted
          data.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80">
          Handling document blurring to maintain privacy and compliance.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅
        <span class="text-hint/80">
          Fixing various bugs to enhance system performance and user experience.
        </span>
      </li>
    </ul>
    <p class="tracking-wide text-sm text-hint/80">
      While I didn’t work directly with the AI models, this project gave me insight into AI-powered
      document processing and strengthened my ability to refine and optimize existing systems.
    </p>
  </div>
</template>

<style lang="scss"></style>
