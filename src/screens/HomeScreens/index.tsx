// src/Home.js
import React, { useState, useEffect } from "react";

const carouselTexts = [
  "Ionic CapacitorJS: \n A cross-platform native runtime for web apps",
  "Plugins in Capacitor enable JavaScript to interface directly with Native APIs like Camera, Geolocation, Share, Barcode Scanner, and more",
  "Appflow is CI/CD platform for mobile dev teams to build and ship their apps faster than ever!",
];

function Home() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % carouselTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-around p-4">
      <div className="w-full max-w-lg p-1 text-center">
        <div className="text-2xl font-semibold text-gray-800">
          {carouselTexts[currentText]}
        </div>
      </div>

      <div className="mt-4 grid w-full max-w-lg grid-cols-2 gap-4">
        <div className="flex cursor-pointer items-center justify-center rounded-lg bg-blue-500 p-8 text-white">
          <span className="text-lg font-bold">Tile 1</span>
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-lg bg-green-500 p-8 text-white">
          <span className="text-lg font-bold">Tile 2</span>
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-lg bg-red-500 p-8 text-white">
          <span className="text-lg font-bold">Tile 3</span>
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-lg bg-yellow-500 p-8 text-white">
          <span className="text-lg font-bold">Tile 4</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
