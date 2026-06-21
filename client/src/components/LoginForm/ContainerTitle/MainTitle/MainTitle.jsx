import React from "react";

const MainTitle = ({ role, title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">
        {title}
      </h1>
      <p className="to-slate-800 text-sm sm:text-base mt-2">{subtitle}</p>
    </div>
  );
};

export default MainTitle;
