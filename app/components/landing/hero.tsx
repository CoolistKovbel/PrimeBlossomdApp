import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#111] gap-5 p-5 flex items-center justify-around drop-shadow-lg rounded-lg md:flex-row flex-col">
      
      <div className="w-full w-[65%] mb-3 flex flex-col gap-4 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left capitalize">
          Looking to do something this summer?
        </h2>
        <p className="text-md">
          You come to the right place. With
          many new things coming and everything is everywhere it may be hard to
          get things going again. Here at <strong>Prime Blossom Vault</strong> we want to be able
          to have you blossom and allow others learn too.
        </p>
        <Link href="/about" className="bg-[#222] p-4 font-bold hover:bg-[#444] w-[30%] text-center font-bold rounded-lg drop-shadow-lg ">Learn More</Link>
      </div>

      <div className="w-[200px] h-[200px] relative">
        <Image
          src="/safelock.png"
          alt="nft-image"
          fill
          className="drop-shadow-lg rounded-lg"
        />
      </div>

    </div>
  );
};

export default Hero;
