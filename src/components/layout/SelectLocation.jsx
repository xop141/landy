"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { districts } from "@/lib/utils";
const SelectLocation = ({ onClose }) => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-4 text-white">
      {districts.map((district) => (
        <div
          key={district}
          className="flex items-center gap-1 text-2xl px-5 py-3 rounded-[30px] bg-[#333333] border-3 cursor-pointer hover:bg-white/10 transition"
          onClick={() => onClose(district)}
        >
          <MapPin size={28} />
          {district}
        </div>
      ))}
    </div>
  );
};

export default SelectLocation;
