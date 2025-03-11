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
      'text-dark': {
        [NAVIGATION.ABOUT]: 'text-secondary-green',
        [NAVIGATION.PROJECT]: 'text-secondary-pink',
        [NAVIGATION.EXP]: 'text-secondary-purple',
      },
      'text-hover': {
        [NAVIGATION.ABOUT]: 'hover:text-primary-green',
        [NAVIGATION.PROJECT]: 'hover:text-primary-pink',
        [NAVIGATION.EXP]: 'hover:text-primary-purple',
      },
      'text-group-hover': {
        [NAVIGATION.ABOUT]: 'group-hover:text-primary-green',
        [NAVIGATION.PROJECT]: 'group-hover:text-primary-pink',
        [NAVIGATION.EXP]: 'group-hover:text-primary-purple',
      },
      'text-dark-group-hover': {
        [NAVIGATION.ABOUT]: 'group-hover:text-secondary-green',
        [NAVIGATION.PROJECT]: 'group-hover:text-secondary-pink',
        [NAVIGATION.EXP]: 'group-hover:text-secondary-purple',
      },
      'text-light-group-hover': {
        [NAVIGATION.ABOUT]: 'group-hover:text-acc-green',
        [NAVIGATION.PROJECT]: 'group-hover:text-acc-pink',
        [NAVIGATION.EXP]: 'group-hover:text-acc-purple',
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
      'border-secondary-hover': {
        [NAVIGATION.ABOUT]: 'group-hover:border-primary-green',
        [NAVIGATION.PROJECT]: 'group-hover:border-primary-pink',
        [NAVIGATION.EXP]: 'group-hover:border-primary-purple',
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
      'dark-transprant-background': {
        [NAVIGATION.ABOUT]: 'bg-secondary-green/5',
        [NAVIGATION.PROJECT]: 'bg-secondary-pink/5',
        [NAVIGATION.EXP]: 'bg-secondary-purple/5',
      },
      'dark-transprant-background-hover': {
        [NAVIGATION.ABOUT]: 'group-hover:bg-secondary-green/5',
        [NAVIGATION.PROJECT]: 'group-hover:bg-secondary-pink/5',
        [NAVIGATION.EXP]: 'group-hover:bg-secondary-purple/5',
      },
      'bg-transparant-hover': {
        [NAVIGATION.ABOUT]: 'hover:bg-primary-green/10',
        [NAVIGATION.PROJECT]: 'hover:bg-primary-pink/10',
        [NAVIGATION.EXP]: 'hover:bg-primary-purple/10',
      },
      'bg-transparant-group-hover': {
        [NAVIGATION.ABOUT]: 'group-hover:bg-primary-green/20',
        [NAVIGATION.PROJECT]: 'group-hover:bg-primary-pink/20',
        [NAVIGATION.EXP]: 'group-hover:bg-primary-purple/20',
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
