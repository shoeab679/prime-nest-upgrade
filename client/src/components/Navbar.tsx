import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Modular Kitchens', href: '/modular-kitchens' },
    { label: 'Wardrobes', href: '/wardrobes' },
    { label: 'TV Units', href: '/tv-units' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 group no-hover">
            {/* Minimalist Gold Roof Icon */}
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 200 160"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Roof outline */}
                <path
                  d="M 30 100 L 100 30 L 170 100"
                  stroke="#D4AF37"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Chimney */}
                <rect x="140" y="50" width="16" height="35" fill="#D4AF37" />
                {/* Windows */}
                <rect x="70" y="75" width="12" height="12" fill="#D4AF37" />
                <rect x="88" y="75" width="12" height="12" fill="#D4AF37" />
                <rect x="70" y="93" width="12" height="12" fill="#D4AF37" />
                <rect x="88" y="93" width="12" height="12" fill="#D4AF37" />
              </svg>
            </div>

            {/* Brand Text */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-lg md:text-xl text-gray-900">Prime Nest</span>
              <span className="text-xs md:text-sm text-gray-500 font-medium">Interiors</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group no-hover"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md no-hover"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-yellow-600 rounded-lg transition-colors no-hover"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full mt-4 px-4 py-2.5 bg-yellow-500 text-white rounded-lg font-semibold text-center hover:bg-yellow-600 transition-all no-hover"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
