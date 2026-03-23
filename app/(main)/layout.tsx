export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen bg-black text-neutral-100">
      {children}
    </main>
  );
}
