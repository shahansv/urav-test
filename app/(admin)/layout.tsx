import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen bg-black text-neutral-100">
      {children}
    </main>
  );
}
