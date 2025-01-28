import React from "react";

const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg p-4">
        <button
          className="absolute top-2 right-2 text-xl text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={image} alt="Dog" className="max-w-full max-h-screen rounded" />
      </div>
    </div>
  );
};

export default Modal;
