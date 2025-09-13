import "./globals.css";
import Navigation from "./navigation.js";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link.js";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // body text weights
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"], // heading weights
  variable: "--font-montserrat",
});
export const metadata = {
  title: "Portfolio - Salman Azad",
  description: "My Next.js portfolio with smooth transitions",
};


export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        
        {/* Top Navigation */}
        <div className="top-navigation-container">
          <Navigation />
        </div>

        {/* Social Icons Sidebar */}
        <div className="left-logo-container">
            <Link href="https://www.linkedin.com/in/salman-azad/"><FaLinkedin size={24} /></Link>
            <Link href=""><FaFacebook size={24} /></Link>
            <Link href=""><FaInstagram size={24} /></Link>
        </div>

        {/* Page Transition Wrapper */}
        <div className="main-container">
            {children}
        </div>
            
       

      </body>
    </html>
  );
}
