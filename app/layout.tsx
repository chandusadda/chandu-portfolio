
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./../Utils/customTheme";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import ClientOnly from "./clientOnly";
import { Metadata } from "next/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chandu Portfolio",
  description: "Find out more about Chandu Sadda's journey exploring the world of tech & non-tech details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Custom theme set
  const theme = customTheme;
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          {/* <ScrollToTop /> */}
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SPEMCLQ8VG"
            id="google-analytics"
            defer
          ></script>
          <script
            id="google-analytics-measurement"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SPEMCLQ8VG');`,
            }}
            defer
          />
          <ClientOnly>
            <Header />
            {children}
            <Footer />
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
