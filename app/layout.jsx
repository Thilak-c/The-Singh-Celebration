import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { metadata } from './head';
import Script from 'next/script'; // Use Next.js Script component for better performance

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive" // Load after the page is interactive
          src="https://www.googletagmanager.com/gtag/js?id=AW-11536910236"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11536910236');
          `}
        </Script>
      </head>

      <body className=" animate-fade-in antialiased">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
        <h1>Best Hotels and Guest Houses in Patna</h1>
        <h2>Affordable and Comfortable Stays in Patna</h2>
        <h3>Top-Rated Hotels in Patna</h3>
      </body>
    </html>
  );
}