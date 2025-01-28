import React from "react";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 pb-12 text-gray-700">
        Dog Image Gallery
      </h1>
      <hr className="border-t-2 border-gray-300 mb-8" />
      <Gallery />
    </div>
  );
};

export default App;
