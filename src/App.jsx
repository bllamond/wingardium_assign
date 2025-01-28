import React from "react"
import Gallery from "./components/Gallery"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Dog Image Gallery</h1>
      <Gallery />
    </div>
  )
}

export default App

