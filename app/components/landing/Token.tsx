import Image from "next/image";
import React from "react";
import SimpleSwapPage from "../simpleSwapPage";

const Token = () => {
  return (
    <section className="bg-[#111] p-10 w-full drop-shadow-lg">
      <header className="p-4 flex items-center justify-between">
        <h2 className="flex flex-col gap-1 text-center">
          <span className="text-[14px] font-bold">PrimeBlossom</span>
          <span className="text-4xl font-bold">Pollen Token</span>
        </h2>

        <p className="text-xl font-bold p-3 bg-[#444] drop-shadow-lg">
          ERC-20 Token
        </p>
      </header>

      <article>
        <div className="flex items-center justify-between">
          <p className="text-md w-[60%]">
            The Pollen Token is a token in which a user a can use to purchase
            items as well as setup for staking. You will be able to use it
            within the dApp and at our stores.
          </p>

          <div className="w-[200px] h-[200px] relative">
            <Image
              src="/token.png"
              alt="nft-image"
              fill
              className="drop-shadow-lg rounded-lg"
            />
          </div>
        </div>

        <div className="w-full text-left font-bold ">
          <p className="p-2">Total Supply: 100,000,000</p>
          <p className="p-2">Current value: 1 eth - 1000 PBT</p>
          <p className="p-2">Token Address: </p>
        </div>
      </article>

      {/* <SimpleSwapPage />  */}
    </section>
  );
};

export default Token;
