import { Header } from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import React from "react";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/*Header*/}
          <Header />

          {/*Navbar */}

          <Navbar />

          {/*SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
