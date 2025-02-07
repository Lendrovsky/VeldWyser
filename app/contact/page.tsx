import config from "@/config";
import Head from "next/head";
import { getSEOTags } from "@/libs/seo";
import Image from "next/image"; // Import Image from next/image

export default function Contact() {
  const metadata = getSEOTags({
    title: "Contact Us | " + config.appName,
    description: "Contact us for inquiries, support, or feedback. We are here to assist you.",
  });

  const contactMetadata = {
    ...metadata,
    canonicalUrlRelative: "/contact",
  };

  const canonicalUrl = contactMetadata.canonicalUrlRelative || `${config.domainName}/contact`;

  return (
    <>
      <Head>
        <title>{contactMetadata.title as string}</title>
        <meta name="description" content={contactMetadata.description} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>

      {/* Wrapper to limit the layout */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-24">
        {/* Grid Layout */}
        <section className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="font-bold text-xl mb-4">Need us?</h2>
            <p className="text-base opacity-80 leading-relaxed mb-6">
              We&apos;d love to hear from you! Whether you have a question, comment, or
              would like to learn more about our services, feel free to reach out. We&apos;re here to assist you.
            </p>
            <form action="submit_form.php" method="post">
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />

              <label htmlFor="email" className="block mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />

              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#4a00ff] text-white py-2 px-4 rounded hover:bg-opacity-90"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-bold text-xl mb-4">Contact Information</h2>
            <address className="space-y-4">
              <p className="flex items-center">
                <Image
                  src="/images/icons/location.png"
                  alt="Location"
                  width={24} // Define width
                  height={24} // Define height
                  className="mr-3"
                />
                Street Name 123, 1234 AB City, Netherlands
              </p>
              <p className="flex items-center">
                <Image
                  src="/images/icons/phone.png"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                +31 (0) 123 456 789
              </p>
              <p className="flex items-center">
                <Image
                  src="/images/icons/mail.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <a href="mailto:info@veldwyser.com" className="hover:underline">info@veldwyser.com</a>
              </p>
            </address>

            {/* Business Hours */}
            <section className="mt-8">
              <h2 className="font-bold text-xl mb-4">Business Hours</h2>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday - Sunday: Closed</li>
              </ul>
            </section>

            {/* Google Maps Section */}
            <section id="location-map" className="mt-8">
              <h2 className="font-bold text-xl mb-4">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65823.98373250084!2d5.777304991363727!3d53.200306645190466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8fef2953ab5ef%3A0x543dbba8c956a9b6!2sLeeuwarden!5e1!3m2!1snl!2snl!4v1735846601966!5m2!1snl!2snl"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-md shadow-md"
              ></iframe>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
