"use client";
import React, { useState } from "react";
import { Cpu, Monitor, HardDrive, MemoryStick, DollarSign, Coffee, AirVent, Star } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const iconMap = {
  coffee: Coffee,
  airvent: AirVent,
  star: Star,
};

const CafeSpec = ({ cafeId, cafe = [], cafeAddress, cafeName, cafeAttributes = [] }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(cafe[0]?.name || "");

  const jump = () => router.push(`/pcs/${cafeId}`);

  if (!cafe || cafe.length === 0)
    return (
      <p className="text-white text-[16px] text-center py-4">
        No PC specs available.
      </p>
    );

  const selectedSpec = cafe.find((item) => item.name === selected);

  return (
    <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/10 shadow-lg space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-[22px] font-semibold text-white">{cafeName}</h1>
        <p className="text-[12px] text-gray-400">{cafeAddress}</p>
      </div>

    
      {cafeAttributes.length > 0 && (
        <div className="px-4 py-3 space-y-2 text-white/90 text-sm bg-white/5 rounded-2xl border border-white/10">
          <div className="flex flex-col gap-3 mt-2">
            {cafeAttributes.map((attr, i) => {
              const Icon = iconMap[attr.icon?.toLowerCase()] || Star;
              return (
                <div key={i} className="flex items-center gap-2">
                  <Icon size={24} className="text-yellow-400" />
                  <span>{attr.desc}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <Separator className="my-2 bg-white/10" />

      {/* Tabs */}
      <div className="flex justify-evenly gap-3">
        {cafe.map((item) => (
          <div
            key={item.name}
            onClick={() => setSelected(item.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer border transition-all duration-200 ${
              selected === item.name
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-md"
                : "bg-transparent border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Selected Spec Details */}
      {selectedSpec && (
        <div className="px-4 py-3 space-y-2 text-white/90 text-sm bg-white/5 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3">
            <Cpu size={16} className="text-blue-400" />
            <span>CPU:</span> {selectedSpec.cpu}
          </div>
          <div className="flex items-center gap-3">
            <HardDrive size={16} className="text-purple-400" />
            <span>GPU:</span> {selectedSpec.gpu}
          </div>
          <div className="flex items-center gap-3">
            <MemoryStick size={16} className="text-pink-400" />
            <span>RAM:</span> {selectedSpec.ram}
          </div>
          <div className="flex items-center gap-3">
            <Monitor size={16} className="text-cyan-400" />
            <span>Monitor:</span> {selectedSpec.monitor}
          </div>
          <div className="flex items-center gap-3">
            <DollarSign size={16} className="text-green-400" />
            <span>Price:</span> {selectedSpec.pricePerHour}₮ / hour
          </div>
        </div>
      )}

      <Button
        onClick={jump}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Order Now
      </Button>
    </div>
  );
};

export default CafeSpec;
