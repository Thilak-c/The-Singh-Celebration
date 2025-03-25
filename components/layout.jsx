import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { metadata } from './head';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
      </head>
      <body
        className={`animate-fade-in antialiased`}
      >
        <Navbar />
        {/* <div className="h-[70px] "></div> */}
        {children}
        {/* <Footer /> */}
      </body>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11536910236">
      </script>
    </html>
  );
}
