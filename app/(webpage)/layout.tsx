import Link from "next/link";

export default function SiteLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
                             
        <header className="flex items-center justify-between p-4">

            <h2 className="text-2xl font-bold"><Link href="/">PrimeBlossom</Link></h2>

            <nav className="text-sm w-[40%] flex items-center justify-between gap-2">
                <a href="/about" className="bg-[#222] p-1 rounded-lg uppercase">about</a>
                <a href="/contact" className="bg-[#222] p-1 rounded-lg uppercase">contact</a>
                <a href="/stake" className="bg-[#222] p-1 rounded-lg uppercase">stake</a>
            </nav>

        </header>

        {children}
      </main>
    );
  }