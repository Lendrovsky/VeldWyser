import Head from "next/head";
import Link from "next/link";
import config from "@/config";

export default function SecurityAndAuthenticity() {
  return (
    <>
      <Head>
        <title>Security & Product Authenticity | {config.appName}</title>
        <meta
          name="description"
          content="Learn about how we ensure the security of our platform and guarantee the authenticity of our products."
        />
        <link rel="canonical" href={`${config.domainName}/security-and-authenticity`} />
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
            Your trust is our priority. Learn about how we ensure the security of your data and the authenticity of our products.
          </p>
        </section>

        {/* Content Section */}
        <section className="space-y-12">
          {/* Security Measures */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment to Security</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              At {config.appName}, we take the security of our platform and your personal data seriously. 
              We employ the latest industry standards to protect your information, including:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>End-to-end encryption for all sensitive data.</li>
              <li>Regular security audits and vulnerability assessments.</li>
              <li>Secure payment gateways and data transmission protocols.</li>
              <li>Two-factor authentication (2FA) for account security.</li>
            </ul>
          </div>

          {/* Product Authenticity */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ensuring Product Authenticity</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We are committed to providing only authentic products. To ensure this, we have implemented 
              stringent measures, including:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Partnering exclusively with verified and trusted suppliers.</li>
              <li>Using unique QR codes or serial numbers for product verification.</li>
              <li>Offering a dedicated platform for customers to verify product authenticity.</li>
              <li>Regular quality checks and compliance with international standards.</li>
            </ul>
          </div>

          {/* How to Verify Authenticity */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">How to Verify Product Authenticity</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              You can easily verify the authenticity of a product purchased from us by:
            </p>
            <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Scanning the QR code or entering the serial number on our{" "}
                <Link href="/verify" className="text-blue-600 underline">
                  Product Verification Page
                </Link>.
              </li>
              <li>Checking for tamper-proof seals and packaging.</li>
              <li>Contacting our support team for assistance.</li>
            </ol>
          </div>

          {/* Customer Support */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              If you have any concerns about the security of your account or the authenticity of a product, 
              please don't hesitate to contact us. Our dedicated support team is here to assist you.
            </p>
            <Link href="/contact">
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Contact Support
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
