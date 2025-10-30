import React, { useContext } from "react";
import CafeBar from "../ui/cafeBar";
import { DistrictContext } from "@/app/context/DistrictContext.js";


const CafeList = ({ cafes, selectedDist }) => {
  const filteredCafes = selectedDist
    ? cafes.filter((cafe) => cafe.location.district === selectedDist)
    : cafes;

  return (
    <div className="flex flex-col gap-8">
      {filteredCafes.map((cafe) => (
        <CafeBar cafe={cafe} key={cafe.id} />
      ))}
    </div>
  );
};

export default CafeList;

