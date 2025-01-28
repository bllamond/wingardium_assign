import React from "react"

const ColorPicker = ({ color, onChange }) => {
  return (
    <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-6 h-6 rounded-full cursor-pointer"
      />
    </div>
  )
}

export default ColorPicker

