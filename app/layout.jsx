import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "openSans",
});

export const metadata = {
  title: "Levani Levanidze's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="myContainer">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
