import React from 'react'
import { ViewType } from '../types'

interface HeaderProps {
  selectedView: ViewType
  onViewChange: (view: ViewType) => void
}

export const Header: React.FC<HeaderProps> = ({ selectedView, onViewChange }) => {
  const views: { key: ViewType; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'planner', label: 'Planner' },
    { key: 'skills', label: 'Skills' },
    { key: 'paths', label: 'Paths' }
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📊 The Essential 7: Data Skills Career Roadmap
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Interactive career planning tool based on analysis of 1000+ job postings
          </p>
          <nav className="flex justify-center gap-2">
            {views.map(view => (
              <button
                key={view.key}
                onClick={() => onViewChange(view.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedView === view.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {view.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
