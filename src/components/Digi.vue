<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex flex-col gap-4 w-full tracking-wide">
    <h5 class="text-lg font-bold" :class="[layoutStore.navigationClass('text')]">Digipactum</h5>
    <p class="text-justify text-sm text-hint/80">
      Working on Digipactum, I faced the challenge of building a fully dynamic frontend driven by a
      configuration database. Unlike typical applications where components and UI elements are
      predefined, Digipactum required everything—inputs, buttons, events, and even entire
      components—to be rendered dynamically based on stored configurations.
    </p>

    <p>
      <strong :class="[layoutStore.navigationClass('text')]">
        To tackle this, I focused on:
      </strong>
    </p>
    <ul class="flex flex-col gap-2 text-sm">
      <li>
        ✅
        <span class="text-hint/80">
          Developing a flexible frontend architecture capable of interpreting and rendering
          different components dynamically.</span
        >
      </li>
      <li>
        ✅
        <span class="text-hint/80">
          Ensuring input fields, button behaviors, and UI structures adapted seamlessly to changing
          configurations.</span
        >
      </li>
      <li>
        ✅
        <span class="text-hint/80"
          >Implementing an event-handling system that allowed buttons and actions to trigger
          different functionalities based on the config.</span
        >
      </li>
      <li>
        ✅
        <span class="text-hint/80"
          >Optimizing performance to handle complex, dynamic UI changes without slowing down the
          application.</span
        >
      </li>
    </ul>

    <p class="text-justify text-sm text-hint/80">
      This project pushed me to think beyond static UI development and build a frontend that could
      essentially construct itself in real-time based on data, reinforcing my ability to create
      adaptive, scalable, and maintainable applications.
    </p>
  </div>
</template>

<style lang="scss"></style>
