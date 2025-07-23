import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Primary Meta Tags */}
        <title>ShipUSA & More - Shipping, U-Haul, Mailbox & Business Services</title>
        <meta
          name="title"
          content="ShipUSA & More - Shipping, U-Haul, Mailbox & Business Services"
        />
        <meta
          name="description"
          content="Your trusted partner for shipping with FedEx, UPS, DHL, USPS. Authorized U-Haul dealer, private mailboxes, notary services, passport photos, and more business solutions."
        />
        <meta
          name="keywords"
          content="shipping services, U-Haul rental, mailbox rental, notary public, passport photos, FedEx, UPS, DHL, USPS, business services, fingerprinting, copies, faxing"
        />
        <meta name="author" content="ShipUSA & More" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shipusaandmore.com/" />
        <meta property="og:title" content="ShipUSA & More - Complete Shipping & Business Solutions" />
        <meta
          property="og:description"
          content="Authorized shipping center for all major carriers. U-Haul rentals, private mailboxes, notary services, and professional business solutions all in one location."
        />
        <meta property="og:image" content="https://shipusaandmore.com/assets/og-image.jpg" />
        <meta property="og:site_name" content="ShipUSA & More" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shipusaandmore.com/" />
        <meta property="twitter:title" content="ShipUSA & More - Complete Shipping & Business Solutions" />
        <meta
          property="twitter:description"
          content="Authorized shipping center for all major carriers. U-Haul rentals, private mailboxes, notary services, and professional business solutions."
        />
        <meta property="twitter:image" content="https://shipusaandmore.com/assets/og-image.jpg" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Your City, State" />
        <meta name="geo.position" content="latitude;longitude" />
        <meta name="ICBM" content="latitude, longitude" />
        
        {/* Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ShipUSA & More",
              "image": "https://shipusaandmore.com/assets/logo.jpg",
              "@id": "https://shipusaandmore.com/",
              "url": "https://shipusaandmore.com/",
              "telephone": "+1-555-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.75,
                "longitude": -73.98
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/shipusaandmore",
                "https://www.instagram.com/shipusaandmore"
              ],
              "priceRange": "$",
              "description": "Complete shipping and business solutions including FedEx, UPS, DHL, USPS shipping, U-Haul rentals, private mailboxes, notary services, and passport photos.",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 40.75,
                  "longitude": -73.98
                },
                "geoRadius": "25000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shipping Services",
                      "description": "FedEx, UPS, DHL, USPS shipping and package receiving"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "U-Haul Rentals",
                      "description": "Truck and trailer rentals for moving"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Mailbox Services",
                      "description": "Private and digital mailbox rentals"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Notary Services",
                      "description": "Certified notary public services"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Google Search Console Verification - Replace with your actual verification code */}
        <meta name="google-site-verification" content="your-google-search-console-verification-code" />
        
        {/* Bing Webmaster Tools - Replace with your actual verification code */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://shipusaandmore.com/" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X2WXQDFXH3"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
       {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X2WXQDFXH3', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      
      <Component {...pageProps} />
    </>
  );
}
