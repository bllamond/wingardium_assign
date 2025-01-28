import React, { useState, useEffect } from "react"
import { fetchDogImages } from "../utils/api"
import Card from "./Card"
import Modal from "./Modal"

const Gallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageColors, setImageColors] = useState({})

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true)
      try {
        const data = await fetchDogImages()
        setImages(data)
        const initialColors = data.reduce((acc, url) => {
          acc[url] = "#ffffff"
          return acc
        }, {})
        setImageColors(initialColors)
      } catch (error) {
        console.error("Error fetching dog images:", error)
      } finally {
        setLoading(false)
      }
    }
    loadImages()
  }, [])

  const handleImageClick = (url) => {
    setSelectedImage(url)
  }

  const handleColorChange = (url, color) => {
    setImageColors((prev) => ({
      ...prev,
      [url]: color,
    }))
  }

  if (loading) {
    return (
        <div className="flex justify-center items-center h-64">
  <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
</div>


      
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((url) => (
          <Card
            key={url}
            url={url}
            onClick={handleImageClick}
            bgColor={imageColors[url]}
            onColorChange={(color) => handleColorChange(url, color)}
          />
        ))}
      </div>
      {selectedImage && (
        <Modal
          image={selectedImage}
          initialBgColor={imageColors[selectedImage]}
          onClose={() => setSelectedImage(null)}
          onColorChange={(color) => handleColorChange(selectedImage, color)}
        />
      )}
    </>
  )
}

export default Gallery

