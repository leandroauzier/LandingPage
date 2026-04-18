import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina Creative Studio | Landing Pages e Design para Empresas",
  description:
    "Criamos landing pages modernas, estratégicas e visualmente marcantes para empresas que querem se destacar no digital.",
  keywords: "landing page, web design, identidade visual, agência digital, branding",
  openGraph: {
    title: "Lumina Creative Studio | Landing Pages e Design para Empresas",
    description:
      "Criamos landing pages modernas, estratégicas e visualmente marcantes para empresas que querem se destacar no digital.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-white antialiased font-(family-name:--font-inter)">
        {children}
      </body>
    </html>
  );
}
