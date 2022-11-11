import React from "react";

const CardSkeleton = () => (
  <div className="flex flex-col p-14 animate-pulse">
    <div className="w-3/4 h-4 bg-gray-300 mb-2 rounded-sm" />
    <div className="w-2/6 h-4 bg-gray-300 rounded-sm" />
    <div className="w-4/5 h-56 self-center bg-gray-200 my-4 rounded-sm" />
  </div>
);

export default CardSkeleton;
