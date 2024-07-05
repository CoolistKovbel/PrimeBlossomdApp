
export default function SiteLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="w-full p-10 min-h-screen">
        {children}
      </main>
    );
  }