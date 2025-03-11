import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Navigation, NavigationType, Project } from '@/types/layout'
import { NAVIGATION } from '@/constant/Navigation'

export const useLayoutStore = defineStore('layout', () => {
  // Variable
  const navigation = ref<Navigation>('aboutme')
  const project = ref<Project>('project')
  const activeNavigation = ref<Navigation>('aboutme')

  // Function
  const navigationClass = (type: NavigationType) => {
    const colors = {
      text: {
        [NAVIGATION.ABOUT]: 'text-primary-green',
        [NAVIGATION.PROJECT]: 'text-primary-pink',
        [NAVIGATION.EXP]: 'text-primary-purple',
      },
      'text-transparant': {
        [NAVIGATION.ABOUT]: 'text-primary-green/60',
        [NAVIGATION.PROJECT]: 'text-primary-pink/60',
        [NAVIGATION.EXP]: 'text-primary-purple/60',
      },
      border: {
        [NAVIGATION.ABOUT]: 'border-primary-green',
        [NAVIGATION.PROJECT]: 'border-primary-pink',
        [NAVIGATION.EXP]: 'border-primary-purple',
      },
      'border-hover': {
        [NAVIGATION.ABOUT]: 'hover:border-primary-green',
        [NAVIGATION.PROJECT]: 'hover:border-primary-pink',
        [NAVIGATION.EXP]: 'hover:border-primary-purple',
      },
      background: {
        [NAVIGATION.ABOUT]: 'bg-primary-green',
        [NAVIGATION.PROJECT]: 'bg-primary-pink',
        [NAVIGATION.EXP]: 'bg-primary-purple',
      },
      'dark-background': {
        [NAVIGATION.ABOUT]: 'bg-secondary-green',
        [NAVIGATION.PROJECT]: 'bg-secondary-pink',
        [NAVIGATION.EXP]: 'bg-secondary-purple',
      },
      'bg-transparant': {
        [NAVIGATION.ABOUT]: 'bg-primary-green/15',
        [NAVIGATION.PROJECT]: 'bg-primary-pink/15',
        [NAVIGATION.EXP]: 'bg-primary-purple/15',
      },
    }

    return colors[type][navigation.value] || ''
  }

  const cursorGradient = computed(() => {
    console.log(navigation.value, 'ini nilai dari navigation value')
    switch (navigation.value) {
      case NAVIGATION.ABOUT:
        return 'radial-gradient(circle, rgba(208, 255, 95, 0.06) 20%, rgba(71, 71, 71, 0.09) 50%, rgba(0, 220, 130, 0) 80%)'
      case NAVIGATION.EXP:
        return 'radial-gradient(circle, rgba(141, 126, 255, 0.06) 20%, rgba(71, 71, 71, 0.09) 50%, rgba(0, 220, 130, 0) 80%)'
      case NAVIGATION.PROJECT:
        return 'radial-gradient(circle, rgba(185, 127, 239, 0.06) 20%, rgba(71, 71, 71, 0.09) 50%, rgba(0, 220, 130, 0) 80%)'
      default:
        return 'radial-gradient(circle, rgba(208, 255, 95, 0.06) 20%, rgba(71, 71, 71, 0.09) 50%, rgba(0, 220, 130, 0) 80%)'
    }
  })

  const setNavigation = (nav: Navigation) => {
    navigation.value = nav
  }

  const setActiveNavigation = (nav: Navigation) => {
    navigation.value = nav
  }

  const setProject = (data: Project) => {
    project.value = data
  }

  const scrollTo = (sectionId: Navigation) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return {
    navigation,
    setNavigation,
    navigationClass,
    project,
    setProject,
    scrollTo,
    setActiveNavigation,
    cursorGradient,
  }
})
