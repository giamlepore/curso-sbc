import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Curiô - crie seu curso com o menor custo",
  description: "O menor custo para colocar o seu curso no ar, usando o seu próprio método de pagamento",
  openGraph: {
    title: "Curiô - crie seu curso com o menor custo",
    description: "O menor custo para colocar o seu curso no ar, usando o seu próprio método de pagamento",
    images: [
      {
        url: "/curio.png",
        width: 1200,
        height: 630,
        alt: "Curiô Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curiô - crie seu curso com o menor custo",
    description: "O menor custo para colocar o seu curso no ar, usando o seu próprio método de pagamento",
    images: ["/curio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
