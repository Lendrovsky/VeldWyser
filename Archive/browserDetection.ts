export const detectBrowser = () => {
    if (typeof window === "undefined") {
      return "Server"; // Tijdens SSR
    }
  
    const userAgent = navigator.userAgent;
  
    if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
      return "Opera";
    }
    if (userAgent.includes("Edge")) {
      return "Edge";
    }
    if (userAgent.includes("Chrome")) {
      return "Chrome";
    }
    if (userAgent.includes("Safari")) {
      return "Safari";
    }
    if (userAgent.includes("Firefox")) {
      return "Firefox";
    }
    if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
      return "Internet Explorer";
    }
  
    return "Unknown";
  };
  