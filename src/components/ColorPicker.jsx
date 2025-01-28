import React from "react"

const ColorPicker = ({ color, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="color-picker" className="text-sm font-medium text-gray-700">
        Background:
      </label>
      <input
        id="color-picker"
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-8 h-8 rounded cursor-pointer"
      />
    </div>
  )
}

export default ColorPicker

