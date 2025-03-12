<script setup lang="ts">
import Me from '@/components/Me.vue'
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Project from '@/components/Project.vue'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import type { Navigation } from '@/types/layout'

const aboutme = ref<HTMLElement | null>(null)
const experience = ref<HTMLElement | null>(null)
const project = ref<HTMLElement | null>(null)

const cursorX = ref<number>(0)
const cursorY = ref<number>(0)
const cursorVisible = ref<boolean>(true)

const layoutStore = useLayoutStore()

const autoSelectSection = () => {
  const sections = document.querySelectorAll('#layoutNav > section')

  if (!sections.length) {
    console.error('No sections found! Check your HTML structure.')
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSection = null

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id
        }
      })

      if (visibleSection) {
        layoutStore.setNavigation(visibleSection as Navigation)
      }
    },
    { threshold: 0.5 },
  )

  sections.forEach((section) => observer.observe(section))
}

// Update cursor position
const updateCursor = (event: MouseEvent) => {
  cursorX.value = event.clientX
  cursorY.value = event.clientY
}

// Hide cursor when leaving the window
const hideCursor = () => {
  cursorVisible.value = false
}

// Show cursor when entering the window
const showCursor = () => {
  cursorVisible.value = true
}

onMounted(() => {
  autoSelectSection()
  window.addEventListener('mousemove', updateCursor)
  window.addEventListener('mouseleave', hideCursor)
  window.addEventListener('mouseenter', showCursor)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
  window.removeEventListener('mouseleave', hideCursor)
  window.removeEventListener('mouseenter', showCursor)
})
</script>

<template>
  <div
    class="custom-cursor"
    :style="{
      left: `${cursorX}px`,
      top: `${cursorY}px`,
      opacity: cursorVisible ? 1 : 0,
      background: layoutStore.cursorGradient,
    }"
  ></div>
  <main class="lg:grid lg:grid-cols-12 px-[4%] lg:px-[6%] font-sans h-screen lg:overflow-hidden">
    <section
      class="col-span-4 flex flex-col pt-[6%] lg:pt-[70%] lg:h-[70vh] h-fit gap-4 items-start justify-center lg:gap-20 lg:sticky lg:top-1/2 lg:-translate-y-1/2"
    >
      <Me />
    </section>
    <section
      class="col-span-8 items-center flex flex-col lg:overflow-y-auto h-screen"
      id="layoutNav"
    >
      <div class="lg:w-[90%] mx-auto">
        <section id="aboutme" class="pr-2 lg:pr-4">
          <About />
        </section>
        <section id="experience">
          <Resume />
        </section>
        <section id="project">
          <Project />
        </section>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.custom-cursor {
  position: fixed;
  width: 48rem;
  height: 48rem;
  border-radius: 50%;
  pointer-events: none;
  transition:
    transform 0.1s ease-out,
    opacity 0.2s ease-out;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}
</style>
