
import Hero from "./components/landing/hero";
import NFT from "./components/landing/NFT";
import Token from "./components/landing/Token";
import FooterMain from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 gap-10">
      {/* Hero */}
      <Hero />

      {/* nft */}
      <NFT />

      {/* Token */}
      <Token />

      {/* footer */}
      <FooterMain />

    </main>
  );
}
