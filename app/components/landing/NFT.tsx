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
    <section className="bg-[#111] p-10 flex items-center justify-center w-full flex-col gap-10">

      <header className="flex items-start flex-col gap-3">
        <h2 className="text-3xl font-bold">Signature NFT Token</h2>
        <p className="text-md leading-5">
          This Prime Blossom Plant is a token of 222 other unquie generations.
          If you decide to mint you will be able to earn rewards from staking.
          Have benitfits as well as be able to gain access to certain parts of
          the site.
        </p>
      </header>

      <div className="flex items-center justify-between w-full">

        <div className="w-[200px] h-[200px] relative">
          <Image
            src="/13.png"
            alt="nft-image"
            fill
            className="drop-shadow-lg rounded-lg"
          />
        </div>

        <div className="text-center">

          <h2 className="text-3xl font-bold mb-2">Prime Blossom Plant</h2>

          <div className="flex items-center justify-around gap-5 bg-[#222] p-3 drop-shadow-lg rounded">
            <p>Total Amount Minted: <span className="font-bold">24</span></p>
            <p>Price: <span className="font-bold">0.04 </span>~ <span className="font-bold">30</span></p>
          </div>

          <form
            className="bg-[#111] p-2 flex items-center mt-2 justify-center gap-4"
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
      
    </section>
  );
};

export default NFT;
