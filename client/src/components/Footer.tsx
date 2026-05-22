import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Minimalist Gold Roof Icon */}
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 200 160"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 30 100 L 100 30 L 170 100"
                    stroke="#D4AF37"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="140" y="50" width="16" height="35" fill="#D4AF37" />
                  <rect x="70" y="75" width="12" height="12" fill="#D4AF37" />
                  <rect x="88" y="75" width="12" height="12" fill="#D4AF37" />
                  <rect x="70" y="93" width="12" height="12" fill="#D4AF37" />
                  <rect x="88" y="93" width="12" height="12" fill="#D4AF37" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg">Prime Nest</span>
                <span className="text-xs text-gray-400">Interiors</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium interior design solutions for modern apartments in Hyderabad. Creating spaces that blend luxury with practicality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-yellow-500 transition-colors no-hover">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-500 transition-colors no-hover">About</Link></li>
              <li><Link href="/services" className="hover:text-yellow-500 transition-colors no-hover">Services</Link></li>
              <li><Link href="/projects" className="hover:text-yellow-500 transition-colors no-hover">Projects</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/modular-kitchens" className="hover:text-yellow-500 transition-colors no-hover">Modular Kitchens</Link></li>
              <li><Link href="/wardrobes" className="hover:text-yellow-500 transition-colors no-hover">Wardrobes</Link></li>
              <li><Link href="/tv-units" className="hover:text-yellow-500 transition-colors no-hover">TV Units</Link></li>
              <li><Link href="/services" className="hover:text-yellow-500 transition-colors no-hover">All Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+919542663490" className="hover:text-yellow-500 transition-colors no-hover">
                  +91 9542 663 490
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@primenestinteriors.com" className="hover:text-yellow-500 transition-colors no-hover">
                  info@primenestinteriors.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Prime Nest Interiors. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/terms-and-conditions" className="hover:text-yellow-500 transition-colors no-hover">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="hover:text-yellow-500 transition-colors no-hover">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              Designed with ❤️ for your dream home
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors no-hover"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors no-hover"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors no-hover"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
