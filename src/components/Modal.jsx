import React, { useEffect, useCallback, useState } from "react"
import ColorPicker from "./ColorPicker"

const Modal = ({ image, initialBgColor, onClose, onColorChange }) => {
  const [bgColor, setBgColor] = useState(initialBgColor)

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  const handleColorChange = (color) => {
    setBgColor(color)
    onColorChange(color)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={onClose} style={{ backgroundColor: "rgba(0, 0, 0, 0.658)" }}>
      <div
        className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt="Dog"
          className="w-full h-auto object-contain max-h-[calc(90vh-4rem)]"
        />
        <div
          className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-md"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
        >
          <ColorPicker color={bgColor} onChange={handleColorChange} />
        </div>
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Modal

