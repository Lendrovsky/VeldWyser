import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function layoutregister({ children }: { children: any }) {
  return (
    <div>
      <Suspense>
        <div> 
          <Header />
        </div>
      </Suspense>

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>


      <div className="h-24" />

      <Footer />
    </div>
  );
}
