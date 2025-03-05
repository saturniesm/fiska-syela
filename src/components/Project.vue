<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'
import { PROJECT } from '@/constant/Navigation'
import type { Project } from '@/types/layout'
import Desc from './Desc.vue'
import Tech from './Tech.vue'

const layoutStore = useLayoutStore()

const navs = [
  {
    id: PROJECT.PROJECT,
    label: 'Project Description',
  },
  {
    id: PROJECT.DESC,
    label: 'Technology Description',
  },
]
</script>

<template>
  <div class="px-16 flex flex-col gap-12 py-16">
    <div class="flex gap-8 text-sm">
      <button
        v-for="nav in navs"
        type="button"
        class="px-5 py-2 rounded-full border focus:outline-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        :class="[
          layoutStore.project === nav.id
            ? layoutStore.navigationClass('bg-transparant')
            : 'bg-rock/30',
          layoutStore.project === nav.id ? layoutStore.navigationClass('border') : 'border-rock',
        ]"
        :aria-pressed="nav.id === layoutStore.navigation"
        @click="layoutStore.setProject(nav.id as Project)"
      >
        <span
          :class="[
            layoutStore.project === nav.id ? layoutStore.navigationClass('text') : 'text-hint/60',
          ]"
          >{{ nav.label }}</span
        >
      </button>
    </div>
    <Desc v-if="layoutStore.project === PROJECT.PROJECT" />
    <Tech v-else-if="layoutStore.project === PROJECT.DESC" />
  </div>
</template>

<style lang="scss"></style>
