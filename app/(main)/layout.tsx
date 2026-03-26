import Footer from "@/components/web/footer";
import { Header } from "@/components/web/header";
import PageTransition from "@/components/web/page-transition";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen bg-black text-neutral-100">
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </main>
  );
}
