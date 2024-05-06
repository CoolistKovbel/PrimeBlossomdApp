import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#111] p-10 flex items-center justify-around drop-shadow-lg rounded-lg">
      <div className="w-[45%]">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Prime Blossom Vault
        </h2>
        <p className="text-sm text-md">
          A wonderful time to start minting a nft before the summer sun kisses
          us with it ultra voilet rays. Hope you dont just stay to smell the
          flowers but also mint some tokens too.
        </p>
      </div>

      <div className="w-[200px] h-[200px] relative">
        <Image
          src="/PamerPosyw.png"
          alt="nft-image"
          fill
          className="drop-shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
