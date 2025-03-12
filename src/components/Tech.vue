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
  <section class="flex lg:flex-row flex-col gap-4 lg:gap-8 w-full text-white text-sm">
    <nav class="w-1/4 lg:block hidden">
      <ul>
        <li
          v-for="project in projectList"
          :key="project.label"
          class="py-3 pl-6 pr-3 group border-l-2 border-hint/20 hover:border-l-2"
          :class="[
            layoutStore.navigationClass('border-hover'),
            actNavigation === project.id ? layoutStore.navigationClass('border') : '',
          ]"
          @click="setActiveNavigation(project.id as TechNav)"
        >
          <span
            class="shrink-0 min-w-fit small-scale-hover whitespace-nowrap"
            :class="[
              actNavigation === project.id ? layoutStore.navigationClass('text') : '',
              actNavigation === project.id ? 'font-semibold' : '',
              layoutStore.navigationClass('text-group-hover'),
            ]"
            >{{ project.label }}</span
          >
        </li>
      </ul>
    </nav>

    <nav class="lg:hidden block w-full">
      <ul class="flex max-w-[90vw] lg:max-w-[28rem] overflow-x-auto">
        <li
          v-for="project in projectList"
          :key="project.label"
          @click="setActiveNavigation(project.id as TechNav)"
          class="group border-b-2 pb-1"
          :class="[
            actNavigation === project.id
              ? layoutStore.navigationClass('underline')
              : 'border-hint/20',
          ]"
        >
          <span
            class="shrink-0 whitespace-nowrap min-w-max small-scale-hover text-hint/40 transition-colors duration-400 px-2"
            :class="[
              actNavigation === project.id ? layoutStore.navigationClass('text') : '',
              actNavigation === project.id ? 'font-semibold' : '',
              layoutStore.navigationClass('text-group-hover'),
            ]"
          >
            {{ project.label }}
          </span>
        </li>
      </ul>
    </nav>

    <article class="w-full lg:min-h-[28rem]">
      <Transition name="fade" mode="out-in">
        <LSM v-if="actNavigation === TECHNOLOGY.LSM" />
        <Sygap v-else-if="actNavigation === TECHNOLOGY.SYGAP" />
        <Digi v-else-if="actNavigation === TECHNOLOGY.DIGI" />
        <Eproc v-else-if="actNavigation === TECHNOLOGY.EPROC" />
        <Imaps v-else-if="actNavigation === TECHNOLOGY.IMAPS" />
        <Grantha v-else-if="actNavigation === TECHNOLOGY.GRANTHA" />
      </Transition>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
