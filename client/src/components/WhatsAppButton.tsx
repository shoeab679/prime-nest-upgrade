import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappLink = "https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle className="w-6 h-6" />
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={isHovered ? { opacity: 1, width: 'auto' } : { opacity: 0, width: 0 }}
          transition={{ duration: 0.2 }}
          className="font-semibold text-sm overflow-hidden whitespace-nowrap"
        >
          Chat with us
        </motion.span>
      </motion.a>
    </motion.div>
  );
}
