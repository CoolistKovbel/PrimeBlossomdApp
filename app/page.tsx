import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">


      <div className="bg-[#111] p-10 flex items-center justify-around ">

        <div className="w-[45%]">
          <h2 className="text-3xl font-bold mb-2">PrimeBlossomVault</h2>
          <p className="text-sm">
            A wonderful time to start minting a nft before the summer sun kisses us with it ultra voilet rays.
          </p>
        </div>

        <div className="w-[200px] h-[200px] relative">
          <Image src="/MysticMurkoNFT.png" alt="nft-image" fill />
        </div>

      </div>

      {/* nft */}
      <div className="bg-[#111] p-10 flex items-center justify-around ">
        <div className="w-[45%]">
          <h2 className="text-3xl font-bold mb-2">lightflow</h2>
          <p className="text-sm">
            What is life, looking to mint my nft, capture a item for your next
            collection.
          </p>
        </div>

        <div className="w-[200px] h-[200px] relative">
          <Image src="/MysticMurkoNFT.png" alt="nft-image" fill />
        </div>
      </div>


    </main>
  );
}
