<script setup lang="ts">
import { TECHNOLOGY } from '@/constant/Navigation'
import { useLayoutStore } from '@/stores/layout'
import type { TechNav } from '@/types/layout'
import LSM from './LSM.vue'
import Sygap from './Sygap.vue'
import Digi from './Digi.vue'
import Eproc from './Eproc.vue'
import Imaps from './Imaps.vue'
import Grantha from './Grantha.vue'

import { ref } from 'vue'

const layoutStore = useLayoutStore()

const actNavigation = ref(TECHNOLOGY.LSM)

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

const setActiveNavigation = (nav: TechNav) => {
  actNavigation.value = nav
}
</script>

<template>
  <section class="flex gap-12 w-full text-white text-sm">
    <nav class="w-1/4 -mx-10">
      <ul>
        <li
          v-for="project in projectList"
          :key="project.label"
          class="py-3 px-6 border-l-2 border-hint/20 hover:border-l-2"
          :class="[
            layoutStore.navigationClass('border-hover'),
            actNavigation === project.id ? layoutStore.navigationClass('border') : '',
          ]"
          @click="setActiveNavigation(project.id as TechNav)"
        >
          <span
            :class="[actNavigation === project.id ? layoutStore.navigationClass('text') : '']"
            >{{ project.label }}</span
          >
        </li>
      </ul>
    </nav>
    <article class="w-full">
      <LSM v-if="actNavigation === TECHNOLOGY.LSM" />
      <Sygap v-else-if="actNavigation === TECHNOLOGY.SYGAP" />
      <Digi v-else-if="actNavigation === TECHNOLOGY.DIGI" />
      <Eproc v-else-if="actNavigation === TECHNOLOGY.EPROC" />
      <Imaps v-else-if="actNavigation === TECHNOLOGY.IMAPS" />
      <Grantha v-else-if="actNavigation === TECHNOLOGY.GRANTHA" />
    </article>
  </section>
</template>

<style lang="scss"></style>
