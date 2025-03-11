export type Navigation = 'aboutme' | 'experience' | 'project' | 'empty'

export type Project = 'project' | 'desc'

export type NavigationType =
  | 'text'
  | 'border'
  | 'text-dark'
  | 'underline'
  | 'underline-hover'
  | 'background'
  | 'bg-transparant'
  | 'text-transparant'
  | 'border-hover'
  | 'dark-background'
  | 'bg-transparant-hover'
  | 'text-group-hover'
  | 'text-hover'
  | 'text-light-group-hover'
  | 'bg-transparant-group-hover'
  | 'border-secondary-hover'
  | 'text-dark-group-hover'
  | 'dark-transprant-background'
  | 'dark-transprant-background-hover'

export type TechNav = 'imaps' | 'eproc' | 'lsm' | 'eproc' | 'digi' | 'grantha'

const NAVIGATION = {
  ABOUT: 'ABOUT',
  PROJECT: 'PROJECT',
  EXP: 'EXP',
} as const

export type NavigationKey = keyof typeof NAVIGATION // "ABOUT" | "PROJECT" | "EXP"
