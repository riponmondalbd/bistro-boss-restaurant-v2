import React from "react";
import featuredImage from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <section
      style={{ backgroundImage: `url(${featuredImage})` }}
      className="text-white pt-8 my-20 bg-fixed"
    >
      <SectionTitle subheading={"Check in Out"} heading={"Featured Item"} />
      <div className="md:flex items-center justify-center gap-10 pb-20 pt-12 px-36 bg-slate-800/30">
        <div>
          <img src={featuredImage} alt="featured image" />
        </div>
        <div>
          <p>April 01, 2025</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
