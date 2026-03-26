import { ReactNode } from "react";

export default function PakarnaattamLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen bg-black text-neutral-100">
      {children}
    </main>
  );
}
