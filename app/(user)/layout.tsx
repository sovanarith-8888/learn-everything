import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "@/app/(user)/loading"
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "@/app/(user)/error"

//const inter = Inter({ subsets: ["latin"] });
import { inter,suwannaphum } from "./fonts";


export const metadata: Metadata = {
  title: "ISTAD Ecommerce Web",
  description: "Istad ecommerse for real production",
  // focus on social media and share.
  openGraph: {
    title: "Isad ecom web",
    description: "Isad ecommer web is a web",
    images: ["https://lilacinfotech.com/lilac_assets/images/blog/What-Is-E-commerce-and-what-are-its-Applications.jpg"
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen flex flex-col ${inter.variable}`} >
        <header>
          <NavbarComponent/>
        </header>
        <ErrorBoundary errorComponent={
          Error}>
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </ErrorBoundary>
        
      </body>
    </html>
  );
}
