"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useCafe } from "@/context/CafeContext";
import { BASE_URL } from "@/lib/utils";
const Page = () => {
  const { cafes } = useCafe();
  const { id } = useParams();
  const [pcs, setPcs] = useState([]);
  const [grouped, setGrouped] = useState({});
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const fetchPcs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/cafe/pcs/${id}`);
        setPcs(res.data);
      
        // Group PCs by area name
        const groups = res.data.reduce((acc, pc) => {
          const group = pc.pc_area_name || "Other";
          if (!acc[group]) acc[group] = [];
          acc[group].push(pc);
          return acc;
        }, {});
        setGrouped(groups);

        const firstGroup = Object.keys(groups)[0];
        setSelectedTab(firstGroup);
      } catch (err) {
        console.error("Error fetching PCs:", err);
      }
    };
    fetchPcs();
  }, [id]);

  const containerWidth = grouped[selectedTab]
    ? Math.max(...grouped[selectedTab].map((pc) => pc.pc_box_left + 70)) + 20
    : 0;

  return (
    <div className="min-h-screen bg-[#0e1420] text-white p-6 flex flex-col">
      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
        {Object.keys(grouped).map((group) => (
          <button
            key={group}
            onClick={() => setSelectedTab(group)}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer border transition-all duration-300 whitespace-nowrap
              ${
                selectedTab === group
                  ? "bg-gradient-to-r from-emerald-500 to-lime-500 text-black border-transparent shadow-lg"
                  : "bg-[#1c2333] border-[#2e374b] text-gray-300 hover:border-gray-400 hover:text-white"
              }`}
          >
            {group}
          </button>
        ))}
      </div>

      {/* Layout Area */}
      <div className="flex-1 overflow-x-auto relative rounded-xl bg-[#121a2b] p-4 shadow-inner border border-[#2a3244]">
        <div className="relative h-full" style={{ width: containerWidth }}>
          {grouped[selectedTab]?.map((pc) => (
            <div
              key={pc.pc_name}
              style={{
                position: "absolute",
                top: pc.pc_box_top,
                left: pc.pc_box_left,
                width: 60,
                height: 60,
              }}
              className={`flex items-center justify-center rounded-full font-semibold text-sm border-[2px] transition-transform duration-200 hover:scale-105 shadow-md
                ${
                  pc.pc_in_using
                    ? "bg-red-600/90 border-red-400 shadow-red-500/40 animate-pulse"
                    : pc.pc_enabled
                    ? "bg-emerald-600/80 border-emerald-400 shadow-emerald-400/30"
                    : "bg-gray-700 border-gray-500 opacity-70"
                }`}
            >
              {pc.pc_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
