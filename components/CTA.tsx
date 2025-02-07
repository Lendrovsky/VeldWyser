import Image from "next/image";
import ButtonLead from "./ButtonLead";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="/images/veld2.png"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-8">
            Become part of the Blueprint
          </h2>
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Join the waitlist
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-8">
            Your voice is crucial for our success. Share your thoughts and feature suggestions as part of our community.
            Together we create the best possible tool for your farm.
          </p>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Join our early access and plant your seeds today so that tomorrow&apos;s ideas may flourish.
          </p>

          {/* Nieuwsbrief formulier */}
          <ButtonLead />
        </div>
      </div>
    </section>
  );
};

export default CTA;