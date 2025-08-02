import React, { useState } from 'react'
import { Header } from './components/Header'
import { ViewType } from './types'

function App() {
  const [selectedView, setSelectedView] = useState<ViewType>('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header selectedView={selectedView} onViewChange={setSelectedView} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Current View: {selectedView}
          </h2>
          <p className="text-gray-600 mt-2">
            Your app is working! 🎉
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
