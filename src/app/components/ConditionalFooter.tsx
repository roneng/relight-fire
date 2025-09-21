
"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const ConditionalFooter = () => {
  const pathname = usePathname();
  const noFooterPaths = ["/", "/login", "/signup", "/pairing"];

  return noFooterPaths.includes(pathname) ? null : <Footer />;
};

export default ConditionalFooter;
