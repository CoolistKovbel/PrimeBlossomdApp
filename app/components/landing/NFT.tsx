"use client";

import { mintNFT } from "@/app/lib/web3";
import Image from "next/image";
import React from "react";

const NFT = () => {


  const handleMint = async (e: any) => {
    e.preventDefault();
    try {
      mintNFT(e.target.nftAmount.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#111] p-10 flex items-center justify-center w-full flex-col md:flex-row gap-4">

      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl font-bold mb-3 text-center md:text-left">Signtature Mint</h2>
        <p className="text-sm">
          This Prime Blossom Plant is a token of 222 other unquie generations.
          If you decide to mint you will be able to earn rewards from staking.
          Have benitfits as well as be able to gain access to certain parts of
          the site.
        </p>
      </div>

      <div className=" w-full md:w-[30%] text-center flex flex-col items-center justify-center gap-4 bg-[#111]">
        <h2 className="text-2xl font-bold mb-2">Prime Blossom Plant</h2>

        <div className="w-[200px] h-[200px] relative">
          <Image
            src="/13.png"
            alt="nft-image"
            fill
            className="drop-shadow-lg rounded-lg"
          />
        </div>

        <form
          className="bg-[#111] p-2 flex items-center gap-4"
          onSubmit={handleMint}
        >
          <input
            type="number"
            placeholder="enter amount"
            id="nftAmount"
            name="nftAmount"
            className="p-2 rounded-lg text-black"
          />
          <button className="p-2 bg-[#222] rounded-lg">submit</button>
        </form>
      </div>

    </div>
  );
};

export default NFT;
