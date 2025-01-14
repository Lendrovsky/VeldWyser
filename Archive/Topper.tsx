"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Topper = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Controleer of de gebruiker bovenaan de pagina is
      if (window.scrollY === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Voeg scrolllistener toe
    window.addEventListener("scroll", handleScroll);

    // Cleanup functie om de listener te verwijderen
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#9f7f4e",
        color: "white",
        height: "35px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 16px",
        fontSize: "14px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%", // Zorgt ervoor dat de balk 100% breed is
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Adres en locatie-icoon */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "8px" }}>
        <Image src="/images/icons/location.png" alt="Location" width={16} height={16} />
        <span>Leeuwarden, Netherlands</span>
      </div>

      {/* E-mail en e-mail-icoon */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Tekst */}
            <span>Contact us:</span>
        <Image src="/images/icons/mail.png" alt="Email" width={16} height={16} />
        <a href="mailto:info@veldwyser.com" style={{ color: "white", textDecoration: "underline" }}>
          info@veldwyser.com
        </a>
      </div>

      {/* Sociale media: tekst en iconen */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Tekst */}
        <span>Follow us:</span>

        {/* LinkedIn-icoon */}
        <a href="https://www.linkedin.com/company/veldwyser" target="_blank" rel="noopener noreferrer">
          <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
        </a>
        {/* YouTube-icoon */}
        <a href="https://www.youtube.com/channel/UCr3cbCqAkg4oOU7bmnkhL_g" target="_blank" rel="noopener noreferrer">
          <Image src="/images/icons/youtube.png" alt="YouTube" width={16} height={16} />
        </a>
        {/* Instagram-icoon */}
        <a href="https://www.instagram.com/veldwyser/" target="_blank" rel="noopener noreferrer">
          <Image src="/images/icons/insta.png" alt="Instagram" width={16} height={16} />
        </a>
      </div>
    </div>
  );
};

export default Topper;
