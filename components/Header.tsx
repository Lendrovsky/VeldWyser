"use client";

import { useState, useEffect } from "react";
import type { JSX } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonRegister from "./ButtonRegister";
import ButtonSignIn from "./ButtonSignIn";
import logo from "@/app/icon.png";
import config from "@/config";
import Topper from "../Archive/Topper";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/#testimonials",
    label: "Home",
  },
  {
    href: "/#features",
    label: "Features",
  },
  {
    href: "/blog",
    label: "News",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
  {
    href: "/about",
    label: "About Veld Wyser",
  },
];

const cta: JSX.Element = (
  <div className="flex gap-4">
    <ButtonRegister extraStyle="btn-primary" />
    <ButtonSignIn extraStyle="btn-secondary" />
  </div>
);

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isShrunk, setIsShrunk] = useState<boolean>(false);
  const [topperVisible, setTopperVisible] = useState<boolean>(true);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
        setIsShrunk(true);
        setTopperVisible(false);
      } else {
        setIsSticky(false);
        setIsShrunk(false);
        setTopperVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Topper Bar */}
      <Topper />

      {/* Main Header */}
      <header
        style={{
          backgroundColor: "#d5d1c0",
          top: topperVisible ? "35px" : "0", // Adjust top positioning
          transition: "top 0.3s ease, height 0.3s ease, padding 0.3s ease",
        }}
        className={`${
          isSticky ? "fixed" : "relative"
        } left-0 right-0 z-50`} // Fixed only when sticky
      >
        <nav
          className="container flex items-center justify-between px-8 py-4 mx-auto"
          aria-label="Global"
          style={{
            height: isShrunk ? "60px" : "96px",
            paddingTop: isShrunk ? "8px" : "16px",
            paddingBottom: isShrunk ? "8px" : "16px",
          }}
        >
          <div className="flex lg:flex-1">
            <Link
              className="flex items-center gap-2 shrink-0"
              href="/"
              title={`${config.appName} homepage`}
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className={`w-${isShrunk ? "14" : "22"}`}
                placeholder="blur"
                priority={true}
                width={isShrunk ? 56 : 86}
                height={isShrunk ? 56 : 86}
              />
              <span
                className="font-extrabold"
                style={{
                  fontSize: isShrunk ? "28px" : "36px",
                }}
              >
                {config.appName}
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="link link-hover"
                title={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:justify-end lg:flex-1">{cta}</div>
        </nav>
      </header>
    </>
  );
};

export default Header;
