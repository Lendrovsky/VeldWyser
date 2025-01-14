import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <div>
          <Header />
        </div>
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
