import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot your password? Reset it here.",
};

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
