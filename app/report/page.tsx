import config from "@/config";
import Head from "next/head";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

export default function ReportProblem() {
  const metadata = getSEOTags({
    title: "Report a Problem | " + config.appName,
    description: "Report any issues, bugs, or problems you are encountering. We are here to help.",
  });

  const reportMetadata = {
    ...metadata,
    canonicalUrlRelative: "/report-a-problem",
  };

  const canonicalUrl = reportMetadata.canonicalUrlRelative || `${config.domainName}/report-a-problem`;

  return (
    <>
      <Head>
      <title>{String(reportMetadata.title)}</title>
      <meta name="description" content={reportMetadata.description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>

        <p className="text-lg text-center mb-8">
          Having trouble with the app or website? Let us know what the issue is, and we&apos;ll help you resolve it as soon as possible.
        </p>

        <form action="submit_report_form.php" method="POST">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="problemDescription" className="block text-sm font-semibold">Problem Description:</label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Describe the issue you&apos;re facing."
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="screenshot" className="block text-sm font-semibold">Screenshot (Optional):</label>
              <input
                type="file"
                id="screenshot"
                name="screenshot"
                className="w-full p-3 border border-gray-300 rounded-md"
                accept="image/*"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4a00ff] text-white py-3 rounded-md hover:bg-opacity-90"
            >
              Submit Problem
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
