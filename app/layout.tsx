import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Ustadi's Veg Restaurant | Premium Vegetarian Dining in Ahmedabad",
  description: "Discover a welcoming vegetarian dining experience in Makarba, Ahmedabad, where quality food, generous portions and warm hospitality come together.",
  openGraph: {
    title: "Ustadi's Veg Restaurant | Premium Vegetarian Dining in Ahmedabad",
    description: "Discover a welcoming vegetarian dining experience in Makarba, Ahmedabad, where quality food, generous portions and warm hospitality come together.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ustadi's Veg Restaurant",
    description: 'Premium vegetarian family restaurant in Makarba, Ahmedabad.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Ustadi's",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    "servesCuisine": "Vegetarian",
    "priceRange": "₹200-₹400",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Trishul Food Park, Opp. Krupal Heritage",
      "addressLocality": "Makarba, Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380051",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "66"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-secondary text-primary font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
