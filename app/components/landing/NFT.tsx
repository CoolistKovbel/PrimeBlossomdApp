"use client"

import { mintNFT } from '@/app/lib/web3'
import Image from 'next/image'
import React from 'react'

const NFT = () => {

  const handleMint = async (e:any) => {
    e.preventDefault()
    try {
      mintNFT(e.target.nftAmount.value)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="bg-[#111] p-10 flex items-center justify-center w-full ">
    <div className="w-[45%]">
      <h2 className="text-3xl font-bold mb-2">
        Prime Blossom Vault Collection
      </h2>
      <p className="text-sm">
        Welcome to the Prime Blossom Vault where you can see you can mint a
        verity of erc-721 tokens for a small price of eth. There is going to
        be about 222 of these tokens avaible for minting, be the one that
        picks a few out. It will support me and the contract. You will also
        recieve some benifit and rewards that will allow you to earn tokens
        for staking your NFT as well as special spot for later projects.
        Dont be hesitent get yours now.
      </p>
    </div>

    <div className="w-[30%] text-center flex flex-col items-center justify-center gap-4 bg-[#111]">
      <h2 className="text-2xl font-bold mb-2">PamerPosy Collection</h2>

      <div className="w-[200px] h-[200px] relative">
        <Image
          src="/PamerPosy.png"
          alt="nft-image"
          fill
          className="drop-shadow-lg rounded-lg"
        />
      </div>

      <form className="bg-[#111] p-2 flex items-center gap-4" onSubmit={handleMint}>
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
  )
}

export default NFT