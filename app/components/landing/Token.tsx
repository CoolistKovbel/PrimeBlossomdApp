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
          The Prime Blossom Token is a token in which a user a can use to purchase items as well as setup for staking
        </p>
      </div>

      <div className="w-[20%] text-center flex flex-col items-center justify-center gap-4 bg-[#222] p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Blossom Dust Token </h2>

        <div className="w-[200px] h-[200px] relative">
          <Image
            src="/token.png"
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