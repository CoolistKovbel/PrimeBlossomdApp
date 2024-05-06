import Image from "next/image";
import SimpleSwapPage from "./components/simpleSwapPage";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 gap-10">

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

      {/* nft */}
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

          <form className="bg-[#111] p-2 flex items-center gap-4">
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

      {/* Token */}
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

      {/* footer */}
      <footer className="flex items-center justify-between w-full p-10">

        <div>
          <h1 className="text-2xl md:text-4xl font-bold ">Prime Blossom Vault</h1>
          <p>The one contract that makes you buy sunlight</p>
        </div>

        <nav className="flex items-center flex-col p-5 gap-2">
          <Link href="/" className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]">Home</Link>
          <Link href="/about" className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]">About</Link>
          <Link href="/contact" className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]">Contact</Link>
          <Link href="/stake" className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]">Stake</Link>
        </nav>


      </footer>

    </main>
  );
}
