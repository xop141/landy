import React from "react";

const ProgressBar = ({ percentage }) => {
  let bgColor = "bg-green-500";
  if (percentage > 33 && percentage <= 66) bgColor = "bg-yellow-500";
  if (percentage > 66) bgColor = "bg-red-500";

  return (
    <div className="border w-[50%] h-[20px] rounded-[8px]">
      <div
        className={`${bgColor} h-full rounded-[8px]`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
