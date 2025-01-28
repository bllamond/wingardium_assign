import React, { useState, useEffect } from "react";
import { fetchDogImages } from "../utils/api";
import Card from "./Card";
import Modal from "./Modal";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageColors, setImageColors] = useState({});

  const loadImages = async () => {
    setLoading(true);
    try {
      const data = await fetchDogImages();
      setImages(data);
      const initialColors = data.reduce((acc, url) => {
        acc[url] = "#ffffff";
        return acc;
      }, {});
      setImageColors(initialColors);
    } catch (error) {
      console.error("Error fetching dog images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages(); 
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const handleColorChange = (url, color) => {
    setImageColors((prev) => ({
      ...prev,
      [url]: color,
    }));
  };

  const generateNewImages = async () => {
    await loadImages(); 
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
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

      <div className="flex justify-center mt-8">
        <button
          onClick={generateNewImages}
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Generate New Images
        </button>
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
  );
};

export default Gallery;
