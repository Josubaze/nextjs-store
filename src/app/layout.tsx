
import { Inter } from "next/font/google";
import { Header } from "app/components/Shared/Header";
import { Footer } from "app/components/Shared/Footer"; // al importarse como objeto nos ayuda con mayor info al romperse el componete
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>  
        {children}
        <Footer/>
      </body>
    </html>
  );
}
