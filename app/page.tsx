
import Hero from "./components/landing/hero";
import NFT from "./components/landing/NFT";
import Token from "./components/landing/Token";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 gap-10">

    <header className="w-full p-2 bg-[#222] flex items-center justify-around rounded-lg">

      <h2 className="text-3xl">PBV</h2>

      <nav className="text-xl font-bold flex items-center justify-between p-4 w-[70%]">
        <a href="/about" className="bg-[#111] p-2 rounded-lg">About</a>
        <a href="/contact" className="bg-[#111] p-2 rounded-lg">Contact</a>
        <a href="/swap" className="bg-[#111] p-2 rounded-lg">swap</a>
      </nav>

    </header>

      
      {/* Hero */}
      <Hero />     

      {/* nft */}
      <NFT />

      {/* Token */}
      <Token />


    </main>
  );
}
