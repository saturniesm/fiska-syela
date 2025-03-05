<script setup lang="ts">
import Me from '@/components/Me.vue'
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Project from '@/components/Project.vue'
import { nextTick, ref, watch } from 'vue'
import { useLayoutStore } from '@/stores/layout'

const aboutme = ref<HTMLElement | null>(null)
const experience = ref<HTMLElement | null>(null)
const project = ref<HTMLElement | null>(null)

const layoutStore = useLayoutStore()

const scrollTo = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

watch(
  () => layoutStore.navigation,
  (newVal) => {
    scrollTo(newVal)
  },
  { immediate: false },
)
</script>

<template>
  <main class="lg:grid lg:grid-cols-12 px-[6%] font-sans h-screen overflow-hidden">
    <section
      class="col-span-4 flex flex-col pt-[70%] h-[70vh] items-start justify-center gap-20 sticky top-1/2 -translate-y-1/2"
    >
      <Me />
    </section>
    <section class="col-span-8 flex flex-col overflow-y-auto h-screen pr-4">
      <About id="aboutme" />
      <Resume id="experience" />
      <Project id="project" />
    </section>
  </main>
</template>

<style lang="scss"></style>
