import React from "react";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-10">
      <header className="w-full p-5 bg-[#222] p-10">
        <h2 className="text-2xl font-bold mb-2">About PrimeBlossom Vault</h2>
        <p className="text-sm">
          This is going to be a small little decentralized application where a
          user is going to be able to mint a erc-721 token and be able to earn
          rewards. You will later be able to use your erc-20 and erc-721 tokens
          for our local planting service.
        </p>
      </header>

      <section className="bg-[#222] p-3">
        <header className="mb-2">
          <h2 className="text-4xl font-bold mb-2">Weekly Releases</h2>
          <p className="text-sm">
            There will be weekly releases depending on the circumstantces.
          </p>
        </header>

        <p className="text-sm">
          You can be looking forward to community events where memeber share
          some cool art work that they have created and join a weekly hosted
          chat.
        </p>

        <p className="text-sm">
          There will be newletter that will be sent out whenever there is an
          update.
        </p>
      </section>

      <section className="bg-[#222] p-3 ">
        <header className="w-full">
          <h2 className="text-2xl font-bold">Offers</h2>
          <p className="text-sm">
            We currently sell a veriaty of plants and seeds for your gardening
            needs.
          </p>
          <p>
            You can also decide to mint your own erc-721 token that will allow
            you to use towards your next purchase to receive a dicount on your
            purchases with Prime Blossom
          </p>
        </header>
      </section>
    </main>
  );
};

export default Page;
