import Head from "next/head";
import Link from "next/link";
import config from "@/config";

export default function Access() {
  return (
    <>
      <Head>
        <title>Accessibility | {config.appName}</title>
        <meta
          name="description"
          content="Learn about our commitment to accessibility. We strive to ensure our app is inclusive and usable for everyone."
        />
        <link rel="canonical" href={`${config.domainName}/accessibility`} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 mt-16 mb-24">
        {/* Back Button */}
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        {/* Hero Section */}
        <section className="text-center mb-12">
          <p className="text-lg text-gray-600">
            Our commitment to inclusivity ensures that everyone can enjoy and benefit from our app, regardless of ability.
          </p>
        </section>

        {/* Content Section */}
        <section className="space-y-12">
          {/* Our Commitment */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We are dedicated to making our app accessible to all users, including those with disabilities. Our goal is to comply with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and ensure an inclusive experience for everyone.
            </p>
          </div>

          {/* Accessibility Features */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Keyboard navigation for all interactive elements.</li>
              <li>Text alternatives (alt text) for images and multimedia content.</li>
              <li>Support for screen readers and assistive technologies.</li>
              <li>Adjustable text sizes and contrast for improved readability.</li>
              <li>Semantic HTML for better accessibility and usability.</li>
            </ul>
          </div>

          {/* Feedback & Reporting Issues */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Feedback & Reporting Issues</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We value your feedback to help us improve our accessibility. If you encounter any barriers while using our app or have suggestions for improvement, please let us know.
            </p>
            <p className="mt-4">
              You can reach us at{" "}
              <Link href="/contact" className="text-blue-600 underline">
                our contact page
              </Link>{" "}
              or email us directly at{" "}
              <a href="mailto:support@veldwyser.com" className="text-blue-600 underline">
                support@veldwyser.com
              </a>.
            </p>
          </div>

          {/* Continuous Improvement */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Continuous Improvement</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Accessibility is an ongoing process, and we are committed to improving the user experience for everyone. Our team regularly reviews and updates our app to meet evolving accessibility standards.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
