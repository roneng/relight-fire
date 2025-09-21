
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pair Accounts",
  description: "Pair your account with your partner's",
};

export default function PairingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
