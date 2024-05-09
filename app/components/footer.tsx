import Link from "next/link";
import React from "react";

const FooterMain = () => {
  return (
    <footer className="flex items-center justify-between w-full p-10">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold ">Prime Blossom dApp </h1>
        <p>The place where you can get your flowers and even trade </p>
      </div>

      <nav className="flex items-center flex-col p-5 gap-2">
        <Link
          href="/"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          Contact
        </Link>
        <Link
          href="/stake"
          className="w-full p-2 bg-[#222] text-center rounded-lg hover:bg-[#333]"
        >
          Stake
        </Link>
      </nav>
    </footer>
  );
};

export default FooterMain;
