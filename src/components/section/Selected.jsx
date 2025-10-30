import React from "react";
import { MapPin } from "lucide-react";
import { districts } from "@/lib/utils";

const Selected = ({ selected, setSelected }) => {
  const handleSelect = (district) => {
    setSelected(district);
    localStorage.setItem("user_location", district);
  };

  return (
    <div className="flex w-full overflow-x-auto gap-3 scrollbar-hide text-white">
      {districts.map((district, index) => (
        <div
          key={index}
          onClick={() => handleSelect(district)}
          className={`flex items-center gap-2 shrink-0 text-base md:text-lg px-5 py-3 rounded-[30px] bg-[#333333] cursor-pointer transition 
            ${
              district === selected
                ? "bg-white text-black border-white"
                : "border-white/50 hover:bg-white/10"
            }`}
        >
          <MapPin className={district === selected ? "text-black" : "text-white"} />
          {district}
        </div>
      ))}
    </div>
  );
};

export default Selected;
