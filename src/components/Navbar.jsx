import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildGeneralEnquiryMessage, buildWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Discover Snacks', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];
  const orderNowURL = buildWhatsAppUrl(buildGeneralEnquiryMessage());

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 py-4 ${
      scrolled 
        ? 'top-2 px-4 md:px-8' 
        : 'top-0 px-0'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${
        scrolled 
          ? 'glass rounded-full shadow-lg border border-white/5 py-2' 
          : 'bg-transparent py-4 border-b border-white/5'
      }`}>
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group" data-cursor="pointer">
              <div className="w-9 h-9 rounded-full bg-brand-orange text-brand-dark flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-normal text-white">
                EATSMAA
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                data-cursor="pointer"
                className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-brand-orange relative py-2 ${
                  location.pathname === link.path ? 'text-white' : 'text-stone-400'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-orange rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <a
              href={orderNowURL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="accent"
              className="ml-4 px-6 py-2.5 rounded-full bg-brand-orange text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-orange/90 glow-orange transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-400 hover:text-white focus:outline-none p-2 rounded-full hover:bg-white/5 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 mt-2"
          >
            <div className="glass rounded-3xl p-6 space-y-3 shadow-2xl border border-white/5 overflow-hidden">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-2xl text-base font-bold uppercase tracking-wider ${
                    location.pathname === link.path
                      ? 'text-white bg-white/5 border border-white/5'
                      : 'text-stone-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={orderNowURL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block mt-6 px-4 py-4 rounded-2xl bg-brand-orange text-white font-bold text-center text-sm uppercase tracking-widest"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
