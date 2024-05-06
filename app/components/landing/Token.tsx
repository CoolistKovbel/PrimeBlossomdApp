import Image from 'next/image'
import React from 'react'
import SimpleSwapPage from '../simpleSwapPage'

const Token = () => {
  return (
    <div className="bg-[#111] p-10">

    <div className="flex items-center justify-center w-full flex-row-reverse gap-10 mb-10">

      <div className="w-[45%]">
        <h2 className="text-3xl text-5xl font-bold mb-2">Prime Blossom Vault Token</h2>
        <p className="text-sm">
          Here in Prime Blossom we are trying to run an eco friendly buisness,
          we will be trying to use our token as much as we can. Feel free to
          buy directly from smart contract or look at dexs for listing. You
          may also wait, sign up, or follow our media to stay up to date with
          the latest updates. In the vault we use a token call SunlightToken.
        </p>
      </div>

      <div className="w-[20%] text-center flex flex-col items-center justify-center gap-4 bg-[#222] p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Sunlight Token </h2>

        <div className="w-[200px] h-[200px] relative">
          <Image
            src="/sunlighttoken.png"
            alt="nft-image"
            fill
            className="drop-shadow-lg rounded-lg"
          />
        </div>

        <div className="w-full text-left font-bold ">
          <p className="p-2">Total Supply: 1,000,000</p>
          <p className="p-2">Current value: 1 eth - 1000 SLT</p>
        </div>


      </div>
    </div>


    <SimpleSwapPage />


  </div>
  )
}

export default Token