import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  pageType?: 'website' | 'article';
}

const BASE_URL = 'https://shristienterprises.in';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const SCHEMA_MARKUP = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shristi Enterprises - Modular Kitchen in Udaipur',
  '@id': BASE_URL,
  url: BASE_URL,
  telephone: '+919829346870',
  priceRange: '₹₹',
  description:
    'Shristi Enterprises is a leading modular kitchen manufacturer in Udaipur, Rajasthan. We offer custom modular kitchens, interior solutions, wardrobe design, cabinet manufacturing, and kitchen accessories installation.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gali 4/1, Ashwini Bazaar Road, Near SBI ATM, Basti Ram Ji Ki Badi',
    addressLocality: 'Udaipur',
    addressRegion: 'Rajasthan',
    postalCode: '313004',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.5859,
    longitude: 73.6857,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: ['https://www.instagram.com/shristi_enterprisess/'],
  image: DEFAULT_OG_IMAGE,
};

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Shristi Enterprises - Modular Kitchen in Udaipur | Custom Kitchen Design',
  description = 'Shristi Enterprises is a leading modular kitchen manufacturer in Udaipur. We offer custom L-shaped, U-shaped, island, and parallel kitchens with premium materials. 500+ projects completed. Call +91 98293 46870.',
  keywords = 'Modular Kitchen in Udaipur, Modular Kitchen Manufacturer Udaipur, Custom Kitchen Design Udaipur, Kitchen Interior Udaipur, Modular Kitchen Services Udaipur',
  canonicalUrl = BASE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  pageType = 'website',
}) => {
  const fullTitle = title.includes('Shristi') ? title : `${title} | Shristi Enterprises Udaipur`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Shristi Enterprises" />
      <meta name="theme-color" content="#008000" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Shristi Enterprises" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema Markup */}
      <script type="application/ld+json">{JSON.stringify(SCHEMA_MARKUP)}</script>
    </Helmet>
  );
};

export default SEOHead;
