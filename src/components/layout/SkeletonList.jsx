import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonList = () => {
  return (
    <div className="px-6 py-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="w-[70%] h-12 rounded-[30px]" />
      </div>
      <Skeleton className="h-[95%] h-[500px] rounded-[8px]" />
      <div className="flex gap-3">
        {Array.from({ length: 4 }).map((o, index) => (
          <Skeleton key={index} className="w-[25%] h-[25px] rounded-[30px]" />
        ))}
      </div>
      {Array.from({ length: 2 }).map((o, index) => (
        <Skeleton key={index} className="w-full h-[200px] rounded-[8px]" />
      ))}
    </div>
  );
};

export default SkeletonList;
