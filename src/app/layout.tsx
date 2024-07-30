import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/container/navbar/navbar"
import Footer from "@/container/footer/footer"
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
    <html lang="en">
      <body>
        {children}
        <Footer />

      </body>
    </html>
    // <html lang="en">
    //   <body className="bg-white pb-6 sm:pb-8 lg:pb-12">
    //     <nav>
    //       <Navbar />
    //     </nav>
    //     <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    //       {children}
    //     </div>

    //     <footer className="bg-gray-800 text-white py-6">
    //       <div className="container mx-auto text-center">
    //       </div>
    //     </footer>
    //   </body>
    // </html >
  );
}
