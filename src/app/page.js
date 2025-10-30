"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { useCafe } from "@/context/CafeContext";

import CafeList from "@/components/section/CafeList";
import SelectLocation from "@/components/layout/SelectLocation";
import SkeletonList from "@/components/layout/SkeletonList";
import Maintenance from "@/components/layout/Maintenance";
import Selected from "@/components/section/Selected";
import Ad from "@/components/layout/Ad";
import Header from "@/components/layout/Header";

export default function Home() {
  const [location, setLocation] = useState(null);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const { cafes, error, isLoading } = useCafe();

  // Load user location
  useEffect(() => {
    const saved = localStorage.getItem("user_location");
    if (!saved) setShow(true);
    else setLocation(saved);
  }, []);

  if (isLoading) return <SkeletonList />;
  if (error) return <Maintenance />;

  const jump = () => router.push("./maps");

  return (
    <div className="h-screen w-screen relative">
      {show ? (
        <SelectLocation
          onClose={(district) => {
            setLocation(district);
            localStorage.setItem("user_location", district);
            setShow(false);
          }}
        />
      ) : (
        <div className="px-6 py-4 flex flex-col gap-2">
          <Header/>
          <div className="flex flex-col items-center">
            <Ad />
          </div>
          <Selected selected={location} setSelected={setLocation} />
          <CafeList cafes={cafes} selectedDist={location} />
        </div>
      )}

      <div
        className="fixed right-4 bottom-4 rounded-full bg-[#333333] flex p-5"
        onClick={jump}
      >
        <MapPin size={32} />
      </div>
    </div>
  );
}
