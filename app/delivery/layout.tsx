import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function layoutDelivery({ children }: { children: any }) {
  return (
    <div>
      <Suspense>
        <div> 
          <Header />
        </div>
      </Suspense>

       {/* Volledige breedte afbeelding met titel erboven */}
       <div className="relative w-full h-[400px]">
        <img
          src="/images/veld2.png"
          alt="Veld landscape"
          className="w-full h-full object-cover"
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
