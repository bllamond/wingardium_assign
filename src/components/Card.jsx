import React from "react"
import ColorPicker from "./ColorPicker"

const Card = ({ url, onClick, bgColor, onColorChange }) => {
  const handleImageClick = () => {
    onClick(url)
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={url || "/placeholder.svg"}
        alt="Dog"
        className="w-full h-64 object-cover cursor-pointer"
        onClick={handleImageClick}
      />
      <div
        className="absolute inset-x-0 bottom-0 p-2 flex justify-between items-center"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
      >
        <ColorPicker color={bgColor} onChange={onColorChange} />
        <button
          onClick={handleImageClick}
          className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          View 
        </button>
      </div>
    </div>
  )
}

export default Card

