import Head from "next/head";
import Link from "next/link";
import config from "@/config";

export default function DeliveryPolicy() {
  return (
    <>
      <Head>
        <title>Delivery Rate & Policy | {config.appName}</title>
        <meta
          name="description"
          content="Understand our delivery policy for digital products. Access your purchases instantly and securely."
        />
        <link rel="canonical" href={`${config.domainName}/delivery-policy`} />
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
            Instant and secure access to your digital products. Learn more about our delivery policy and customer support.
          </p>
        </section>

        {/* Content Section */}
        <section className="space-y-12">
          {/* Instant Delivery */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Instant Delivery</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              All purchases made through our app are delivered instantly to your account upon successful payment. 
              You can access your digital products directly from the app without delays.
            </p>
          </div>

          {/* Accessing Your Purchases */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Accessing Your Purchases</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              To view or download your purchased items:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Go to the "My Purchases" section in your account.</li>
              <li>Select the item you wish to access.</li>
              <li>If you experience issues, please contact our support team for assistance.</li>
            </ul>
          </div>

          {/* Refund & Cancellation Policy */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Refund & Cancellation Policy</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Due to the nature of digital products, refunds are only available in the following cases:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>The product was not delivered successfully due to technical issues.</li>
              <li>You were charged incorrectly or multiple times for the same product.</li>
            </ul>
            <p className="mt-4">
              To request a refund or report an issue, please contact our{" "}
              <Link href="/contact" className="text-blue-600 underline">
                support team
              </Link>{" "}
              with your order details.
            </p>
          </div>

          {/* Security & Support */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Security & Support</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We take your security seriously. All purchases are encrypted and linked to your account to prevent unauthorized access.
              If you encounter any issues, our support team is here to help.
            </p>
            <p className="mt-4">
              Visit our{" "}
              <Link href="/contact" className="text-blue-600 underline">
                support page
              </Link>{" "}
              for assistance or additional information.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
