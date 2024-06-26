
import { Roboto } from "next/font/google";
import { Header } from "src/components/Shared/Header";
import { Footer } from "src/components/Shared/Footer"; // al importarse como objeto nos ayuda con mayor info al romperse el componete


import "src/sass/globals.sass";

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
        {children}
        <Footer/>
      </body>
    </html>
  );
}
