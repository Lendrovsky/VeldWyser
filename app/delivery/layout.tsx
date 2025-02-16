import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default async function layoutDelivery({ children }: { children: any }) {
  return (
    <div>
      <Suspense>
        <div> 
          <Header />
        </div>
      </Suspense>

      {/* Full-width image with title above */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/blog/introducing-supabase/Pieter 5.jpg"
          alt="Veld landscape"
          layout="fill" // Ensures the image covers the full container
          objectFit="cover" // Maintains the image's aspect ratio
        />
        <div className="absolute inset-0 flex items-center justify-center bg-neutral bg-opacity-70">
          <h1 className="text-white text-5xl font-extrabold">Delivery Rate & Policy</h1>
        </div>
      </div>

      {/* Main content */}
      <main className="min-h-screen px-8 py-8">{children}</main>

      <div className="h-24" />
      <Footer />
    </div>
  );
}
