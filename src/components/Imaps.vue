<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <h5 class="text-lg font-bold" :class="[layoutStore.navigationClass('text')]">IMAPS</h5>
    <p class="tracking-wide text-sm text-hint/80">
      Jumping into this project without any team experience in Angular meant I had to establish a
      solid, scalable code structure from scratch.
    </p>

    <p class="font-semibold" :class="[layoutStore.navigationClass('text')]">
      Setting Up a Scalable Codebase
    </p>

    <p class="tracking-wide text-sm text-hint/80">
      Before diving into development, I researched best practices for component structure and state
      management. The goal? A modular architecture where components and services could evolve
      without breaking existing functionality
    </p>

    <p>
      <strong :class="[layoutStore.navigationClass('text')]">Key Decisions I Made:</strong>
    </p>
    <ul class="flex flex-col gap-2 text-sm">
      <li class="tracking-wide text-sm">
        ✅ <strong class="text-hint">Modular Organization</strong>
        <span class="text-hint/80">
          – Structuring feature, shared, and lazy-loaded modules efficiently.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong class="text-hint">State Management</strong>
        <span class="text-hint/80"> – Using RxJS to create a reactive, scalable page store. </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong class="text-hint">API Handling</strong>
        <span class="text-hint/80">
          – Standardizing API calls, error handling, and request caching.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong class="text-hint">UI Component Strategy</strong>
        <span class="text-hint/80">
          – Knowing when to break UI into reusable components vs. keeping them within a page.
        </span>
      </li>
      <li class="tracking-wide text-sm">
        ✅ <strong class="text-hint">Code Standards</strong>
        <span class="text-hint/80">
          – Defining naming conventions, folder structures, and modularization rules for
          consistency.</span
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
