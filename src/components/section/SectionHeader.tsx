import React from "react";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <span
      className="text-background-dark flex gap-2 items-center w-max text-sm font-semibold tracking-wide px-5 py-3 rounded-full 
   bg-[#c0cdf5] border-2 border-white
   shadow-[0_4px_12px_rgba(9,22,59,0.15),_0_2px_4px_rgba(9,22,59,0.1)]"
    >
      <span className="h-2 w-2 rounded-full bg-background-dark"></span>
      {text}
    </span>
  );
};

export default SectionHeader;
