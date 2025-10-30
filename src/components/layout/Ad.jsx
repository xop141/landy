"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import adImage1 from "../../../public/adImage.jpg";
import adImage2 from "../../../public/adImage2.jpg";
import adImage3 from "../../../public/adImage3.jpg";

const images = [adImage1, adImage2, adImage3];

const Ad = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[95%] border h-[500px] md:h-80 lg:h-96 overflow-hidden border-gray-300 rounded-[8px]">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image src={img} alt={`ad ${index}`} fill className="object-cover" />
        </div>
      ))}

      <div className="absolute z-20 flex gap-3 bottom-5 left-1/2 -translate-x-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-blue-500 w-3 h-3" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Ad;
