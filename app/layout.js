import Footer from "./components/Footer/Footer";
import Copyright from "./components/Misc/Copyright";
import Navbar from "./components/Navbar/Navbar";
import OverlayNavbar from "./components/Navbar/OverlayNavbar";
import "./globals.css";

export const metadata = {
  title: "Urifry",
  description: "Urifry Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-white min-h-screen font-main-font">
        <Navbar />
        <OverlayNavbar />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
