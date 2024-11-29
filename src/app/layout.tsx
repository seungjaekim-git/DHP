import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/container/footer/footer"
import TwoLayerNavigation from "@/container/navbar/navigationBar"
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster"



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}&submodules=geocoder`}
      />
      </head>
      <body className="flex flex-col min-h-screen container mx-auto">
        <div className="flex-grow w-full h-full items-center justify-center">
        <TwoLayerNavigation />
        {/* <DynamicBreadcrumb /> */}
        {children}
        <Toaster />
        <Footer />
        </div>
      </body>
    </html>
  );
}
