import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `About Veld Wyser | ${config.appName}`,
  canonicalUrlRelative: "/about",
});

const AboutVeldWyser = () => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="text-center">
        <p className="text-lg text-gray-600">
          At Veld Wyser, we are passionate about empowering farmers with 
          data-driven solutions for better veld management and sustainable growth.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To provide innovative tools and insights that help farmers maximize their 
          land&apos;s potential while preserving natural resources for future generations.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          To be the leading platform for smart, sustainable agriculture, empowering 
          farmers in South Africa through technology and collaboration. We achieve this by offer a data driven solution that is affordable and as reliable as possible.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
          <img
              src="/images/authors/Leendert.jpg"
              alt="Leendert Visser"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Leendert Visser</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-12 text-gray-500">
        © {new Date().getFullYear()} Veld Wyser. All rights reserved.
      </footer>
    </main>
  );
};

export default AboutVeldWyser;
