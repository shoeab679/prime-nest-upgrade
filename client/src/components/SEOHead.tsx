import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'business.business';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export function useSEOHead({
  title,
  description,
  keywords = 'interior design, modular kitchen, wardrobe, TV unit, home interior, Hyderabad',
  image = 'https://primenestinteriors.in/og-image.jpg',
  url = 'https://primenestinteriors.in',
  type = 'website',
  author = 'Prime Nest Interiors',
  publishedDate,
  modifiedDate,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) ||
                document.querySelector(`meta[property="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(name.includes('og:') ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('og:site_name', 'Prime Nest Interiors');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional meta tags
    updateMetaTag('theme-color', '#D4AF37');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Publish and modified dates
    if (publishedDate) {
      updateMetaTag('article:published_time', publishedDate);
    }
    if (modifiedDate) {
      updateMetaTag('article:modified_time', modifiedDate);
    }

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured Data (JSON-LD)
    updateStructuredData(title, description, image, url);
  }, [title, description, keywords, image, url, type, author, publishedDate, modifiedDate]);
}

function updateStructuredData(title: string, description: string, image: string, url: string) {
  let script = document.querySelector('script[type="application/ld+json"]');
  
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Prime Nest Interiors',
    description: description,
    image: image,
    url: url,
    telephone: '+919542663490',
    email: 'info@primenestinteriors.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      streetAddress: 'Hyderabad, Telangana',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.3850',
      longitude: '78.4867',
    },
    priceRange: '₹₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://facebook.com/primenestinteriors',
      'https://instagram.com/primenestinteriors',
      'https://linkedin.com/company/primenestinteriors',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '85',
      bestRating: '5',
      worstRating: '1',
    },
  };

  script.textContent = JSON.stringify(structuredData);
}

export default function SEOHead(props: SEOHeadProps) {
  useSEOHead(props);
  return null;
}
