// import Context
import { AppProvider } from "./context";

// import css
import "./globals.css";

// import google fonts
import { Poppins, Arima } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const arima = Arima({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: ["--arima"],
});

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${poppins.className} ${arima.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </AppProvider>
  );
}
