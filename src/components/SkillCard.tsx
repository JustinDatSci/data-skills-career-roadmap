// src/components/SkillCard.tsx
import React from 'react'
import { SkillData } from '@types'
import { getColorForPriority } from '@utils/colorUtils'

interface SkillCardProps {
  skillName: string
  skill: SkillData
  isSelected: boolean
  onClick: (skillName: string) => void
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  skill,
  isSelected,
  onClick
}) => {
  const IconComponent = skill.icon
  const colorClass = getColorForPriority(skill.priority)

  return (
    <div 
      className={`skill-card p-6 rounded-xl border-2 transition-all duration-300 ${
        isSelected 
          ? `border-${colorClass}-500 bg-${colorClass}-50 shadow-lg` 
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
      onClick={() => onClick(skillName)}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-${colorClass}-100`}>
          <IconComponent className={`w-6 h-6 text-${colorClass}-600`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-lg">{skillName}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-bold bg-${colorClass}-100 text-${colorClass}-800`}>
              #{skill.priority}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{skill.description}</p>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-semibold text-gray-700">Time to Learn:</span>
              <p className="text-gray-600">{skill.timeToLearn}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Market Demand:</span>
              <p className="text-gray-600">{skill.marketDemand}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}