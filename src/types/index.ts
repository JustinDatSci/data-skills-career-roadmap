export type ViewType = 'overview' | 'planner' | 'skills' | 'paths'

export interface Skill {
  id: string
  name: string
  category: string
  difficulty: number
  importance: number
  description: string
}

export interface CareerPath {
  id: string
  title: string
  description: string
  skills: string[]
  timeToComplete: string
  salary: string
}
