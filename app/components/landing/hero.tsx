import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#111] p-10 flex items-center justify-around drop-shadow-lg rounded-lg md:flex-row flex-col">

      
      <div className="w-full w-[45%] mb-3">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
          Prime Blossom Vault
        </h2>
        <p className="text-sm text-md">
          Looking to do something this summer? You come to the right place. With
          many new things coming and everything is everywhere it may be hard to
          get things going again. Here at Prime Blossom vault we want to be able
          to have you blossom and allow others learn too.
        </p>
      </div>

      <div className="w-[200px] h-[200px] relative">
        <Image
          src="/13.png"
          alt="nft-image"
          fill
          className="drop-shadow-lg rounded-lg"
        />
      </div>



    </div>
  );
};

export default Hero;
