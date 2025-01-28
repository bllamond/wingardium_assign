import React, { useState } from "react"
import ColorPicker from "./ColorPicker"

const Card = ({ url, onClick }) => {
  const [bgColor, setBgColor] = useState("#ffffff")

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={url || "/placeholder.svg"}
        alt="Dog"
        className="w-full h-64 object-cover cursor-pointer"
        onClick={onClick}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button
          onClick={onClick}
          className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
        >
          View Larger
        </button>
      </div>
      <ColorPicker color={bgColor} onChange={setBgColor} />
    </div>
  )
}

export default Card

