<script setup lang="ts">
import { TECHNOLOGY } from '@/constant/Navigation'

const projectList = [
  {
    id: TECHNOLOGY.LSM,
    label: 'LSM',
  },
  {
    id: TECHNOLOGY.SYGAP,
    label: 'Sygap',
  },
  {
    id: TECHNOLOGY.DIGI,
    label: 'Digipactum',
  },
  {
    id: TECHNOLOGY.IMAPS,
    label: 'IMAPS',
  },
  {
    id: TECHNOLOGY.GRANTHA,
    label: 'Grantha',
  },
  {
    id: TECHNOLOGY.EPROC,
    label: 'E-Procurement',
  },
]
</script>

<template>
  <section class="flex gap-1 w-full text-white">
    <nav class="w-1/4 -mx-10">
      <ul>
        <li v-for="project in projectList" :key="project.label" class="py-4 border-l px-4">
          <span>{{ project.label }}</span>
        </li>
      </ul>
    </nav>
    <article class="w-3/4"></article>
  </section>
</template>

<style lang="scss"></style>
