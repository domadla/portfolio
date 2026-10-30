import type { Metadata } from "next";
import { portfolio } from "@/content/portfolio";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.name.join(" ")} — ${portfolio.role}`,
  description: portfolio.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
