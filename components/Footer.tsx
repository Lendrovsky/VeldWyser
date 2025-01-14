import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  return (
    <footer className="bg-base-300 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
          <div className="w-full lg:w-1/3 flex-shrink-0 text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-12 h-12"
                width={54}
                height={54}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          {/* Get to Know Us sectie */}
          <div className="w-full lg:w-1/3 px-4 text-center md:text-left">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              Get to Know Us
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
              <Link href="/blog" className="link link-hover">
                News
              </Link>
              <a href="/#faq" target="_blank" className="link link-hover">
                FAQ
              </a>
              <Link href="/AboutUs" className="link link-hover">
                About Veld Wyser
              </Link>
              <Link href="/contact" className="link link-hover">
                Contact Information
              </Link>
            </div>
          </div>

          {/* Let Us Help You sectie */}
          <div className="w-full lg:w-1/3 px-4 text-center md:text-left">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              LET US HELP YOU
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
              <Link href="/security" className="link link-hover">
                Product Authenticity & Security
              </Link>
              <Link href="/delivery" className="link link-hover">
                Delivery Rate & Policy
              </Link>
              <Link href="/tos" className="link link-hover">
                Terms of Services
              </Link>
              <Link href="/privacy-policy" className="link link-hover">
                Privacy Policy
              </Link>
              <Link href="/access">
              Accessibility
              </Link>
              <Link href="/contact" className="link link-hover">
                Customer Service
              </Link>
              <Link href="/report" className="link link-hover">
                Report a Problem
              </Link>
            </div>
          </div>

          {/* Follow Us sectie */}
          <div className="w-full lg:w-1/5 px-4 text-center md:text-left">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              Follow Us
            </div>
            <div className="flex flex-col gap-2 text-sm">
              {/* LinkedIn-icoon */}
              <a
                href="https://www.linkedin.com/company/veldwyser"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base-content"
              >
                <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                <span className="text-base-content">LinkedIn</span>
              </a>

              {/* YouTube-icoon */}
              <a
                href="https://www.youtube.com/channel/UCr3cbCqAkg4oOU7bmnkhL_g"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base-content"
              >
                <Image src="/images/icons/youtube.png" alt="YouTube" width={24} height={24} />
                <span className="text-base-content">YouTube</span>
              </a>

              {/* Instagram-icoon */}
              <a
                href="https://www.instagram.com/veldwyser/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base-content"
              >
                <Image src="/images/icons/insta.png" alt="Instagram" width={24} height={24} />
                <span className="text-base-content">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dunne balk onderaan met extra informatie */}
      <div className="bg-[#d5d1c0] py-2 text-sm text-center">
        <p className="text-base-content/80">
          Copyright © {new Date().getFullYear()} Veld Wyser | KVK: 12345678 | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
