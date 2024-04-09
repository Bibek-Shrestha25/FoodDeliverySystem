import React from "react";
import hero from "../assets/heros.jpg";
import MultipleSelect from "./Search";
const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} alt="" className="w-full h-96 object-fit" />

      <div className="absolute z-10  top-28 px-80">
        {/* hello */}
        <MultipleSelect />
      </div>
    </div>
  );
};

export default Hero;
