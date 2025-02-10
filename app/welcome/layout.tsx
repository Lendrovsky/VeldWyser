import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image"; // Import Image from next/image

export default async function layoutwelcome({ children }: { children: any }) {
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
            src="/blog/introducing-supabase/Pieter 3.jpg"
            alt="Veld landscape"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-neutral bg-opacity-70"></div>
        </div>
  
        {/* Main content with reduced padding */}
        <main className="px-8 py-20">{children}</main>
  
        <Footer />
      </div>
    );
  }
  