import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Navigation, NavigationType, Project } from '@/types/layout'
import { NAVIGATION } from '@/constant/Navigation'

export const useLayoutStore = defineStore('layout', () => {
  // Variable
  const navigation = ref<Navigation>('aboutme')
  const project = ref<Project>('project')

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
      'bg-transparant': {
        [NAVIGATION.ABOUT]: 'bg-primary-green/15',
        [NAVIGATION.PROJECT]: 'bg-primary-pink/15',
        [NAVIGATION.EXP]: 'bg-primary-purple/15',
      },
    }

    return colors[type][navigation.value] || ''
  }

  const setNavigation = (nav: Navigation) => {
    navigation.value = nav
  }

  const setProject = (data: Project) => {
    project.value = data
  }

  return { navigation, setNavigation, navigationClass, project, setProject }
})
