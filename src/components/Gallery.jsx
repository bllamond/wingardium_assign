import React, { useState, useEffect } from "react";
import { fetchDogImages } from "../utils/api";
import Card from "./Card";
import Modal from "./Modal";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchDogImages();
      setImages(data);
      setLoading(false);
    };
    loadImages();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {images.map((url, index) => (
          <Card key={index} url={url} onClick={() => setSelectedImage(url)} />
        ))}
      </div>
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
};

export default Gallery;
