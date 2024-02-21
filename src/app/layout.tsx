
import { Roboto } from "next/font/google";
import { Header } from "app/components/Shared/Header";
import { Footer } from "app/components/Shared/Footer"; // al importarse como objeto nos ayuda con mayor info al romperse el componete
import { Descrition } from "app/components/Home/Description";
import { Hero } from "app/components/Home/Hero";

import "./../sass/globals.sass";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>  
        <Hero/>
        <Descrition/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
