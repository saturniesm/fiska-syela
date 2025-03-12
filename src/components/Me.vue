<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import type { Navigation } from '@/types/layout'
import { NAVIGATION } from '@/constant/Navigation'

const layoutStore = useLayoutStore()

let jobIndex = 0
let charIndex = 0
let isDeleting = false
const jobDesc = ['Frontend Developer', 'UI/UX Designer', 'Writer', 'Student', 'Just a Girl']

const navigation = [
  {
    active_color: 'green',
    id: NAVIGATION.ABOUT,
    label: 'About Me',
    ref: '#about',
  },
  {
    active_color: 'purple',
    id: NAVIGATION.EXP,
    label: 'Experiences',
    ref: '#experiences',
  },
  {
    active_color: 'pink',
    id: NAVIGATION.PROJECT,
    label: 'Projects',
    ref: '#projects',
  },
]

const socialMedia = [
  {
    link: 'https://instagram.com/yourhandle',
    icon: 'mdi:instagram',
    label: 'Instagram',
  },
  {
    link: 'https://linkedin.com/in/yourhandle',
    icon: 'bx:bxl-linkedin',
    label: 'LinkedIn',
  },
  {
    link: 'https://youtube.com/yourhandle',
    icon: 'ri:youtube-line',
    label: 'YouTube',
  },
  {
    link: 'https://twitter.com/yourhandle',
    icon: 'lucide:twitter',
    label: 'Twitter',
  },
  {
    link: 'https://medium.com/@yourhandle',
    icon: 'mage:medium',
    label: 'Medium',
  },
  {
    link: 'https://github.com/yourhandle',
    icon: 'hugeicons:github',
    label: 'GitHub',
  },
]
const colorMap: Record<string, string> = {
  green: 'bg-primary-green',
  purple: 'bg-primary-purple',
  pink: 'bg-primary-pink',
}

const jobTitle = ref('')

const typeEffect = () => {
  const currentWord = jobDesc[jobIndex]

  if (!isDeleting) {
    jobTitle.value = currentWord.substring(0, charIndex++)
  } else {
    jobTitle.value = currentWord.substring(0, charIndex--)
  }

  let speed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentWord.length + 1) {
    speed = 1500
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    jobIndex = (jobIndex + 1) % jobDesc.length
    speed = 300
  }

  setTimeout(typeEffect, speed)
}

const changeNavigation = (id: Navigation) => {
  layoutStore.setNavigation(id)
  layoutStore.scrollTo(id)
}

onMounted(typeEffect)
</script>

<template>
  <header class="flex flex-col gap-2 text-hint tracking-wide">
    <h1 class="text-3xl lg:text-6xl font-bold tracking-normal">Fiska Syela</h1>
    <h2
      class="text-lg lg:text-2xl font-semibold flex gap-2"
      :class="layoutStore.navigationClass('text')"
    >
      <span
        >{{ jobTitle }}<span class="animate-blink text-hint/40 text-lg lg:text-2xl">|</span></span
      >
    </h2>
    <p class="text-xs lg:text-sm text-hint/80 font-light lg:w-64">
      Focus on building scalable, fast, and intuitive web applications.
    </p>
  </header>

  <nav aria-label="Main Navigation tracking-widest" class="hidden lg:block">
    <ul class="flex flex-col gap-7 pl-2">
      <li
        v-for="nav in navigation"
        class="list-space scale-hover"
        :class="{
          [`text-primary-${nav.active_color}`]: true,
          'scale-130': nav.id === layoutStore.navigation,
          'opacity-40 hover:opacity-100': nav.id !== layoutStore.navigation,
        }"
        @click="changeNavigation(nav.id as Navigation)"
      >
        <span
          class="w-4 h-4 rotate-45 bg-primary-green"
          :class="colorMap[nav.active_color] || 'bg-gray-300'"
        ></span>
        <a class="text-sm leading-none" :href="nav.ref">{{ nav.label }}</a>
      </li>
    </ul>
  </nav>

  <ul class="flex items-end gap-5 group">
    <li
      v-for="social in socialMedia"
      class="text-hint/60"
      :class="layoutStore.navigationClass('text-hover')"
    >
      <a :href="social.link" target="_blank" rel="noopener noreferrer" :aria-label="social.label">
        <Icon :icon="social.icon" class="w-6 h-6 scale-hover" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.animate-blink {
  animation: blink 0.8s infinite;
}
</style>
