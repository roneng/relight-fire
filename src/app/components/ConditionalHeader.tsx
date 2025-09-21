
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const ConditionalHeader = () => {
  const pathname = usePathname();
  const noHeaderPaths = ["/", "/login", "/signup", "/pairing"];

  return noHeaderPaths.includes(pathname) ? null : <Header />;
};

export default ConditionalHeader;
