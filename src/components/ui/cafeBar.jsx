"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Coffee, AirVent, Star } from "lucide-react";

// ✅ Lazy-load CafeSpec so it doesn’t block initial render
const CafeSpec = dynamic(() => import("./cafeSpec"), { ssr: false });

const CafeBar = ({ cafe }) => {
  const [open, setOpen] = useState(false);

  const iconMap = {
    coffee: Coffee,
    airvent: AirVent,
    star: Star,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      key={cafe.id}
      className="flex flex-col gap-[8px] transition-transform duration-200"
    >
      {/* 🖼️ Image Carousel */}
      <Carousel className="relative border-2 border-white/10 rounded-[8px] overflow-hidden">
        <CarouselContent>
          {cafe.images.map((image, idx) => (
            <CarouselItem key={idx} className="w-full h-[250px] relative">
              <Image
                onClick={handleOpen}
                src={image}
                alt={`${cafe.name} image ${idx + 1}`}
                width={500}
                height={250}
                className="object-cover w-full h-[250px] cursor-pointer"
                loading={idx === 0 ? "eager" : "lazy"}
                priority={idx === 0}
                placeholder="blur"
                blurDataURL="/blur-placeholder.webp"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 🧭 Top overlay info */}
        <div className="absolute top-2 px-3 flex items-center justify-between w-full">
          <div className="bg-white/10 backdrop-blur-xl rounded-[8px] px-3 py-1 w-fit flex items-center gap-2">
            <p className="w-[8px] h-[8px] bg-green-500 rounded-full"></p>
            <span className="text-sm text-white">12</span>
          </div>
          <div className="flex items-center gap-[5px]">
            {cafe.attributes?.map((attr, i) => {
              const Icon = iconMap[attr.icon?.toLowerCase()] || Star;
              return (
                <div
                  key={i}
                  className="bg-white/10 rounded-[8px] py-1 px-3 flex justify-center items-center text-white/90"
                >
                  <Icon size={18} />
                </div>
              );
            })}
          </div>
        </div>

        {/* 🏷️ Cafe name bottom overlay */}
        <div className="text-[20px] font-medium absolute bottom-2 left-1/2 -translate-x-1/2 text-white bg-white/10 backdrop-blur-xl rounded-[30px] px-5 py-2">
          {cafe.name}
        </div>
      </Carousel>

      {/* 🔍 Modal for specs */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-center items-center animate-fadeIn">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          {/* Modal content */}
          <div className="relative z-50 w-[90%] max-w-[400px] animate-slideUp">
            <CafeSpec
              cafe={cafe.pcs}
              cafeAddress={cafe.address}
              cafeAttributes={cafe.attributes}
              cafeId={cafe.id}
              cafeName={cafe.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CafeBar;

