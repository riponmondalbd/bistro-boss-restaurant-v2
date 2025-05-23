import React from "react";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-yellow-600 mb-2">--- {subheading} ---</p>
      <h3 className="text-3xl uppercase border-[#E8E8E8] border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
